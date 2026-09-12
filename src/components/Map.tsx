import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import Globe from "./Globe";

const Map = () => {
  return (
    <section className="w-full bg-[var(--bg-main)] px-3 py-6 sm:px-4 sm:py-8 md:py-10">
      <div className="mx-auto flex w-full flex-col gap-5 lg:flex-row">
        {/* LEFT — GLOBE */}
        <div className="relative w-full overflow-hidden rounded-xl border border-[var(--border-light)] bg-white lg:w-[43%]">
          {/* Explore Badge */}
          <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
            <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-gray-500 shadow-sm backdrop-blur-xl sm:px-4 sm:py-2 sm:text-[10px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-primary)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              </span>
              Explore the world
            </div>
          </div>

          {/* Globe */}
          <div className="flex w-full items-center justify-center overflow-hidden">
            <Globe />
          </div>

          {/* Current Region */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-gray-400 sm:text-[10px] sm:tracking-[0.2em]">
                Current region
              </p>

              <p className="mt-1 text-base font-semibold text-gray-900 sm:text-lg">
                India
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-light)] bg-white shadow-sm sm:h-10 sm:w-10">
              <Navigation
                size={14}
                className="text-[var(--accent-primary)] sm:h-[15px] sm:w-[15px]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="relative flex w-full flex-col overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:w-[57%] lg:px-10 lg:py-2 xl:px-12">
          {/* HEADER */}
          <div className="relative z-10">
            {/* Small Header */}
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f5d9] sm:h-10 sm:w-10">
                <MapPin
                  size={16}
                  className="text-[var(--accent-primary)] sm:h-[17px] sm:w-[17px]"
                />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">
                Travel smarter
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-2xl text-3xl font-light leading-[0.95] tracking-[-0.055em] text-gray-950 sm:mt-7 sm:text-5xl md:text-6xl lg:text-5xl">
              Go somewhere{" "}
              <span className="text-[var(--accent-primary)]">
                Unforgettable.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500 sm:mt-7 sm:leading-7 md:text-[15px]">
              Find places that match the way you want to travel. Discover hidden
              escapes, iconic destinations, and unforgettable experiences across
              India.
            </p>
          </div>

          {/* DESTINATION FEATURE */}
          <div className="relative z-10 mt-10 pt-0 sm:mt-12 lg:mt-auto lg:pt-12">
            <div className="border-t border-[var(--border-light)] pt-5 sm:pt-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                {/* Destination */}
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-[10px] sm:tracking-[0.2em]">
                      Start exploring
                    </p>

                    <div className="mt-3">
                      <p className="text-base font-semibold text-gray-900 sm:text-lg">
                        Incredible India
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Mountains · Beaches · Culture
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-gray-950 px-3 py-3 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[var(--accent-primary)] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-xs"
                  >
                    <span className="whitespace-nowrap">
                      Explore destinations
                    </span>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={14} />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-6 flex items-center gap-5 sm:mt-7 sm:gap-8 md:gap-10">
              {/* Stat 1 */}
              <div className="min-w-0">
                <p className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  08
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-gray-400 sm:text-[9px] sm:tracking-[0.16em]">
                  Destinations
                </p>
              </div>

              <div className="h-8 w-px shrink-0 bg-[var(--border-light)] sm:h-10" />

              {/* Stat 2 */}
              <div className="min-w-0">
                <p className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  28+
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-gray-400 sm:text-[9px] sm:tracking-[0.16em]">
                  States & UTs
                </p>
              </div>

              <div className="h-8 w-px shrink-0 bg-[var(--border-light)] sm:h-10" />

              {/* Stat 3 */}
              <div className="min-w-0">
                <p className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  ∞
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-gray-400 sm:text-[9px] sm:tracking-[0.16em]">
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
