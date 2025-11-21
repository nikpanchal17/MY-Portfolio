
"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative bg-[#0A0F1A] overflow-hidden text-white">
            <div className="pt-25 mx-auto max-w-[85%] md:grid grid-cols-2">
                    <div className="flex flex-col justify-center">

                            <h3 className="text-[#60A5FA] text-xl lg:text-2xl font-medium tracking-wide">
                                Hello,
                            </h3>

                            <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mt-2">
                                I'm <span className="text-[#3B82F6]">Nikhil Panchal</span>
                            </h1>

                            <h2 className="
                                            text-2xl lg:text-4xl 
                                            font-semibold 
                                            mt-3 
                                            bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] 
                                            bg-clip-text text-transparent
                                            "> Frontend Web Developer </h2>

                            <p className=" mt-6 text-xl leading-relaxed">
                                I build modern, responsive and high-performance websites with the latest technologies like
                                React, Next.js and Tailwind CSS.
                            </p>

                    </div>

                <div className="flex justify-center lg:justify-end">
                    {/* Left Logo */}
                    <Link href="/">
                        <Image
                            src="/logo.webp"     // <-- public folder ka image
                            alt="Logo"
                            width={600}
                            height={600}
                            className="object-contain "
                        />
                    </Link>
                </div>
            </div>

        </section>
    );
}
