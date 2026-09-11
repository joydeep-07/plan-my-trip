
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Our services", href: "#services" },
    { label: "Travel Packages", href: "#packages" },
    { label: "Destinations", href: "#destinations" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="z-50 w-full mx-auto px-4 sm:px-6 lg:px-4 pt-4">
        <nav className="flex items-center justify-between px-4 py-4 rounded-sm bg-white">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="leading-tight">
              <span className="block font-medium text-gray-900 text-4xl tracking-tight font-accent">
                Planner
              </span>
            </div>
          </a>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <nav
          className="
            flex items-center justify-around
            bg-white
            border-t border-gray-200
            px-2 py-2
            shadow-lg
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                flex flex-1 flex-col
                items-center justify-center
                gap-1 py-2
                text-gray-500
                hover:text-gray-950
                active:text-gray-950
                transition-colors
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 transition-opacity" />

              <span className="text-[9px] font-medium uppercase tracking-wider text-center">
                {link.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

