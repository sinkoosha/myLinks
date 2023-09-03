"use client";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

function MobilNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      <div className="absolute h-10">
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 bg-black ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Home</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Blog</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">About US</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Contact US</a>
            </li>
          </ul>

          <div className="mt-3 space-y-2 lg:hidden md:inline-block">
            <a
              href="javascript:void(0)"
              className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Sign in
            </a>
            <a
              href="javascript:void(0)"
              className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilNav;
