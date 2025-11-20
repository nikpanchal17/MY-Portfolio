"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed z-[80] top-0 left-0 w-full bg-[#0A0F1A] text-white shadow-md shadow-[#efefef] h-22 border-b border-black md:border-none">
            <div className="mx-auto w-full max-w-[75%] px-4 text-xl">
                <div className="flex items-center justify-between h-22">

                    {/* Center Nav (Desktop) */}
                    <nav className="hidden md:flex space-x-15 ">
                        <Link href="#about" className="hover:text-[#3B82F6] ">About</Link>
                        <Link href="#projects" className="hover:text-[#3B82F6] ">Projects</Link>
                        <Link href="#contact" className="hover:text-[#3B82F6]">Contact Me</Link>
                    </nav>

                    {/* Right Buttons */}
                    <div className="hidden md:flex items-center">
                        <Link href="/" className="lg:px-10 px-3 py-2 lg;py-3.5 rounded-md border text-white hover:bg-[#3B82F6] hover:text-white">
                            Download CV
                        </Link>

                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-md text-white hover:bg-[#3B82F6] cursor-pointer"
                    >
                        {open ? (
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-40 md:hidden bg-[#0A0F1A]/99 text-xl mt-22 flex items-center justify-center ">
                    <div className="px-6 py-4 w-full max-w-sm space-y-4 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <Link href="#about" className="block py-2 hover:text-[#3B82F6]">About</Link>
                        <Link href="#projects" className="block py-2 hover:text-[#3B82F6]">Projects</Link>
                        <Link href="#contact" className="block py-2 hover:text-[#3B82F6]">Contact Me</Link>
                        <Link href="/login" className="block border p-5 mt-10 rounded-md text-center text-white hover:bg-[#3B82F6] hover:text-white">Download CV</Link>
                    </div>
                </div>
    )
}

        </header >
    );
}
