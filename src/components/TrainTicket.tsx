import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Train, FileText, Download, Share2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TrainTicketCard = () => {
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
    <section className="w-full px-0 py-3 pb-10 md:pb-6 md:px-4 font-sans box-border overflow-x-hidden">
      <div
        ref={containerRef}
        className="
          relative
          w-full
          
          mx-auto
          overflow-hidden
          rounded-2xl
          sm:rounded-2xl
          border border-sky-300/30
          bg-sky-600
          text-white
        "
      >
        {/* Background Concentric Circles Parallax */}
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
            opacity-100
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
            px-2
            py-8
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
          {/* Header Title Section */}
          <div className="text-left text-white mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
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
        border-sky-300/40
        bg-sky-950/40
        backdrop-blur-md
        sm:h-9
        sm:w-9
      "
              >
                <Train
                  size={15}
                  strokeWidth={1.7}
                  className="text-white sm:h-4 sm:w-4"
                />
              </div>

              <span className="text-[10px] uppercase tracking-[0.18em] text-sky-100 sm:text-xs sm:tracking-[0.2em] font-medium">
                Train Ticket Booking
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal tracking-tight mb-3 text-white leading-[1.05]">
              Plan Your Journey
              <br />
              <span className="text-sky-100/70 font-light">
                Book Your Train Ticket
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-sky-100/90 max-w-md px-0">
              Book your train tickets with ease and keep all your journey
              details organized in one place.
            </p>
          </div>

          {/* Main Ticket Container */}
          <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-[1rem] relative overflow-hidden flex flex-col md:flex-row text-slate-800">
            {/* Ticket Cutouts */}
            {/* Top cut */}
            <div className="absolute top-0 left-[calc(100%-20rem)] -translate-x-1/2 -translate-y-1/2 w-15 h-15 rounded-full bg-sky-600 z-20 hidden md:block" />

            {/* Bottom cut */}
            <div className="absolute bottom-0 left-[calc(100%-20rem)] -translate-x-1/2 translate-y-1/2 w-15 h-15 rounded-full bg-sky-600 z-20 hidden md:block" />

            {/* Mobile left cut */}
            <div className="absolute top-[61.7%] left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-sky-600 z-20 md:hidden" />

            {/* Mobile right cut */}
            <div className="absolute top-[61.7%] right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-sky-600 z-20 md:hidden" />

            {/* Left Side: Journey Details */}
            <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-dashed border-gray-500/50 relative">
              {/* Top Row: Logo & Train Operator */}
              <div className="hidden md:flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl font-medium tracking-wider text-slate-900">
                    IRCTC
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-600 text-right">
                  Vande Bharat
                </span>
              </div>

              {/* Middle Row: Route & Times */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between my-2 sm:my-4 px-1 sm:px-2 gap-4 sm:gap-0">
                {/* Departure */}
                <div className=" flex justify-between items-center">
                  <div className="">
                    <p className="text-xs text-slate-400 font-medium mb-1">
                      Depart
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      20:15
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      4 October 2023
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      New Delhi (NDLS)
                    </p>
                  </div>

                  <div className=" md:hidden ">
                    <h2 className="text-xl text-right sm:text-2xl font-semibold tracking-wider text-slate-900">
                      IRCTC
                    </h2>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 text-right">
                      Vande Bharat
                    </span>
                  </div>
                </div>

                {/* Duration / Stops Line */}
                <div className="flex flex-col items-center px-2 sm:px-4 flex-1 my-2 sm:my-0">
                  <span className="text-xs font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-2 border border-sky-100 whitespace-nowrap">
                    12 hr 30 min
                  </span>
                  <div className="w-full flex items-center">
                    <div className="w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                    <div className="flex-1 border-t-2 border-dashed border-sky-300 mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">
                    2 stops
                  </span>
                </div>

                {/* Arrival */}
                <div className="text-left sm:text-right">
                  <p className="text-xs text-slate-400 font-medium mb-1">
                    Arrive
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    08:45
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    5 October 2023
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Howrah Jn (HWH)</p>
                </div>
              </div>

              {/* Bottom Notice Box */}
              <div className="bg-slate-50 rounded-sm p-3.5 flex items-center space-x-3 mt-6 mb-4 md:mb-0 border border-slate-100">
                <div className="p-2 rounded-xl text-sky-600 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Show e-tickets and valid government photo identity during
                  ticket inspection.
                </p>
              </div>
            </div>

            {/* Right Side: Passenger & Seat Details */}
            <div className="w-full md:w-80 p-5 sm:p-6 md:p-8 flex flex-col justify-between bg-white relative">
              {/* Class Badge */}
              <div className="flex justify-start sm:justify-end mb-4">
                <span className="text-xs font-semibold text-sky-600 border border-sky-200 px-3 py-1 rounded-full bg-sky-50/50">
                  AC First Class (1A)
                </span>
              </div>

              {/* Passenger Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Name
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 truncate">
                    Soumika Paul
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    PNR Number
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 truncate">
                    231454422
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Email
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 ">
                    soumikapaul@gmail.com
                  </p>
                </div>
              </div>

              {/* Coach & Berth Cards */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <div className="bg-slate-50 rounded-sm p-3 text-center border border-slate-100">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Coach
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-slate-900">
                    H1
                  </p>
                </div>
                <div className="bg-slate-50 rounded-sm p-3 text-center border border-slate-100">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Berth
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-slate-900">
                    A2
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 sm:mt-10 w-full max-w-md mx-auto px-2 sm:px-4">
            <button className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-sky-50 text-sky-900 font-semibold py-3.5 px-6 rounded-full transition-all duration-200 cursor-pointer">
              <Download className="w-4 h-4 shrink-0" />
              <span>Download</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold py-3.5 px-6 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer">
              <Share2 className="w-4 h-4 shrink-0" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainTicketCard;
