import React from "react";
import { UserCheck, Sliders, Tag, Users, Headphones } from "lucide-react";

export default function Why() {
  const features = [
    {
      icon: <UserCheck className="w-6 h-6 stroke-[1.5]" />,
      title: "Expert Travel Planners",
    },
    {
      icon: <Sliders className="w-6 h-6 stroke-[1.5]" />,
      title: "Customized Itineraries",
    },
    {
      icon: <Tag className="w-6 h-6 stroke-[1.5]" />,
      title: "Best Price Guarantee",
    },
    {
      icon: <Users className="w-6 h-6 stroke-[1.5]" />,
      title: "Trusted by Thousands",
    },
    {
      icon: <Headphones className="w-6 h-6 stroke-[1.5]" />,
      title: "24/7 Customer Support",
    },
  ];

  return (
    <section className="relative w-full bg-[#FBF9F5] py-16 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Side: Overlapping Polaroid Images & Stamp */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="relative max-w-[540px] w-full h-[380px] sm:h-[420px] flex items-center justify-center">
            {/* First Polaroid (Landscape - Couple looking at view, shifted left) */}
            <div className="absolute left-0 top-4 bg-white p-3 pb-10 shadow-xl rounded-sm transform -rotate-6 transition-transform hover:rotate-0 duration-300 z-10 w-[65%] sm:w-[320px]">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
                  alt="Couple looking at landscape view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second Polaroid (Portrait - Van by the beach/palms, stacked top-right) */}
            <div className="absolute right-2 sm:right-6 top-0 bg-white p-2.5 pb-8 shadow-2xl rounded-sm transform rotate-12 transition-transform hover:rotate-6 duration-300 z-20 w-[45%] sm:w-[200px]">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                  alt="Tropical beach and van"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Third Polaroid (Additional Photo - Mountains / Hiking adventure, stacked bottom-right) */}
            <div className="absolute right-12 sm:right-24 bottom-2 bg-white p-2.5 pb-8 shadow-2xl rounded-sm transform -rotate-3 transition-transform hover:rotate-0 duration-300 z-25 w-[42%]: sm:w-[190px]">
              <div className="aspect-[4/4] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
                  alt="Mountain adventure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Circular Stamp Accent */}
            <div className="absolute left-6 bottom-0 z-30 w-28 h-28 pointer-events-none opacity-90">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-spin-slow text-[#D97736]"
              >
                <path
                  id="textPath"
                  d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text
                  className="text-[10px] uppercase tracking-[2.5px] font-semibold"
                  fill="currentColor"
                >
                  <textPath href="#textPath" startOffset="0%">
                    • SINCE 2010 • ESTABLISHED •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-[#D97736] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#D97736]">W</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content & Features Grid */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* Section Heading */}
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2A29] font-normal tracking-tight">
              Why Travel With Us?
            </h2>
            <div className="w-12 h-[2px] bg-[#D97736] mt-3"></div>
          </div>

          {/* Description Paragraph */}
          <p className="text-[#6B6560] text-base leading-relaxed mb-10 max-w-xl">
            We’re passionate about creating journeys that inspire, connect and
            leave you with memories that last a lifetime.
          </p>

          {/* Features Horizontal Layout / Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-2 border-t border-[#EAE3D9]">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#2C2A29] mb-3 transition-colors duration-200">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2C2A29] leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
