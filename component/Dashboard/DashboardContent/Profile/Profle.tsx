'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import fetchProfile from '@/Services/PostCurdApi/Profile';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';
import { RainbowButton } from '@/components/magicui/rainbow-button';

export default function ProfileCard() {
  const { data: profile, isLoading, isError, error } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });

  if (isLoading) return <p className="p-6 text-gray-600">Loading profile...</p>;
  if (isError) return <p className="p-6 text-red-500">Error: {(error as Error).message}</p>;

  return (
    <div className='flex justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3"
      >
        {/* Left Panel - Avatar & Basic Info */}
        <div className="bg-blue-50 dark:bg-blue-950 p-6 flex flex-col items-center justify-center border-r dark:border-gray-700">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-full border-4 border-blue-200 dark:border-blue-700 shadow-md"
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{profile.name}</h2>
          <p className="text-sm text-blue-600 dark:text-blue-300">{profile.role}</p>
        </div>

        {/* Right Panel - Details */}
        <div className="col-span-2 p-6 space-y-6">
          {/* Bio */}
          <section>
            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">About</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{profile.bio}</p>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Social Links */}
          <section>
          <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Social Profiles</h3>
            <div className='flex justify-between items-center '>
            <div className="flex space-x-4 text-blue-600 dark:text-blue-300 text-sm">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:underline">Twitter</a>
            </div>
            <RainbowButton> Dashboard</RainbowButton>
              {/* <RainbowButton> <LayoutDashboard/> Dashboard</RainbowButton> */}
            </div>
           
          </section>
        </div>
      </motion.div>
    </div>

  );
}
