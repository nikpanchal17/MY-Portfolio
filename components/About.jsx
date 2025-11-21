"use client";


export default function About() {
    return (
        <section id="about" className="w-full  py-16 bg-[#0A0F1A]">
            <div className="max-w-[85%] mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    About <span className="text-[#3B82F6]">Me</span>
                </h2>
                <p className="text-gray-300 md:text-xl mt-2">
                    A short introduction about who I am and what I do.
                </p>

                {/* Content Card */}
                <div className="mt-8 grid md:grid-cols-2 gap-8 bg-[#111827] rounded-2xl text-xl p-6 md:p-15 border border-white/5 shadow-lg shadow-black/40">

                    {/* LEFT – Main Text */}
                    <div>
                        <p className="text-gray-300  leading-relaxed">
                            I'm <span className="text-white font-semibold">Nikhil Panchal</span>,
                            a passionate <span className="text-[#60A5FA]">Frontend Web Developer</span> and
                            QA enthusiast who loves building clean, modern and responsive user interfaces.
                            I enjoy creating web experiences that are not only visually appealing
                            but also well-tested and performance optimized.
                        </p>

                        <p className="text-gray-400 leading-relaxed mt-4">
                            I work with technologies like <span className="text-gray-200">React, Next.js,
                                Tailwind CSS</span> on the frontend and  I'm always learning and exploring
                            better ways to write clean and maintainable code.
                        </p>

                        {/* Small Stats */}
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:text-base">
                            <div className="bg-[#0A0F1A] rounded-xl p-4 border border-white/5">
                                <p className="text-[#60A5FA] font-semibold text-xl">1+ </p>
                                <p className="text-gray-400">Years of Learning & Practice</p>
                            </div>
                            <div className="bg-[#0A0F1A] rounded-xl p-4 border border-white/5">
                                <p className="text-[#60A5FA] font-semibold text-xl">10+ </p>
                                <p className="text-gray-400 text-lg">Projects & Mini-Projects</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – Info + Skills */}
                    <div className="space-y-6">
                        {/* Basic Info */}
                        <div className="bg-[#0A0F1A] rounded-xl p-4 border border-white/5">
                            <h3 className="text-white font-semibold mb-3 text-2xl">Personal Info</h3>
                            <div className="grid grid-cols-1 gap-2 text-gray-300 text-xl">
                                <p><span className="text-gray-400">Name:</span> Nikhil Panchal</p>
                                <p><span className="text-gray-400">Role:</span> Frontend Web Developer</p>
                                <p><span className="text-gray-400">Specialization:</span> React, Next.js, Tailwind CSS, QA</p>
                                <p><span className="text-gray-400">Qualifications:</span> BCA, MCA</p>
                            </div>
                        </div>

                        {/* Skills Chips */}
                        <div className="bg-[#0A0F1A] rounded-xl p-4 border border-white/5">
                            <h3 className="text-white font-semibold mb-3 text-2xl">Skills</h3>
                            <div className="flex flex-wrap gap-2 ">
                                {[
                                    "React",
                                    "Next.js",
                                    "JavaScript",
                                    "Tailwind CSS",
                                    "HTML",
                                    "CSS",
                                    "Selenium",
                                    "Java",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full md:text-xl bg-[#111827] text-gray-200 border border-white/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}