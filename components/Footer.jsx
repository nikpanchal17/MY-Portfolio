const Footer = () => {
  return (
    <footer className="w-full bg-[#050814] border-t border-white/5 text-lg ">
      <div className="max-w-[85%] mx-auto px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Text */}
        <p className="text-gray-500 ">
          © {new Date().getFullYear()} <span className="text-gray-200 font-medium">Nikhil Panchal</span>. All rights reserved.
        </p>

        {/* Center – Small Tagline */}
        <p className="text-gray-500 text-center">
          Designed & built with <span className="text-[#3B82F6]">Next.js</span> & <span className="text-[#60A5FA]">Tailwind CSS</span>.
        </p>

        {/* Right – Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/nikhil-panchal-114133222/" target="_blank"  rel="noopener noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition">
            LinkedIn
          </a>
          <a href="https://github.com/nikpanchal17"  target="_blank"  rel="noopener noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition">
            GitHub
          </a>
          <a href="https://www.instagram.com/nikpanchal17/"  target="_blank"  rel="noopener noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition">
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
