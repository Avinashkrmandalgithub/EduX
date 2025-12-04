import React from "react";
import { Sparkles, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Courses", "Features", "Pricing", "Roadmap"],
    Company: ["About", "Careers", "Press", "Partners"],
    Resources: ["Blog", "Help Center", "Community", "Events"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Cookies"],
  };

  const socialIcons = {
    Twitter: <Twitter size={18} />,
    LinkedIn: <Linkedin size={18} />,
    YouTube: <Youtube size={18} />,
  };

  return (
    <footer className="relative w-full pt-16 pb-8 px-4 overflow-hidden border-t border-white/10">
      
      {/* Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[300px] 
                      bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] 
                      bg-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Top Grid — 2 COLS on mobile, centered */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 text-center sm:text-left">

          {/* Brand Section (centered on mobile) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-center sm:items-start justify-center">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl 
                              bg-linear-to-br from-blue-500 to-blue-700 
                              shadow-blue-500/30 shadow-lg">
                <Sparkles size={20} className="text-white" />
              </div>

              <span className="text-2xl font-extrabold bg-linear-to-r from-blue-400 to-white bg-clip-text text-transparent">
                EduX
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center sm:text-left">
              Empowering minds through immersive, future-ready education built
              for the next generation of innovators.
            </p>
          </div>

          {/* Footer Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div 
              key={category}
              className="flex flex-col gap-3 items-center sm:items-start"
            >
              <h4 className="text-white font-semibold tracking-wide text-[15px]">
                {category}
              </h4>

              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-all 
                                 duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EduX. All rights reserved.
          </p>

          <div className="flex items-center gap-6 justify-center">
            {Object.entries(socialIcons).map(([name, Icon]) => (
              <a
                key={name}
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white 
                           transition-all hover:scale-110"
              >
                {Icon}
                <span className="hidden sm:inline text-sm">{name}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
