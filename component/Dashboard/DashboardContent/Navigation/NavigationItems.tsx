"use client";

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Home,
  Bell,
  Files,
  Settings,
  User,
  LogOut,
  Users,
  ChartBar,
  ShoppingBag,
  ClipboardList,
  FileText,
  HelpCircle,
  Mail,
  Lock,
  UserPlus,
  Users2,
  CalendarCheck2,
  Server,
  Shield,
  Network,
  BadgeDollarSign,
  Receipt,
  Truck,
  Package,
  Wrench,
  Headset,
  Ticket,
  BookOpen,
  MessageCircle,
  Code2,
  GitBranch,
  Bug,
  Palette,
  Brush,
  LineChart,
  Database
} from "lucide-react";
import NavSection from "./component/NavSection";

export default function NavigationItems() {
  const pathname = usePathname();
  const {id} = useParams();
  console.log("id for",id)

  const navSections = [
    {
      label: "Items",
      icon: LayoutDashboard,
      items: [
        { href: `/dashboard/${id}`, icon: Home, label: "Dashboard" },
        { href: "/notifications", icon: Bell, label: "Notifications" },
      ],
    },
    {
      label: "Management",
      icon: Files,
      items: [
        { href: "/dashboard/post", icon: BookOpen, label: "All Post" },
        { href: "/dashboard/profile", icon: User, label: "Profile" },
      ],
    },
    {
      label: "Account",
      icon: Users,
      items: [
        { href: "/logout", icon: LogOut, label: "Logout" },
      ],
    },
    {
      label: "Support",
      icon: HelpCircle,
      items: [
        { href: "/faq", icon: HelpCircle, label: "FAQ" },
        { href: "/contact", icon: Mail, label: "Contact Us" },
      ],
    },
    {
      label: "Sales",
      icon: ShoppingBag,
      items: [
        { href: "/orders", icon: ClipboardList, label: "Order Management" },
        { href: "/customers", icon: Users, label: "Customer Management" },
        { href: "/invoices", icon: FileText, label: "Invoice Management" },
      ],
    },
    {
      label: "HR",
      icon: Users2,
      items: [
        { href: "/employees", icon: Users2, label: "Employee Management" },
        { href: "/benefits", icon: BadgeDollarSign, label: "Benefits Administration" },
        { href: "/timeoff", icon: CalendarCheck2, label: "Time Off Management" },
      ],
    },
    {
      label: "Development",
      icon: Code2,
      items: [
        { href: "/projects", icon: LayoutDashboard, label: "Project Management" },
        { href: "/code", icon: GitBranch, label: "Code Management" },
        { href: "/testing", icon: Bug, label: "Testing and QA" },
      ],
    },
    {
      label: "Design",
      icon: Palette,
      items: [
        { href: "/design", icon: Brush, label: "Design Management" },
        { href: "/branding", icon: Palette, label: "Branding and Identity" },
      ],
    },
    {
      label: "Analytics",
      icon: LineChart,
      items: [
        { href: "/reports", icon: FileText, label: "Report Management" },
        { href: "/dashboards", icon: LayoutDashboard, label: "Dashboard Management" },
        { href: "/data", icon: Database, label: "Data Management" },
      ],
    },
  ];

  const [activeSections, setActiveSections] = useState<string[]>([]);

  useEffect(() => {
    const initial = navSections.reduce((acc: string[], section, index) => {
      if (section.items.some((item) => pathname.startsWith(item.href))) {
        acc.push(`section-${index}`);
      }
      return acc;
    }, []);
    setActiveSections(initial);
  }, [pathname]);

  const toggleSection = (value: string) => {
    setActiveSections((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="h-screen fixed w-[20%] bg-white overflow-y-auto no-scrollbar pt-5 space-y-2 border-r ">
      {navSections.map((section, index) => (
        <NavSection
          key={index}
          section={section}
          index={index}
          isOpen={activeSections.includes(`section-${index}`)}
          toggleSection={toggleSection}
          pathname={pathname}
        />
      ))}
    </div>
  );
}
