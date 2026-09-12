// import React from 'react'

import { MapPin, Navigation } from "lucide-react";

const Map = () => {
  return (
    <div className="flex item-center justify-center px-4 h-140 gap-4 bg-[var(--bg-main)] py-10">
      <div className="right border border-[var(--border-light)] rounded-xl w-4/7 flex items-center justify-center uppercase ">
        Globe
      </div>
      <div className="w-3/7 p-8">
        <div className="flex h-full flex-col justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              Explore India
            </span>

            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight text-gray-900">
              Find your next
              <span className="block text-[var(--accent-primary)]">
                escape.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
              Discover beautiful destinations across India, from the mountains
              of Kashmir to the beaches of Goa and the peaceful landscapes of
              Kerala.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f5d9]">
                <MapPin size={18} className="text-[var(--accent-primary)]" />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  8 destinations
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Handpicked places across India
                </p>
              </div>
            </div>

            <button
              className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-black
          px-6
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:bg-[var(--accent-primary)]
        "
            >
              Explore destinations
              <Navigation size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
