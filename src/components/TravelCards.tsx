import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane } from "lucide-react";
import FlightTickets from "./FlightTickets";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TravelCards = () => {
  const containerRef = useRef(null);
  const circlesRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    const ctx = gsap.context(() => {
      // Parallax and rotation effect for background concentric circles (only animation kept)
      gsap.to(circlesRef.current, {
        rotation: 45,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <div className="">
      <div
        ref={containerRef}
        className="text-white bg-black w-full mx-auto border border-neutral-800 font-sans overflow-hidden relative shadow-[0_25px_60px_-15px_rgba(255,255,255,0.08)]"
      >
        {/* Background Concentric Circles */}
        <div
          ref={circlesRef}
          className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 origin-center"
        >
          <svg
            className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px]"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="300"
              cy="500"
              r="200"
              stroke="white"
              strokeWidth="1.5"
            />
            <circle
              cx="300"
              cy="500"
              r="350"
              stroke="white"
              strokeWidth="1.5"
            />
            <circle
              cx="300"
              cy="500"
              r="550"
              stroke="white"
              strokeWidth="1.5"
            />
            <circle
              cx="300"
              cy="500"
              r="800"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-6 md:px-16 py-16 lg:py-24">
          {/* Top Section: Text (Left) and Form (Right) */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Side: Heading & Bottom Info */}
            <div className="w-full xl:w-5/12 flex flex-col justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    <Plane size={16} strokeWidth={1.7} className="text-white" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Book your journey
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[0.95] text-white">
                  Your next
                  <br />
                  <span className="text-neutral-500">adventure awaits.</span>
                </h1>

                <p className="mt-6 text-neutral-400 text-sm md:text-base leading-relaxed">
                  Book your flight tickets and discover beautiful destinations
                  around the world. Choose where you want to go and let the
                  journey begin.
                </p>
              </div>

              {/* Bottom Info Stats */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <div className="flex-1 p-5 rounded-2xl bg-[#121212]/50 border border-neutral-900 shadow-lg">
                  <p className="text-xl font-medium text-white">500+</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Destinations worldwide
                  </p>
                </div>

                <div className="flex-1 p-5 rounded-2xl bg-[#121212]/50 border border-neutral-900 shadow-lg">
                  <p className="text-xl font-medium text-white">Best prices</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Compare flights
                  </p>
                </div>

                <div className="flex-1 p-5 rounded-2xl bg-[#121212]/50 border border-neutral-900 shadow-lg">
                  <p className="text-xl font-medium text-white">24/7</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Travel support
                  </p>
                </div>
              </div>
            </div>

            <div>
              <FlightTickets />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCards;
