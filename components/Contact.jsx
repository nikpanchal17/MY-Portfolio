const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-20 bg-[#0A0F1A]">
      <div className="max-w-[80%] mx-auto grid md:grid-cols-2 gap-10">
        
        {/* LEFT — Contact Info */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Contact <span className="text-[#3B82F6]">Me</span>
          </h2>
          <p className="text-gray-200 mt-3 text-xl leading-relaxed">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>

          <div className="mt-8 space-y-5 text-gray-200 text-xl">
            <p className="flex items-center gap-3">
              📧 <span className="text-[#60A5FA] font-medium">Email:</span> nik20011711@gmail.com
            </p>
            <p className="flex items-center gap-3">
              📞 <span className="text-[#60A5FA] font-medium">Phone:</span> +91 8764131551
            </p>
            <p className="flex items-center gap-3">
              📍 <span className="text-[#60A5FA] font-medium">Location:</span> Banswara, Rajasthan, India
            </p>
          </div>

          {/* Socials */}
          
        </div>

        {/* RIGHT — Contact Form */}
        <form className="bg-[#111827] p-8 rounded-2xl border border-white/10 shadow-lg shadow-black/40 text-xl">
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 rounded-lg bg-[#0A0F1A] text-gray-200 border border-white/10 focus:border-[#3B82F6] outline-none transition"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-3 rounded-lg bg-[#0A0F1A] text-gray-200 border border-white/10 focus:border-[#3B82F6] outline-none transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-[#0A0F1A] text-gray-200 border border-white/10 focus:border-[#3B82F6] outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-[#2563EB] transition-all shadow-md shadow-[#3B82F6]/40"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
