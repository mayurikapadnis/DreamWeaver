"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#1a1b22]/90 via-[#2b2d3a]/90 to-[#1e1f26]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
          DreamWeaver
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li className="hover:text-fuchsia-400 transition">Home</li>
          <li className="hover:text-cyan-400 transition">Features</li>
          <li className="hover:text-purple-400 transition">About</li>
          <li className="hover:text-fuchsia-400 transition">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-300 font-medium">
            <li className="hover:text-fuchsia-400 transition">Home</li>
            <li className="hover:text-cyan-400 transition">Features</li>
            <li className="hover:text-purple-400 transition">About</li>
            <li className="hover:text-fuchsia-400 transition">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
