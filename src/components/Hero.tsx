import kashmir from "../assets/images/kashmir.jpg";

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="h-screen w-full p-3 md:p-4 box-border">
        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <img
            className="absolute inset-0 h-full w-full object-cover transform scale-105 transition-transform duration-1000"
            src={kashmir}
            alt="Kashmir landscape"
          />

          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>

          {/* Hero Content Container */}
          <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-12 lg:p-16 text-white box-border">
            {/* Top/Middle Section: Main Heading & Glass Search Bar */}
            <div className="flex flex-col items-center text-center mt-12 md:mt-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-[1.15] mb-8 drop-shadow-sm">
                Begin your dream journey with our expert guidance and support
              </h1>

              {/* Refined Glassmorphism Search Bar */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-white/20 text-sm max-w-2xl w-full shadow-lg gap-2 md:gap-0">
                <div className="px-5 py-2.5 text-white/90 md:border-r border-white/20 flex items-center justify-between gap-3 w-full md:w-auto cursor-pointer hover:text-white transition">
                  <span className="text-gray-300">Search destination</span>
                  <span className="text-xs opacity-75">▼</span>
                </div>
                <div className="px-5 py-2.5 text-white/90 md:border-r border-white/20 flex items-center justify-between gap-3 w-full md:w-auto cursor-pointer hover:text-white transition">
                  <span className="text-gray-300">Date destination</span>
                  <span className="text-xs opacity-75">▼</span>
                </div>
                <div className="px-5 py-2.5 text-white/90 flex items-center justify-between gap-3 w-full md:w-auto cursor-pointer hover:text-white transition">
                  <span className="text-gray-300">Trip type</span>
                  <span className="text-xs opacity-75">▼</span>
                </div>
                <button className="bg-white text-gray-950 font-semibold px-7 py-3 rounded-xl md:rounded-full hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md w-full md:w-auto">
                  Explore
                </button>
              </div>
            </div>

            {/* Bottom Section: Location, Subtext, and Explore More */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2">
              {/* Left side: Location badge & short description */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit border border-white/15 text-xs tracking-wide shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-medium">Kashmir, India</span>
                </div>
                <p className="text-xs md:text-sm text-gray-200/90 max-w-sm leading-relaxed">
                  Book your travel and transportation service with us and enjoy
                  a hassle-free and memorable journey.
                </p>
              </div>

              {/* Right side: Explore more action */}
              <div className="flex items-center gap-3 text-sm font-medium cursor-pointer bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all shadow-sm group">
                <span>Explore more</span>
                <span className="text-xs transform group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About & Stats Section */}
      <div className="w-full bg-white px-6 md:px-12 py-20 text-black box-border">
        <div className="mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-start">
          {/* Left Side: About Us Text Content */}
          <div className="w-full lg:w-[58%] flex flex-col gap-4">
            <div className="text-blue-600 font-bold text-xs tracking-widest flex items-center gap-1.5">
              <span className="text-blue-500">//</span> ABOUT US
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug text-gray-900 max-w-2xl">
              We are a passionate team of travel enthusiasts dedicated to making
              your travel dreams come true.{" "}
              <span className="text-gray-400">
                Our mission is to provide you with the best travel experiences
              </span>
            </h2>
          </div>

          {/* Right Side: Statistics */}
          <div className="w-full lg:w-[42%] flex gap-6 lg:gap-8 pt-8 lg:pt-0 lg:pl-12">
            {/* Stat 1 */}
            <div className="flex flex-col flex-1">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                200+
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                Happy Customer
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col flex-1">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                65+
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                Top Hotels
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col flex-1">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                250+
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                Experienced Guide
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
