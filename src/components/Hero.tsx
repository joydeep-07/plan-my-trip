import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import kashmir from "../assets/images/kashmir.jpg";
import Search from "./Search";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const aboutTextRef = useRef<HTMLHeadingElement | null>(null);

  const [searchValue, setSearchValue] = useState("");

  const stats: StatItem[] = [
    { target: 200, suffix: "+", label: "Happy Customer" },
    { target: 65, suffix: "+", label: "Top Hotels" },
    { target: 250, suffix: "+", label: "Experienced Guide" },
  ];

  const aboutWords = [
    "We",
    "are",
    "a",
    "passionate",
    "team",
    "of",
    "travel",
    "enthusiasts",
    "dedicated",
    "to",
    "making",
    "your",
    "travel",
    "dreams",
    "come",
    "true",
    "with",
    "memorable",
    "journeys",
    "and",
    "unforgettable",
    "experiences",
    "around",
    "the",
    "world.",
  ];

  const splitTextToSpans = (words: string[]) => {
    return words.map((word, i) => (
      <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className="inline-block opacity-20 text-gray-400 transition-colors duration-100"
          >
            {char}
          </span>
        ))}
      </span>
    ));
  };

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // ==========================================
      // 1. HERO LOAD ANIMATION (Angled Polygon Reveal on Right Image)
      // ==========================================
      gsap.set(".hero-img-container", {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      });
      if (heroImageRef.current) {
        gsap.set(heroImageRef.current, { scale: 1.2 });
      }
      gsap.set(".hero-badge", { y: 20, opacity: 0 });
      gsap.set(".hero-title-line", { yPercent: 200 });
      gsap.set(".hero-desc", { y: 25, opacity: 0 });
      gsap.set(".hero-search-wrapper", { y: 25, opacity: 0 });
      gsap.set(".hero-footer-item", { y: 20, opacity: 0 });

      const heroTl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
      });

      heroTl
        .to(".hero-img-container", {
          clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.3,
          ease: "power4.inOut",
        })
        .to(
          heroImageRef.current,
          {
            scale: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".hero-badge",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.9",
        )
        .to(
          ".hero-title-line",
          {
            yPercent: 0,
            duration: 0.85,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .to(
          ".hero-desc",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5",
        )
        .to(
          ".hero-search-wrapper",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5",
        )
        .to(
          ".hero-footer-item",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.5",
        );

      // Parallax effect on scroll
      if (heroImageRef.current && heroRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // ==========================================
      // 2. ABOUT TEXT SCROLL REVEAL ANIMATION (Opacity & Color only)
      // ==========================================
      if (aboutTextRef.current) {
        const letters = aboutTextRef.current.querySelectorAll("span span");
        gsap.to(letters, {
          opacity: 1,
          color: "#111827", // text-gray-900 equivalent
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1,
          },
        });
      }

      // ==========================================
      // 3. COUNTER TRIGGER FOR STATISTICS
      // ==========================================
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top 80%",
        onEnter: () => {
          const targets = document.querySelectorAll(".stat-number");
          targets.forEach((el) => {
            const targetAttr = el.getAttribute("data-target");
            const targetValue = targetAttr ? parseInt(targetAttr, 10) : 0;
            const suffix = el.getAttribute("data-suffix") || "";
            const obj = { val: 0 };

            gsap.to(obj, {
              val: targetValue,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${Math.floor(obj.val)}${suffix}`;
              },
            });
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full mx-auto px-4 py-4 font-sans bg-[var(--bg-main)] overflow-hidden"
    >
      {/* HERO BANNER */}
      <div
        ref={heroRef}
        className="relative min-h-[600px] overflow-hidden rounded-sm bg-gray-900 text-white"
      >
        {/* Right side angled image container */}
        <div className="hero-img-container absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[55%] transform-gpu will-change-[clip-path] z-10">
          <div className="relative h-full w-full overflow-hidden">
            <img
              ref={heroImageRef}
              src={kashmir}
              alt="Kashmir landscape"
              className="h-[115%] w-full object-cover transform-gpu will-change-transform -mt-[5%]"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>

        {/* Left side text container */}
        <div className="relative z-20 min-h-[560px] p-8 md:p-14 lg:p-16 flex flex-col justify-between md:justify-center max-w-xl">
          {/* Top Label */}
          <div>
            <div className="hero-badge flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit border border-white/15 text-xs tracking-wide shadow-sm mb-6 transform-gpu will-change-[transform,opacity]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium text-white">Kashmir, India</span>
            </div>

            <h1 className="text-3xl font-heading md:text-5xl lg:text-6xl font-light leading-[1.2] tracking-[-0.04em] w-xl overflow-hidden">
              <span className="hero-title-line block transform-gpu will-change-transform">
                Make Your Next
              </span>
              <span className="hero-title-line block transform-gpu will-change-transform">
                journey Unforgettable
              </span>
            </h1>
          </div>

          {/* Bottom Description & Search */}
          <div className="md:mt-7 max-w-lg">
            <p className="hero-desc text-xs leading-[1.6] font-light text-white/70 sm:text-[15px] transform-gpu will-change-[transform,opacity] mb-6">
              Book your travel and transportation service with us and enjoy a
              hassle-free and memorable journey.
            </p>

            <div className="hero-search-wrapper transform-gpu will-change-[transform,opacity]">
              <Search value={searchValue} onChange={setSearchValue} />
            </div>
          </div>
        </div>
      </div>

      {/* About & Stats Section */}
      <div
        ref={aboutRef}
        className="mt-16 flex flex-col items-start gap-12 md:px-8 lg:flex-row"
      >
        {/* About Text */}
        <div className="w-full space-y-5 lg:w-[58.333%]">
          <span className="about-label block text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            About us
          </span>

          <h2
            ref={aboutTextRef}
            className="flex flex-wrap grayscale text-[30px]  font-medium leading-tight tracking-[-0.03em] sm:text-4xl"
          >
            {splitTextToSpans(aboutWords)}
          </h2>
        </div>

        {/* Stat Boxes */}
        <div className="flex w-full gap-3 sm:gap-4 lg:w-[41.667%]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group flex min-w-0 flex-1 flex-col justify-between rounded-sm p-5 transition-colors duration-300 sm:p-6"
            >
              <div className="mb-2 hidden items-start justify-between md:flex">
                <span className="text-xs font-medium text-gray-400">
                  0{index + 1}
                </span>

                <span className="h-2 w-2 rounded-full bg-blue-600 opacity-20 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div>
                <div className="inline-flex transition-colors duration-300">
                  <span
                    data-target={stat.target}
                    data-suffix={stat.suffix}
                    className="stat-number text-3xl font-normal tracking-tight text-gray-900 transition-colors duration-300 sm:text-3xl"
                  >
                    0{stat.suffix}
                  </span>
                </div>

                <span className="mt-3 block text-xs font-medium text-gray-500 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
