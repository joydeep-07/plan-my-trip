// import React from "react";
import { ArrowRight } from "lucide-react";
import plane from "../assets/images/plane.png";

const ServiceBanner = () => {
  return (
    <section className="w-full px-4 py-6">
      <div
        className="
          relative mx-auto w-full
          h-[260px] sm:h-[350px] md:h-[450px]
          overflow-hidden rounded-lg
          bg-[#dceff8]
          isolate
        "
      >
        {/* ================= SKY BACKGROUND ================= */}
        <div className="absolute inset-0 -z-10">
          {/* Base sky */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-[#d7edf7]
              via-[#edf7fa]
              to-[#b8dcea]
            "
          />

          {/* Large soft clouds */}
          <div
            className="
              absolute
              -left-[15%] top-[18%]
              h-[240px] w-[620px]
              rounded-full
              bg-white/40
              blur-[65px]
            "
          />

          <div
            className="
              absolute
              left-[15%] bottom-[-25%]
              h-[260px] w-[600px]
              rounded-full
              bg-white/55
              blur-[70px]
            "
          />

          <div
            className="
              absolute
              right-[12%] top-[8%]
              h-[200px] w-[400px]
              rounded-full
              bg-white/35
              blur-[65px]
            "
          />

          {/* Subtle blue atmospheric glow */}
          <div
            className="
              absolute
              right-[25%] bottom-[5%]
              h-[180px] w-[300px]
              rounded-full
              bg-[#a9d6e7]/20
              blur-[70px]
            "
          />
        </div>

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            absolute
            left-5 sm:left-9 lg:left-14
            top-1/2
            z-20
            -translate-y-1/2
          "
        >
          <div className="flex gap-4 sm:gap-6 lg:gap-7">
            {/* ================= TIMELINE ================= */}
            <div
              className="
                relative hidden md:flex
                h-[215px]
                w-7
                shrink-0
                flex-col
                items-center
                justify-between
              "
            >
              {/* Connecting line */}
              <div
                className="
                  absolute
                  left-1/2 top-3
                  h-[192px] w-px
                  -translate-x-1/2
                  bg-white/75
                "
              />

              {/* Step 1 */}
              <div
                className="
                  relative z-10
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-[9px]
                  font-semibold
                  text-[#52616b]
                  shadow-[0_3px_12px_rgba(60,100,120,0.12)]
                "
              >
                1
              </div>

              {/* Step 2 */}
              <div
                className="
                  relative z-10
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  border border-white/80
                  bg-white/20
                  text-[9px]
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                2
              </div>

              {/* Step 3 */}
              <div
                className="
                  relative z-10
                  flex h-7 w-7
                  items-center
                  justify-center
                  rounded-full
                  border border-white/80
                  bg-white/20
                  text-[9px]
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                3
              </div>
            </div>

            {/* ================= TEXT CONTENT ================= */}
            <div className="">
              {/* Eyebrow */}
              <p
                className="
                  mb-2 sm:mb-3
                  text-[7px] sm:text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#52616b]
                "
              >
                Plan • Explore • Experience
              </p>

              {/* Main Heading */}
              <h1
                className="
                  text-[24px]
                  sm:text-[40px]
                  lg:text-[53px]
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[#111820]
                "
              >
                Your Next Adventure
                <br />
                Starts Here.
              </h1>

              {/* Description */}
              <p
                className="
                  mt-2 sm:mt-4
                  max-w-[190px] sm:max-w-[290px]
                  text-[9px] sm:text-xs
                  leading-[1.5] sm:leading-[1.6]
                  text-[#52616b]
                "
              >
                Discover beautiful destinations, find the right stays, and turn
                your travel ideas into a journey worth remembering.
              </p>

              {/* CTA */}
              <button
                type="button"
                className="
                  group

                  max-w-[150px]
                  mt-3 sm:mt-5
                  inline-flex w-full sm:w-auto
                  items-center
                  justify-center sm:justify-start
                  gap-3
                  rounded-full
                  bg-[#111820]
                  px-4 sm:px-5
                  py-2 sm:py-2.5
                  text-[10px] sm:text-[10px]
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(17,24,32,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_rgba(17,24,32,0.2)]
                "
              >
                Plan Your Trip
                <span
                  className="
                    flex h-5 w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowRight size={11} strokeWidth={2} />
                </span>
              </button>

              
            </div>
          </div>
        </div>

        {/* ================= AIRPLANE ================= */}
        <div
          className="
            absolute
            -right-[27%]
            top-[3%]
            z-10
            w-[70%]
            sm:-right-[20%]
            sm:-top-[18%]
            sm:w-[66%]
            md:-right-[18%]
            md:-top-[28%]
            md:w-[64%]
          "
        >
          <img
            src={plane}
            alt="Airplane"
            className="
              block
              w-full
              object-contain
              rotate-[-7deg]
              drop-shadow-[0_22px_28px_rgba(50,80,100,0.14)]
            "
          />
        </div>

    
      

        {/* ================= BOTTOM CLOUD ================= */}
        <div
          className="
            absolute
            -bottom-[100px]
            left-[15%]
            h-[190px]
            w-[500px]
            rounded-full
            bg-white/45
            blur-[55px]
          "
        />

        {/* ================= EXPLORE CARD ================= */}
        <div
          className="
            absolute
            bottom-0 right-0
            z-30
            w-[200px]
            sm:w-[275px]
            lg:w-[305px]
            rounded-tl-[30px]
            bg-white
            px-4 sm:px-6
            pb-4 sm:pb-5
            pt-4 sm:pt-5
          "
        >
          {/* Left curve */}
          <div
            className="
              absolute
              -left-[54px]
              bottom-0
              h-[54px] w-[54px]
              rounded-br-[30px]
              bg-transparent
              shadow-[20px_20px_0_20px_white]
            "
          />

          {/* Top/right curve */}
          <div
            className="
              absolute
              -top-[54px]
              right-0
              h-[54px] w-[54px]
              rounded-br-[30px]
              bg-transparent
              shadow-[20px_20px_0_20px_white]
            "
          />

          {/* Card header */}
          <div
            className="
              relative z-10
              mb-3 sm:mb-4
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                tracking-tight
                text-[#111820]
              "
            >
              Explore More
            </span>

            <div
              className="
                flex h-6 w-6
                items-center
                justify-center
                rounded-full
                bg-[#f4f8fa]
              "
            >
              <ArrowRight
                size={11}
                strokeWidth={2}
                className="text-[#111820]"
              />
            </div>
          </div>

          {/* Card content */}
          <div className="relative z-10 flex items-center gap-3">
            {/* Destination images */}
            <div className="flex shrink-0 -space-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100"
                alt="Beach destination"
                className="
                  h-8 w-8
                  rounded-full
                  border-2 border-white
                  object-cover
                  shadow-sm
                "
              />

              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=100"
                alt="Travel destination"
                className="
                  h-8 w-8
                  rounded-full
                  border-2 border-white
                  object-cover
                  shadow-sm
                "
              />

              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=100"
                alt="Mountain destination"
                className="
                  h-8 w-8
                  rounded-full
                  border-2 border-white
                  object-cover
                  shadow-sm
                "
              />
            </div>

            {/* Card text */}
            <div className="min-w-0">
              <h3
                className="
                  md:text-[9px]
                  text-[7px]
                  font-bold
                  leading-tight
                  text-[#111820]
                "
              >
                Places Worth Visiting
              </h3>

              <p
                className="
                  mt-1
                  max-w-[135px]
                  md:text-[6px]
                  text-[4px]
                  leading-[1.4]
                  text-gray-400
                "
              >
                Find your next destination and start planning your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
