"use client";
import React, { useState } from "react";
import Link from "next/link";

import {
  Home,
  Briefcase,
  Coins,
  BookOpen,
  Monitor,
  PenTool,
  MessageSquare,
  Globe,
  Menu,
  X,
} from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md">
      {/* Top Section with Logo and Buttons */}
      <header className="flex justify-between items-center p-4 md:px-10">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2 md:ml-60">
          <img 
            src="/images/asianlogo.png" 
            alt="Company Logo" 
            className="h-12 md:h-25" 
          />
          <div className="block">
            <h1 className="text-sm md:text-lg font-bold text-black">
              Asia Business Hub Inc.
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              One-stop professional solutions
            </p>
          </div>
        </div>

              {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 md:mr-60">
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
          >
            Contact
          </a>
          <a 
            href="/access" 
            className="border border-black px-4 py-2 text-black rounded cursor-pointer hover:bg-gray-200 transition"
          >
            Access
          </a>
        </div>

        {/* Burger Menu Button (Mobile) */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-100 absolute top-16 left-0 w-full shadow-md z-50 p-4`}
      >
       {/* Mobile Contact & Access Buttons (Now Inline) */}
<div className="flex justify-center space-x-2">
  <a 
    href="/contact" 
    className="bg-blue-600 text-white px-4 py-2 rounded w-1/2 text-center cursor-pointer hover:bg-blue-700 transition"
  >
    Contact
  </a>
  <a 
    href="/access" 
    className="border border-black px-4 py-2 text-black rounded w-1/2 text-center cursor-pointer hover:bg-gray-200 transition"
  >
    Access
  </a>
</div>


        {/* Navigation Icons (Mobile) */}
        <nav className="grid grid-cols-2 gap-4 text-black mt-4">
          {[
            { icon: Home, label: "Home", link: "/." },
            { icon: Briefcase, label: "Services", link: "/services" },
            { icon: Coins, label: "rewards", link: "/src/app/(landingpage)/rewards/page.js" },
            { icon: BookOpen, label: "Seminars", link: "/seminars" },
            { icon: Monitor, label: "Sites", link: "/sites" },
            { icon: PenTool, label: "Blog", link: "/blog" },
            { icon: MessageSquare, label: "Greeting", link: "/Greeting" },
            { icon: Globe, label: "About", link: "/About" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center hover:text-blue-600"
            >
              <item.icon size={24} className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center gap-10 text-black space-x-10 p-4 border-t">
        {[
          { icon: Home, label: "Home", link: "/" },
          { icon: Briefcase, label: "Services", link: "services" },
          { icon: Coins, label: "Rewards", link: "/rewards" },
          { icon: BookOpen, label: "Seminars", link: "/seminars" },
          { icon: Monitor, label: "Sites", link: "/sites" },
          { icon: PenTool, label: "Blog", link: "/blog" },
          { icon: MessageSquare, label: "Greeting", link: "/Greeting" },
          { icon: Globe, label: "About", link: "/About" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-col items-center hover:text-blue-600"
          >
            <item.icon size={24} className="w-8 h-8" />
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
