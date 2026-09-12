import { ArrowUpRight, MapPin, Navigation, Sparkles } from "lucide-react";
import Globe from "./Globe";

const Map = () => {
  return (
    <section className="w-full bg-[var(--bg-main)] px-4 py-10">
      <div className="mx-auto flex gap-5">
        {/* LEFT — GLOBE */}
        <div className="relative w-[43%] overflow-hidden rounded-xl border border-[var(--border-light)] bg-white">
          <div className="absolute left-6 top-6 z-20">
            <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500 shadow-sm backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-primary)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              </span>
              Explore the world
            </div>
          </div>

          <div className="h-full w-full flex justify-center items-center">
            <Globe />
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Current region
              </p>

              <p className="mt-1 text-lg font-semibold text-gray-900">India</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-white shadow-sm">
              <Navigation size={15} className="text-[var(--accent-primary)]" />
            </div>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="relative flex w-[57%] flex-col overflow-hidden p-8 md:py-0 md:px-12">
          {/* Decorative circle */}
          {/* <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#e8f5d9]/60 blur-3xl" /> */}

          {/* HEADER */}
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f5d9]">
                <MapPin size={17} className="text-[var(--accent-primary)]" />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                Travel smarter
              </span>
            </div>

            <h2 className="mt-7 max-w-2xl text-5xl font-light leading-[0.95] tracking-[-0.055em] text-gray-950">
              Go somewhere 
              <span className=" text-[var(--accent-primary)]">
                {" "}unforgettable.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-gray-500 md:text-[15px]">
              Find places that match the way you want to travel. Discover hidden
              escapes, iconic destinations, and unforgettable experiences across
              India.
            </p>
          </div>

          {/* DESTINATION FEATURE */}
          <div className="relative z-10 mt-auto pt-12">
            <div className="border-t border-[var(--border-light)] pt-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Start exploring
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Incredible India
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Mountains · Beaches · Culture
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    bg-gray-950
                    px-6
                    py-3.5
                    text-xs
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[var(--accent-primary)]
                  "
                >
                  Explore destinations
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-7 flex gap-10">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-gray-900">
                  08
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-gray-400">
                  Destinations
                </p>
              </div>

              <div className="h-10 w-px bg-[var(--border-light)]" />

              <div>
                <p className="text-2xl font-semibold tracking-tight text-gray-900">
                  28+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-gray-400">
                  States & UTs
                </p>
              </div>

              <div className="h-10 w-px bg-[var(--border-light)]" />

              <div>
                <p className="text-2xl font-semibold tracking-tight text-gray-900">
                  ∞
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-gray-400">
                  Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
