'use client';


import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Heart, MessageCircle, Plus, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fetchPosts from '@/Services/PostCurdApi/PostCurdApi';
import Link from 'next/link';



export default function PostPage() {
  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6 text-red-500">Error: {(error as Error).message}</p>;
  if (!Array.isArray(posts)) return <p className="p-6 text-red-500">Invalid data format from API</p>;

  return (
    <div className="min-h-screen rounded-xl bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className='flex justify-between'>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">All Posts</h1>
          <Link href={'/auth/create'}>
            <Button><Plus className="mr-1" /> Create</Button>
          </Link>
        </div>

        <div className="space-y-6">
          {posts.map((post: any) => (
            <article
              key={post._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500">
                      {/* <span>{post.author?.name || 'Unknown Author'}</span> */}
                      {/* <span className="mx-2">•</span> */}
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{post.content}</p>

                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center text-gray-500 text-sm">
                  <button className="inline-flex items-center hover:text-red-500 transition-colors duration-200">
                    <Heart size={18} className="mr-1" />
                    {post.likes}
                  </button>
                  <button className="inline-flex items-center ml-4 hover:text-blue-500 transition-colors duration-200">
                    <MessageCircle size={18} className="mr-1" />
                    {post.comments?.length || 0}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}