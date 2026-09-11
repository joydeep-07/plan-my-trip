import React from "react";
import { Home, Info, Layers, Package, Map, Phone } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    // { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: Info },
    { label: "Services", href: "#services", icon: Layers },
    // { label: "Packages", href: "#packages", icon: Package },
    { label: "Destinations", href: "#destinations", icon: Map },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="z-50 w-full mx-auto px-4 sm:px-6 lg:px-4 pt-4">
        <nav className="flex items-center justify-between px-4 py-4 rounded-sm bg-white">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col gap-1">
              <span className="w-4 h-1 bg-slate-900 rounded-full transition-all group-hover:w-5" />
              <span className="w-6 h-1 bg-slate-900 rounded-full" />
              <span className="w-3 h-1 bg-slate-900 rounded-full transition-all group-hover:w-5" />
            </div>

            <div className="leading-tight">
              <span className="block font-medium text-slate-900 text-lg tracking-tight">
                Trip Planner
              </span>
              <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                Plan your trip with us
              </span>
            </div>
          </a>

          {/* Right Side (Desktop Links Only) */}
          <div className="flex items-center gap-8">
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
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation with Icons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <nav
          className="
            flex items-center justify-around
            bg-white
            border-t border-gray-200
            px-1 py-2
            shadow-lg
          "
        >
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="
                  flex flex-1 flex-col
                  items-center justify-center
                  gap-1 py-1
                  text-gray-500
                  hover:text-gray-950
                  active:text-gray-950
                  transition-colors
                "
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-[9px] font-medium uppercase tracking-wider text-center truncate w-full px-0.5">
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
