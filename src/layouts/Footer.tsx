
import img from "../assets/images/beach.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 py-6">
      {/* CTA Banner */}
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-md">
        <img
          src={img}
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt="Travel background"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-white/70 text-xs uppercase tracking-[0.3em] mb-5">
            Your next journey starts here
          </p>

          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-snug mb-8">
            Don't wait any longer! Start your adventure and explore new
            experiences today
          </h2>

          {/* Subscription Form */}
          <div className="flex items-center bg-white/15 backdrop-blur-md border border-white/40 rounded-full p-1.5 w-full max-w-md shadow-lg">
            <input
              type="email"
              placeholder="Drop your email address here..."
              className="bg-transparent px-4 py-2 text-white placeholder-white/70 focus:outline-none w-full text-sm md:text-base"
            />

            <button className="bg-white text-neutral-900 font-medium px-6 py-2.5 rounded-full hover:bg-neutral-100 transition-all text-sm md:text-base whitespace-nowrap shadow">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Premium Footer */}
      <div className="mt-6 rounded-3xl bg-[#f5f5f2] px-6 md:px-10 lg:px-14 pt-12 pb-7">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Trip Planner<span className="text-neutral-400">.</span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-500">
              Plan meaningful journeys, discover beautiful places, and turn
              your travel ideas into experiences worth remembering.
            </p>

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Plan less. Explore more.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-sm text-neutral-600">
              <a
                href="#destinations"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Destinations
              </a>

              <a
                href="#flights"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Flights
              </a>

              <a
                href="#hotels"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Hotels
              </a>
            </div>
          </div>

          {/* Plan */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
              Plan
            </p>

            <div className="flex flex-col gap-3 text-sm text-neutral-600">
              <a
                href="#planner"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Trip Planner
              </a>

              <a
                href="#map"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Explore Map
              </a>

              <a
                href="#inspiration"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Travel Inspiration
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
              More
            </p>

            <div className="flex flex-col gap-3 text-sm text-neutral-600">
              <a
                href="#about"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                About
              </a>

              <a
                href="#contact"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Contact
              </a>

              <a
                href="#privacy"
                className="w-fit hover:text-black hover:translate-x-1 transition-all"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 mt-12 mb-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © 2026 Joydeep. All rights reserved.
          </p>

          <p className="text-xs text-neutral-400 text-center">
            Made for curious minds and unforgettable journeys.
          </p>

          <div className="flex items-center gap-5 text-xs text-neutral-500">
            <a
              href="#terms"
              className="hover:text-black transition-colors"
            >
              Terms
            </a>

            <a
              href="#privacy"
              className="hover:text-black transition-colors"
            >
              Privacy
            </a>

            <a
              href="#contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="mt-10 overflow-hidden">
          <h2 className="text-[14vw] md:text-[11vw] lg:text-[9vw] leading-[0.75] font-semibold tracking-[-0.07em] text-neutral-200 text-center select-none">
           MAKE MY TRIP
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
