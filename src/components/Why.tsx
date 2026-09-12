import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import tree from "../assets/images/tree.jpg";
import { UserCheck, Map, Tag, Users, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Why: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // Initial animation states
      gsap.set(imageRef.current, { scale: 1.15 });
      gsap.set(".why-badge", { y: 20, opacity: 0 });
      gsap.set(".why-title", { y: 25, opacity: 0 });
      gsap.set(".why-desc", { y: 25, opacity: 0 });
      gsap.set(".why-feature-item", { y: 20, opacity: 0 });

      // Scroll-triggered reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(imageRef.current, {
        scale: 1,
        duration: 1.4,
      })
        .to(
          ".why-badge",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=1",
        )
        .to(
          ".why-title",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.4",
        )
        .to(
          ".why-desc",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5",
        )
        .to(
          ".why-feature-item",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4",
        );

      // Parallax effect on scroll
      if (imageRef.current && containerRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative p-4 mb-25 w-screen h-[500px] overflow-hidden"
    >
      <div className="absolute inset-4 overflow-hidden rounded-xl">
        <img
          ref={imageRef}
          src={tree}
          className="h-[115%] w-full object-cover object-bottom transform-gpu will-change-transform -mt-[5%]"
          alt="tree"
        />
      </div>

      {/* Black transparent overlay layer placed above the image and below the glassmorphism card */}
      <div className="absolute inset-4 rounded-xl bg-black/40 pointer-events-none" />

      {/* Glassmorphism Card positioned in the center above the image, preserving the p-4 padding boundary */}
      <div className="absolute inset-4 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto md:max-w-7xl h-full md:h-auto w-full p-8 sm:p-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-center text-white">
          <span className="why-badge inline-block text-xs uppercase tracking-[3px] text-amber-300 font-semibold mb-2 transform-gpu will-change-[transform,opacity]">
            Discover The Difference
          </span>
          <h2 className="why-title text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-3 transform-gpu will-change-[transform,opacity]">
            Why Travel With Us?
          </h2>
          <p className="why-desc text-sm sm:text-base text-gray-100 leading-relaxed font-light max-w-2xl mx-auto mb-8 transform-gpu will-change-[transform,opacity]">
            We're passionate about creating journeys that inspire, connect and
            leave you with memories that last a lifetime.
          </p>

          {/* Features Grid derived from the provided content */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 pt-4 border-t border-white/20">
            <div className="why-feature-item flex flex-col items-center text-center transform-gpu will-change-[transform,opacity]">
              <UserCheck className="w-6 h-6 mb-2 text-amber-300" />
              <span className="text-xs sm:text-sm font-medium">
                Expert Travel Planners
              </span>
            </div>
            <div className="why-feature-item flex flex-col items-center text-center transform-gpu will-change-[transform,opacity]">
              <Map className="w-6 h-6 mb-2 text-amber-300" />
              <span className="text-xs sm:text-sm font-medium">
                Customized Itineraries
              </span>
            </div>
            <div className="why-feature-item flex flex-col items-center text-center transform-gpu will-change-[transform,opacity]">
              <Tag className="w-6 h-6 mb-2 text-amber-300" />
              <span className="text-xs sm:text-sm font-medium">
                Best Price Guarantee
              </span>
            </div>
            <div className="why-feature-item flex flex-col items-center text-center transform-gpu will-change-[transform,opacity]">
              <Users className="w-6 h-6 mb-2 text-amber-300" />
              <span className="text-xs sm:text-sm font-medium">
                Trusted by Thousands
              </span>
            </div>
            <div className="why-feature-item col-span-2 sm:col-span-1 flex flex-col items-center text-center transform-gpu will-change-[transform,opacity]">
              <Headphones className="w-6 h-6 mb-2 text-amber-300" />
              <span className="text-xs sm:text-sm font-medium">
                24/7 Customer Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
