"use client";

import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 bg-[#0A0F1A]">
      <div className="max-w-[85%] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          My <span className="text-[#3B82F6]">Projects</span>
        </h2>
        <p className="text-gray-200 mt-2 text-xl">
          Some of the work I&apos;ve done in frontend and automation.
        </p>

        {/* Cards Grid */}
        <div className="mt-8 grid gap-6 ">

          {/* CARD 1 – Portfolio Website */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 shadow-lg shadow-black/40 hover:shadow-[#3B82F6]/40 hover:-translate-y-1 transition-all duration-300">
            {/* Image */}
            <div className="relative w-full h-72 flex justify-center overflow-hidden mb-4">
              <Image
                src="/portfolio.png"   // apni image yahan rakho (public/projects/portfolio.png)
                alt="Portfolio Website"
                width={400}
                height={400}
                className="object-cover rounded-xl shadow-xl shadow-[#3B82F6]/40  "
              />
            </div>

            {/* Text */}
            <span className="inline-block px-5 py-2 text-lg rounded-full bg-[#0A0F1A] text-[#60A5FA] border border-white/10 mb-3">
              Featured
            </span>

            <h3 className="text-xl md:text-3xl font-semibold text-white">
              Personal Portfolio Website
            </h3>

            <p className="text-gray-400 mt-3 text-xl">
              A modern portfolio website built with Next.js and Tailwind CSS to
              showcase my skills, projects and experience with a dark theme UI.
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-4 text-lg">
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">React</span>
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">Tailwind CSS</span>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex gap-3 flex-wrap">
              <a
                href="https://nikhilpanchal17.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-[#3B82F6] text-white text-sm font-medium hover:bg-[#2563EB] transition-all"
              >
                Live Demo
              </a>
             
            </div>
          </div>

          {/* CARD 2 – Task Manager */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 shadow-lg shadow-black/40 hover:shadow-[#3B82F6]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="relative flex w-full h-72 overflow-hidden justify-center mb-4">
              <Image
                src="/taskmanagement.png"
                alt="Task Manager App"
                width={400}
                height={400}
                className="object-cover rounded-xl shadow-xl shadow-[#3B82F6]/40 "
              />
            </div>

            <span className="inline-block px-5 py-2 text-lg rounded-full bg-[#0A0F1A] text-[#60A5FA] border border-white/10 mb-3">
              Practice React App
            </span>

            <h3 className="text-xl md:text-3xl font-semibold text-white">
              Task Manager Application
            </h3>

            <p className="text-gray-400 mt-3 text-xl ">
              A task management app with add, filter and status features using React
              and Redux Toolkit to practice state management and UI design.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-lg">
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">React</span>
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">Redux Toolkit</span>
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">CSS</span>
            </div>

            <div className="mt-5 flex gap-3 flex-wrap">
              <a
                href="https://task-management-cyan-theta.vercel.app/"
                target="_blank"
                 rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-[#3B82F6] text-white text-sm font-medium hover:bg-[#2563EB] transition-all"
              >
                Live Demo
              </a>
             
            </div>
          </div>

          {/* CARD 3 –  Project */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 shadow-lg shadow-black/40 hover:shadow-[#3B82F6]/40 hover:-translate-y-1 transition-all duration-300 ">
            <div className="relative flex justify-center w-full h-72 rounded-xl overflow-hidden mb-4">
              <Image
                src="/ziba1.png"
                alt="Automation Testing Framework"
                width={400}
                height={400}
                className="object-cover rounded-xl shadow-xl shadow-[#3B82F6]/40 "
              />
            </div>

            <span className="inline-block px-5 py-2 text-xl rounded-full bg-[#0A0F1A] text-[#60A5FA] border border-white/10 mb-3">
              Major Project
            </span>

            <h3 className="text-xl md:text-3xl font-semibold text-white">
              Ziba Pay
            </h3>

            <p className="text-gray-400 mt-3 text-xl ">
              A Selenium and Java based automation framework with reusable page 
              objects, test data handling and reporting for web application testing.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-lg">
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">Selenium</span>
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">Java</span>
              <span className="px-3 py-1 rounded-full bg-[#0A0F1A] text-gray-200 border border-white/10">TestNG</span>
            </div>

            <div className="mt-5 flex gap-3 flex-wrap">
              <a
                href="https://zibapay.com/"
                target="_blank"
                 rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-[#3B82F6] text-white text-sm font-medium hover:bg-[#2563EB] transition-all"
              >
                Live Demo
              </a>
            
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

