import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane } from "lucide-react";
import FlightTickets from "./FlightTickets";

gsap.registerPlugin(ScrollTrigger);

const TravelCards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const circlesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;

    if (!el || !circlesRef.current) return;

    const ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full px-0 py-3 pb-10 md:pb-4 sm:px-4 sm:py-5 md:px-4">
      <div
        ref={containerRef}
        className="
          relative
          w-full
          max-w-[1600px]
          mx-auto
          overflow-hidden
          rounded-t-[40px]
          sm:rounded-2xl
          border border-neutral-800
          bg-black
          font-sans
          text-white
          shadow-[0_25px_60px_-15px_rgba(255,255,255,0.08)]
        "
      >
        {/* Background Concentric Circles */}
        <div
          ref={circlesRef}
          className="
            pointer-events-none
            absolute
            top-1/2
            left-1/2
            md:left-2/3
            -translate-x-1/2
            -translate-y-1/2
            opacity-15
            sm:opacity-20
            origin-center
          "
        >
          <svg
            className="
              h-[500px]
              w-[500px]
              sm:h-[700px]
              sm:w-[700px]
              md:h-[950px]
              md:w-[950px]
              lg:h-[1200px]
              lg:w-[1200px]
            "
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
        <div
          className="
            relative
            z-10
            w-full
            px-4
            py-10
            sm:px-6
            sm:py-12
            md:px-10
            md:py-16
            lg:px-14
            lg:py-20
            xl:px-16
            xl:py-24
          "
        >
          {/* Main Grid */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-10
              sm:gap-12
              md:gap-14
              lg:gap-16
              xl:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* LEFT CONTENT */}
            <div className="w-full min-w-0">
              <div className="max-w-2xl">
                {/* Label */}
                <div className="mb-4 flex items-center gap-2 sm:mb-5">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-800
                      bg-neutral-900
                      shadow-[0_8px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]
                      sm:h-9
                      sm:w-9
                    "
                  >
                    <Plane
                      size={15}
                      strokeWidth={1.7}
                      className="text-white sm:h-4 sm:w-4"
                    />
                  </div>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-neutral-400
                      sm:text-xs
                      sm:tracking-[0.2em]
                    "
                  >
                    Book your journey
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="
                    text-[2.75rem]
                    font-normal
                    leading-[0.95]
                    tracking-tight
                    text-white
                    xs:text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-7xl
                    
                  "
                >
                  Your next
                  <br />
                  <span className="text-neutral-500">adventure awaits.</span>
                </h1>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-relaxed
                    text-neutral-400
                    sm:mt-6
                    sm:text-base
                  "
                >
                  Book your flight tickets and discover beautiful destinations
                  around the world. Choose where you want to go and let the
                  journey begin.
                </p>
              </div>

              {/* Stats */}
              <div
                className="
    mt-8
    flex
    w-full
    flex-nowrap
    gap-2
    sm:mt-10
    sm:gap-4
    lg:mt-12
  "
              >
                {/* Stat 1 */}
                <div
                  className="
      min-w-0
      flex-1
      rounded-sm
      border
      border-neutral-900
      bg-[#121212]/50
      p-3
      shadow-lg
      sm:rounded-xl
      sm:p-5
    "
                >
                  <p className="text-base font-medium text-white sm:text-xl">
                    500+
                  </p>

                  <p className="mt-1 text-[9px] leading-tight text-neutral-400 sm:text-xs">
                    Destinations worldwide
                  </p>
                </div>

                {/* Stat 2 */}
                <div
                  className="
      min-w-0
      flex-1
      rounded-sm
      border
      border-neutral-900
      bg-[#121212]/50
      p-3
      shadow-lg
      sm:rounded-xl
      sm:p-5
    "
                >
                  <p className="text-base font-medium text-white sm:text-xl">
                    Best prices
                  </p>

                  <p className="mt-1 text-[9px] leading-tight text-neutral-400 sm:text-xs">
                    Compare flights
                  </p>
                </div>

                {/* Stat 3 */}
                <div
                  className="
      min-w-0
      flex-1
      rounded-sm
      border
      border-neutral-900
      bg-[#121212]/50
      p-3
      shadow-lg
      sm:rounded-xl
      sm:p-5
    "
                >
                  <p className="text-base font-medium text-white sm:text-xl">
                    24/7
                  </p>

                  <p className="mt-1 text-[9px] leading-tight text-neutral-400 sm:text-xs">
                    Travel support
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — FLIGHT TICKET */}
            <div
              className="
                flex
                w-full
                min-w-0
                justify-center
                xl:justify-end
              "
            >
              <div className="w-full max-w-[700px] min-w-0">
                <FlightTickets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelCards;
