
"use client";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#050814]/80 backdrop-blur-md border-b border-white/5 h-24">
        <nav className="w-full md:w-3/4 mx-auto px-4 py-3 flex items-center justify-between h-full">
          
          {/* LEFT: Links (Desktop / Laptop) */}
          <div className="hidden md:flex items-center gap-8 text-sm md:text-xl text-white">
            <a href="#about" className="hover:text-[#3B82F6] transition">
              About
            </a>
            <a href="#projects" className="hover:text-[#3B82F6] transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#3B82F6] transition">
              Contact Me
            </a>
          </div>

         

          {/* RIGHT: Download CV (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#" // yahan apni CV ka actual path de dena
              download
              className="px-5 py-2 rounded-full bg-[#3B82F6] text-white text-xl font-medium
                         hover:bg-[#2563EB] transition-all shadow-md shadow-[#3B82F6]/40"
            >
              Download CV
            </a>
          </div>

          {/* MOBILE / TABLET: Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-md absolute top-8 right-10 text-gray-200 hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* MOBILE / TABLET FULL SCREEN MENU */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-[#050814]/95 backdrop-blur-md
                    flex items-center justify-center transition-all duration-500
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-8 right-10 text-gray-300 hover:text-white transition"
          aria-label="Close menu"
        >
          <svg
            className="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* MENU ITEMS */}
        <div className="flex flex-col items-center gap-6 text-xl text-gray-200">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-[#3B82F6] transition"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="hover:text-[#3B82F6] transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-[#3B82F6] transition"
          >
            Contact Me
          </a>

          <a
            href="/Nikhil-Panchal-CV.pdf" // yahan bhi apni CV ka path
            download
            onClick={() => setOpen(false)}
            className="mt-4 px-6 py-2 rounded-full border border-[#3B82F6]
                       text-[#60A5FA] text-base font-medium
                       hover:bg-[#1E293B] hover:border-[#60A5FA] transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
