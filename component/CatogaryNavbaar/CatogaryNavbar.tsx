"use client";

import Link from "next/link";

// Import translation files
import en from "@/locals/en.json";
import fr from "@/locals/fr.json";
import hi from "@/locals/hi.json";

const translations: any = { en, fr, hi };

// Accept `locale` as a prop
export default function CategoryNavbar({ locale }: { locale: string }) {
  const t = translations[locale] || translations["en"]; // Fallback to English if locale is undefined

  return (
    <div className="md:bg-[#232f3e] bg-white md:text-white text-black p-1">
      <div className="container mx-auto py-1 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex md:flex-row flex-col overflow-x-auto no-scrollbar md:items-center space-x-4">
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.all}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.fresh}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.mxPlayer}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.sell}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.bestsellers}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.deals}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.mobiles}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.customerService}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.newReleases}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.electronics}</Link>
          </li>
          <li className="whitespace-nowrap px-2 py-1 text-sm hover:text-white/80">
            <Link href="#">{t.fashion}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
