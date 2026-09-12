// import React from 'react'
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Search,
  Users,
} from "lucide-react";
const FlightTickets = () => {
  return (
    <div>
      {/* Right Side: Flight Booking Card */}
      <div className="w-2xl relative">
        <div className="bg-[#121212] rounded-xl p-6 md:p-8 border border-neutral-800/50 backdrop-blur-xl">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-2 pb-6">
            <div>
              <p className="text-lg font-medium text-white">Book a flight</p>
              <p className="text-xs text-neutral-400 mt-1">
                Find the best flights for your journey
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#9CCB63] shadow-[0_0_8px_#9CCB63]" />
              Flexible booking
            </div>
          </div>

          {/* Inputs Layout using Flexbox */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              {/* FROM */}
              <div className="w-full flex-1 bg-[#18181b] rounded-2xl px-5 py-4 border border-neutral-800 hover:border-neutral-700 transition ">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2 font-medium">
                  From
                </label>

                <div className="flex items-center gap-3">
                  <MapPin
                    size={17}
                    strokeWidth={1.6}
                    className="text-neutral-400"
                  />

                  <input
                    type="text"
                    placeholder="Delhi"
                    className="w-full outline-none bg-transparent text-sm font-medium text-white placeholder:text-neutral-600"
                  />
                </div>
              </div>

              {/* SWAP */}
              <button className="hidden lg:flex w-11 h-11 shrink-0 rounded-full bg-neutral-900 border border-neutral-700 text-white items-center justify-center hover:scale-105 hover:bg-neutral-800 transition shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <ArrowRight size={17} />
              </button>

              {/* TO */}
              <div className="w-full flex-1 bg-[#18181b] rounded-2xl px-5 py-4 border border-neutral-800 hover:border-neutral-700 transition ">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2 font-medium">
                  To
                </label>

                <div className="flex items-center gap-3">
                  <MapPin
                    size={17}
                    strokeWidth={1.6}
                    className="text-neutral-400"
                  />

                  <input
                    type="text"
                    placeholder="Goa"
                    className="w-full outline-none bg-transparent text-sm font-medium text-white placeholder:text-neutral-600"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              {/* DATE */}
              <div className="w-full flex-1 bg-[#18181b] rounded-2xl px-5 py-4 border border-neutral-800 hover:border-neutral-700 transition ">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2 font-medium">
                  Departure
                </label>

                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={17}
                    strokeWidth={1.6}
                    className="text-neutral-400"
                  />

                  <input
                    type="date"
                    className="w-full outline-none bg-transparent text-sm font-medium text-neutral-300 [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* PASSENGERS */}
              <div className="w-full flex-1 bg-[#18181b] rounded-2xl px-5 py-4 border border-neutral-800 hover:border-neutral-700 transition ">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2 font-medium">
                  Travelers
                </label>

                <div className="flex items-center gap-3">
                  <Users
                    size={17}
                    strokeWidth={1.6}
                    className="text-neutral-400"
                  />

                  <select className="w-full outline-none bg-transparent text-sm font-medium text-neutral-300 [&>option]:bg-[#18181b]">
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3 Travelers</option>
                    <option>4 Travelers</option>
                    <option>5+ Travelers</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-end mt-6">
            <button className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-semibold hover:bg-neutral-200 hover:scale-[1.01] transition shadow-[0_10px_25px_rgba(255,255,255,0.15)]">
              <Search size={17} />
              Search flights
            </button>
          </div>
        </div>

        {/* Small Decorative Label */}
        <div className="absolute -bottom-8 left-4 hidden xl:flex items-center gap-3 text-xs text-neutral-500">
          <span className="w-8 h-px bg-neutral-800" />
          Start your journey from anywhere
        </div>
      </div>
    </div>
  );
}

export default FlightTickets