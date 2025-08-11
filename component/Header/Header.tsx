"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, ShoppingCart, Menu, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import CatogaryNavbar from "../CatogaryNavbaar/CatogaryNavbar";
import MoibleSearchBox from "./MobileSearchInput";
import MobileHeader from "./MobileHeader";
import { useAuth } from "@/app/context/AuthContext";


export default function AmazonNavbar() {
  const [locale, setLocale] = useState("en"); // Default language is English
  const { user, logout } = useAuth(); // Get the user state from AuthContext
// console.log("user",user)
const username =  user?.firstName
console.log("username",username)
  useEffect(() => {
    const savedLocale = localStorage.getItem("language") || "en";
    setLocale(savedLocale);
  }, []);

  const changeLanguage = (lang: string) => {
    setLocale(lang);
    localStorage.setItem("language", lang);
  };

  const languages = [
    { label: "English", code: "en" },
    { label: "हिन्दी", code: "hi" },
    { label: "French", code: "fr" },
  ];

  return (
    <div className="flex flex-col w-full sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="bg-[#131921] text-white p-2">
        <div className="flex items-center justify-between gap-12 lg:px-6 px-[1px]">
          {/* Logo & Hamburger */}
          <div className="flex space-x-4">
            <Sheet>
              <SheetTrigger>
                <Menu className="md:hidden block" size={25} />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetDescription>
                    <CatogaryNavbar locale={locale} />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Link
              href="https://frontend-website-rip5.vercel.app/"
              target="_blank"
              className="font-bold relative -top-1 text-2xl md:text-3xl"
            >
              mars<span className="text-[#FF9900] text-lg">.in</span>
            </Link>
          </div>

          {/* Location */}
          <div className="hidden lg:flex items-center text-sm">
            <div className="flex flex-col">
              <span className="text-gray-300 text-xs">
                Delivering to New Delhi 110005
              </span>
              <button className="flex items-center text-white">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="font-bold">Update location</span>
              </button>
            </div>
          </div>

          {/* Search Bar & Category Dropdown */}
          <div className="hidden md:flex flex-1 mx-4">
            <div className="flex w-full ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="rounded-l-md rounded-r-none border-r border-gray-300 bg-gray-100 text-black hover:bg-gray-200"
                  >
                    All
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>All Categories</DropdownMenuItem>
                  <DropdownMenuItem>Deals</DropdownMenuItem>
                  <DropdownMenuItem>Amazon Devices</DropdownMenuItem>
                  <DropdownMenuItem>Books</DropdownMenuItem>
                  <DropdownMenuItem>Electronics</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Input
                type="text"
                placeholder="Search Amazon.in"
                className="rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#293749]"
              />
              <Button className="rounded-l-none rounded-r-md bg-[#febd69] hover:bg-[#f3a847] text-black">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="text-white">
                  <div className="flex items-center">
                    <span className="mr-1">🌍</span>
                    <span>
                      {languages.find((lang) => lang.code === locale)?.label}
                    </span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white shadow-md rounded-md p-2 w-40"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Account Dropdown */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="text-white max-w-28 gap-2 items-center text-sm flex flex-col text-left leading-tight">
                  {/* lg and up: show full */}
                  <div className="hidden lg:flex flex-col leading-tight">
                    {user ? (
                      <>
                        <span className="text-xs">Hello, {user.firstName}</span>
                        <span className="font-bold">Account & Lists</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xs">Hello, sign in</span>
                        <span className="font-bold">Account & Lists</span>
                      </>
                    )}
                  </div>

                  {/* sm/md view: only name or 'Sign in' */}
                  <div className="flex lg:hidden">
                    <div className="flex items-end">
                      <div className="font-medium text-xs">{user ? user.firstName : "Sign in"}</div>
                      <ChevronDown className="h-6 w-6 ml-1" />
                    </div>
                  </div>

                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {user ? (
                    <DropdownMenuItem onClick={logout}>
                      Log out
                    </DropdownMenuItem>
                  ) : (
                    <>
                      <DropdownMenuItem>
                        <Link href="/auth/login">Sign-in</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/auth/sign-up">Sign-up</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>

                <Link href={`${username}`} className="flex items-center cursor-pointer">
                  <DropdownMenuItem>profile</DropdownMenuItem>
                </Link>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>



          {/* Cart */}
          <Link href="/cart" className="flex items-center">
            <ShoppingCart className="h-6 w-6" />
            <span className="hidden md:inline ml-1 font-bold">Cart</span>
          </Link>
        </div>

        {/* Mobile Header & Search Bar */}
        <MoibleSearchBox />
        <MobileHeader />
      </div>

      {/* Category Bar (Visible on Desktop only) */}
      <div className="md:block hidden">
        <CatogaryNavbar locale={locale} />
      </div>
    </div>
  );
}
