"use client";

import React from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div>
      {/* Background black */}
      <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-30"></div>

      {/* Blur */}
      <div className="fixed top-0 left-0 z-10 w-screen h-screen fade-in backdrop-filter backdrop-blur-sm"></div>

      {/* Sidemenu */}
      <nav
        // todo: slide effect
        className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300"
      >
        <IoCloseOutline
          size={50}
          className="absolute cursor-pointer top-5 right-5"
          onClick={() => console.log("close")}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />

          <input
            type={"text"}
            placeholder="Search"
            className="w-full py-1 pl-10 pr-10 text-xl border-b-2 border-gray-200 rounded bg-gray-50 focus:outline-none focus:border-blue-500"
          />
        </div>
      </nav>
    </div>
  );
};
