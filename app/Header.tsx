"use client";

import { useState } from 'react';
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from '@heroicons/react/16/solid';
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header>
        <div className="grid grid-cols-3 p-10 items-center ">
            <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={toggleSidebar} />
            <Link href="/" prefetch={false}>
                <h1 className="font-serif text-4xl text-center">The QUIK News</h1>
            </Link>

            <div className="flex items-center justify-end space-x-2">
                {/* Dark mode */}
                <DarkModeButton />
                
                <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                    Subscribe Now
                </button>
            </div>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div>
            {/* Overlay to close sidebar when clicked outside */}
            <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50" onClick={closeSidebar}></div>
            
            <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
              {/* Close button */}
              <XMarkIcon className="h-6 w-6 cursor-pointer absolute top-2 right-2" onClick={closeSidebar} />
              
              {/* Sidebar content goes here */}
              <p>Sidebar Content</p>
            </div>
          </div>
        )}

        <NavLinks />

        <SearchBox />
    </header>
  );
}

export default Header;
