import { Layers, Map, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/", icon: Home },
    { label: "Services", path: "/services", icon: Layers },
    { label: "Destinations", path: "/travel-packages", icon: Map },
    { label: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="z-50 w-full bg-[var(--bg-main)]  mx-auto sm:px-6 lg:px-4 md:pt-4 pt-3 px-3">
        <nav
          className="
            flex items-center justify-between
            px-4 py-4 rounded-sm
            bg-[var(--bg-secondary)]
            border border-[var(--border-light)]
          "
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col gap-1">
              <span
                className="
                  w-4 h-1 rounded-full
                  bg-[var(--text-main)]
                  transition-all
                  group-hover:w-5
                "
              />

              <span
                className="
                  w-6 h-1 rounded-full
                  bg-[var(--text-main)]
                "
              />

              <span
                className="
                  w-3 h-1 rounded-full
                  bg-[var(--text-main)]
                  transition-all
                  group-hover:w-5
                "
              />
            </div>

            <div className="leading-tight">
              <span
                className="
                  block font-medium
                  text-[var(--text-main)]
                  text-lg tracking-tight
                "
              >
                Trip Planner
              </span>

              <span
                className="
                  block text-[10px]
                  text-[var(--text-muted)]
                  font-semibold uppercase tracking-wider
                "
              >
                Plan your trip with us
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              hidden md:flex items-center gap-8
              text-sm font-medium
              text-[var(--text-secondary)]
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="
                  transition-colors
                  hover:text-[var(--accent-primary)]
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <nav
          className="
            flex items-center justify-around
            bg-[var(--bg-secondary)]
            border-t border-[var(--border-light)]
            px-1 py-2
            shadow-lg
          "
        >
          {navLinks.map((link) => {
            const IconComponent = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                className="
                  flex flex-1 flex-col
                  items-center justify-center
                  gap-1 py-1
                  text-[var(--text-muted)]
                  hover:text-[var(--accent-primary)]
                  transition-colors
                "
              >
                <IconComponent className="w-5 h-5" />

                <span
                  className="
                    text-[9px] font-medium
                    uppercase tracking-wider
                    text-center truncate
                    w-full px-0.5
                  "
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
