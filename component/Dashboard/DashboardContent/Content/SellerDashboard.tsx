"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DollarSign, LayoutDashboard, Package, ShoppingCart, TrendingUp, UserPen, Users } from 'lucide-react';
import type { OrderRow, statusCard } from './types';
import { useParams } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { BASE_URL } from '@/app/Api/Api';



// Sample data for charts
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const productData = [
  { name: 'Electronics', value: 35 },
  { name: 'Clothing', value: 25 },
  { name: 'Books', value: 20 },
  { name: 'Home', value: 15 },
  { name: 'Other', value: 5 },
];


const fetchNameById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/user/${id}`);
  if (!response.ok) {
    throw new Error('Data fetch failed');
  }
  const data = await response.json();
  return data.name; // Assuming the API returns { name: 'John Doe' }
};



const fetchUserById = async (id: any) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error('User fetch failed');
  }
  const data = await response.json();
  return data.user.name;  // Fetch the name from response
};

function SellerDashboard() {
  const { id } = useParams();  // Get the id from the URL

  const { data, isLoading, error } = useQuery(
    {
      queryKey: ['userName', id],
      queryFn: () => fetchUserById(id),
      enabled: !!id
    }
  )
  // Then conditionally render the component
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!id) return null; // or some other fallback

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50 px-5 py-8 rounded-xl">
      {/* Header */}
      <div className="text-center mb-8">
      <SparklesText>Welcome, {data}!</SparklesText>;
      </div>
      <main className=" px-4 sm:px-6 lg:px-8 pb-8">
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            title="Total Revenue"
            value="$54,763"
            trend="+12.5%"
            icon={<DollarSign className="h-6 w-6 text-green-600" />}
          />
          <StatCard
            title="Total Orders"
            value="1,432"
            trend="+8.2%"
            icon={<ShoppingCart className="h-6 w-6 text-blue-600" />}
          />
          <StatCard
            title="Products Sold"
            value="2,845"
            trend="+15.3%"
            icon={<Package className="h-6 w-6 text-purple-600" />}
          />
          <StatCard
            title="Active Customers"
            value="946"
            trend="+4.7%"
            icon={<Users className="h-6 w-6 text-orange-600" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sales Trend Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Product Category Distribution */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Product Category Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#4F46E5"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <OrderRow
                  id="#ORD-001"
                  customer="John Doe"
                  product="Wireless Headphones"
                  amount="$129.99"
                  status="Delivered"
                />
                <OrderRow
                  id="#ORD-002"
                  customer="Jane Smith"
                  product="Smart Watch"
                  amount="$199.99"
                  status="Processing"
                />
                <OrderRow
                  id="#ORD-003"
                  customer="Mike Johnson"
                  product="Laptop Stand"
                  amount="$49.99"
                  status="Shipped"
                />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}


function StatCard({ title, value, trend, icon }: statusCard) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        {icon}
      </div>
      <div className="mt-4 flex items-center">
        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
        <span className="text-sm font-medium text-green-500">{trend}</span>
        <span className="ml-2 text-sm text-gray-500">vs last month</span>
      </div>
    </div>
  );
}

function OrderRow({ id, customer, product, amount, status }: OrderRow) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{amount}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(status)}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
export default SellerDashboard;
