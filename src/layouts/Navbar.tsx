import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-6 left-0 right-0 z-50 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="text-white text-xl font-bold tracking-wider cursor-pointer">
          KASHMIR<span className="text-emerald-400">.</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/15 text-sm text-white/90 shadow-sm">
          <a
            href="#home"
            className="hover:text-white transition font-medium text-white"
          >
            Home
          </a>
          <a href="#about" className="hover:text-white/70 transition">
            About us
          </a>
          <a href="#services" className="hover:text-white/70 transition">
            Our services
          </a>
          <a href="#packages" className="hover:text-white/70 transition">
            Travel Packages
          </a>
          <a href="#destinations" className="hover:text-white/70 transition">
            Destinations
          </a>
        </div>

        {/* Right Side Action / Placeholder or CTA */}
        <div className="hidden md:block">
          <button className="bg-white/20 hover:bg-white/30 text-white font-medium px-5 py-2 rounded-full border border-white/20 transition backdrop-blur-md text-sm">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-6 right-6 bg-gray-900/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-white flex flex-col gap-4 shadow-2xl z-50">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition text-gray-300"
          >
            About us
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition text-gray-300"
          >
            Our services
          </a>
          <a
            href="#packages"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition text-gray-300"
          >
            Travel Packages
          </a>
          <a
            href="#destinations"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition text-gray-300"
          >
            Destinations
          </a>
          <button className="bg-white text-gray-950 font-semibold py-2.5 rounded-xl mt-2 text-center">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
