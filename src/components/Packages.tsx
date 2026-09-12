import kashmirImg from "../assets/images/kashmir.jpg";
import masoorieImg from "../assets/images/masoorie.jpg";
import beachImg from "../assets/images/beach.jpg";

const Packages = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-4 font-sans">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-5xl text-gray-900 font-normal tracking-tight mt-3 max-w-4xl mx-auto leading-tight">
            Discover our exceptional selection of travel packages and
            destinations
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: All-Inclusive Packages (Larger span on desktop matching image proportion) */}
          <div className="lg:col-span-6 relative h-[480px]  rounded-lg overflow-hidden group flex flex-col justify-between p-8 text-white shadow-lg">
            {/* Background Image */}
            <img
              src={kashmirImg}
              alt="All-Inclusive Packages"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Top Tag */}
            <div className="relative z-10 self-start bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-normal border border-white/20 text-white">
              5 day, 4 night
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col items-start">
              <h3 className="text-2xl md:text-3xl font-medium mb-2 tracking-wide">
                All-Inclusive Packages
              </h3>
              <p className="text-gray-200 text-sm md:text-base font-light mb-6 max-w-md leading-relaxed">
                These include everything from flights to accommodation, meals,
                and activities.
              </p>
              <button className="border border-white/70 hover:bg-white hover:text-gray-900 text-white transition-all duration-300 px-6 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Choose package
              </button>
            </div>
          </div>

          {/* Card 2: Cultural Packages */}
          <div className="lg:col-span-3 relative h-[480px]  rounded-lg overflow-hidden group flex flex-col justify-between p-8 text-white shadow-lg">
            <img
              src={masoorieImg}
              alt="Cultural Packages"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="relative z-10 self-start bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-normal border border-white/20 text-white">
              5 day, 4 night
            </div>

            <div className="relative z-10 flex flex-col items-start">
              <h3 className="text-2xl font-medium mb-2 tracking-wide">
                Cultural Packages
              </h3>
              <p className="text-gray-200 text-sm font-light leading-relaxed">
                Focus on cultural experiences such as heritage tours, and local
                performances.
              </p>
            </div>
          </div>

          {/* Card 3: Adventure Packages */}
          <div className="lg:col-span-3 relative h-[480px]  rounded-lg overflow-hidden group flex flex-col justify-between p-8 text-white shadow-lg">
            <img
              src={beachImg}
              alt="Adventure Packages"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="relative z-10 self-start bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-normal border border-white/20 text-white">
              5 day, 4 night
            </div>

            <div className="relative z-10 flex flex-col items-start">
              <h3 className="text-2xl font-medium mb-2 tracking-wide">
                Adventure Packages
              </h3>
              <p className="text-gray-200 text-sm font-light leading-relaxed">
                Tailored for thrill-seekers, offering activities like hiking,
                diving, or extreme sports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
