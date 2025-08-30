"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dash_Avatar from "./Dash_Avatar";
import { Menu, X } from "lucide-react"; // icons for hamburger

const Dash_Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center h-[10vh] px-5">
        {/* Left */}
        <div className="flex items-center space-x-3">
          <Image
            src="/graph.png"
            alt="logo"
            height={30}
            width={30}
            className="object-contain bg-white"
          />
          <a href="/" className="text-white-500 hover:text-blue-500 text-2xl font-bold transition duration-300 ease-in-out hover:scale-105">
            Expense Tracker
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="/dashboard" className="text-white-500 hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105">
            Dashboard
          </a>
          <a href="/charts" className="text-white-500 hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105">
            Charts
          </a>
          <Dash_Avatar />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start bg-gray-300 px-5 py-3 space-y-4">
          <a
            href="/dashboard"
            className="w-full py-2 border-b border-gray-600 text-[#000000]"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </a>
          <a
            href="/charts"
            className="w-full py-2 border-b border-gray-600 text-[#000000]"
            onClick={() => setIsOpen(false)}
          >
            Charts
          </a>
          <div className="py-2">
            <Dash_Avatar />
          </div>
        </div>
      )}

      <hr />
    </div>
  );
};

export default Dash_Nav;
