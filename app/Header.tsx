"use client";

import { useState } from 'react';
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from '@heroicons/react/16/solid';
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
import clsx from 'clsx';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false); // Added state for login popup

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    closeLoginPopup(); // Close login popup when opening the sidebar
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
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

          <button
            className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800"
            onClick={openLoginPopup} // Open login popup on button click
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Login Popup */}
      {isLoginPopupOpen && (
        <div>
          <div
            className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50"
            onClick={closeLoginPopup}
          ></div>

          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 dark:bg-slate-800 rounded-md shadow-lg">
            <XMarkIcon
              className="h-6 w-6 cursor-pointer absolute top-2 right-2"
              onClick={closeLoginPopup}
            />

            {/* Popup content goes here */}
            <p className={clsx(
              "text-primary border-primary font-semibold p-2 lg:p-3 mt-2 lg:mt-4",
              " rounded-md border-2 hover:text-tertiary hover:border-tertiary dark:bg-slate-800"
            )}>Login to Subscribe</p>
          </div>
        </div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div>
          {/* Overlay to close sidebar when clicked outside */}
          <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50" onClick={closeSidebar}></div>

          <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
            {/* Close button */}
            <XMarkIcon className="h-6 w-6 cursor-pointer absolute top-2 right-2" onClick={closeSidebar} />

            {/* Sidebar content goes here */}
            <p>Quik Bar</p>

            <button className={clsx(
              "text-primary border-primary font-semibold p-2 lg:p-3 mt-2 lg:mt-4",
              " rounded-md border-2 hover:text-tertiary hover:border-tertiary"
            )}>
              Login
            </button>
          </div>
        </div>
      )}

      <NavLinks />

      <SearchBox />

    </header>
  );
}

export default Header;
