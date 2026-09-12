import React, { useRef } from "react";
import img from "../assets/images/kashmir.jpg";
import img1 from "../assets/images/masoorie.jpg";
import img2 from "../assets/images/goa.jpg";
import img3 from "../assets/images/beach.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  widthClass: string;
  imageObjectPosition: string;
}

const Service: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const path1Ref = useRef<SVGRectElement | null>(null);
  const path2Ref = useRef<SVGRectElement | null>(null);
  const path3Ref = useRef<SVGRectElement | null>(null);
  const path4Ref = useRef<SVGRectElement | null>(null);

  const pathRefs = [path1Ref, path2Ref, path3Ref, path4Ref];

  const services: ServiceItem[] = [
    {
      title: "Scenic Valleys",
      subtitle: "Kashmir",
      description:
        "Experience the paradise on earth with breathtaking mountain ranges and serene lakes.",
      image: img,
      widthClass: "lg:w-4/7",
      imageObjectPosition: "object-top",
    },
    {
      title: "Hill Stations",
      subtitle: "Mussoorie",
      description:
        "Escape to the Queen of Hills for misty green landscapes and colonial heritage.",
      image: img1,
      widthClass: "lg:w-3/7",
      imageObjectPosition: "object-center",
    },
    {
      title: "Coastal Escapes",
      subtitle: "Goa",
      description:
        "Unwind on golden sandy shores with vibrant culture and tranquil sunset views.",
      image: img2,
      widthClass: "lg:w-3/7",
      imageObjectPosition: "object-bottom",
    },
    {
      title: "Tropical Shores",
      subtitle: "Beaches",
      description:
        "Immerse yourself in crystal clear waters and ultimate seaside relaxation.",
      image: img3,
      widthClass: "lg:w-4/7",
      imageObjectPosition: "object-top",
    },
  ];

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      const corners = [
        "top-left",
        "top-right",
        "bottom-right",
        "bottom-left",
      ] as const;

      pathRefs.forEach((ref) => {
        const path = ref.current;
        if (!path) return;

        const totalLength = path.getTotalLength();
        const visibleLength = totalLength * 0.55;

        const randomCorner =
          corners[Math.floor(Math.random() * corners.length)];

        let initialOffset = totalLength;

        switch (randomCorner) {
          case "top-left":
            initialOffset = totalLength - visibleLength;
            break;

          case "top-right":
            initialOffset = totalLength - totalLength * 0.25 - visibleLength;
            break;

          case "bottom-right":
            initialOffset = totalLength - totalLength * 0.5 - visibleLength;
            break;

          case "bottom-left":
            initialOffset = totalLength - totalLength * 0.75 - visibleLength;
            break;
        }

        gsap.set(path, {
          strokeDasharray: `${visibleLength} ${totalLength}`,
          strokeDashoffset: totalLength,
        });

        gsap.to(path, {
          strokeDashoffset: initialOffset,
          duration: 2.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: path,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="
        md:px-8 px-4
        py-16
        bg-[var(--bg-main)]
        overflow-hidden
      "
    >
      <h2
        className="
          about-label
          block
          text-xs
          font-medium
          uppercase
          pb-8
          tracking-[0.2em]
          text-[var(--text-muted)]
        "
      >
        Our Services
      </h2>

      <div className="flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Card 1 */}
          <div
            className="
              flex flex-col
              w-full lg:w-4/7
              bg-[var(--bg-secondary)]
              p-4
              rounded-2xl
              border border-[var(--border-light)]
              relative
              overflow-hidden
            "
          >
            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              <rect
                ref={path1Ref}
                x="1.5"
                y="1.5"
                width="calc(100% - 3px)"
                height="calc(100% - 3px)"
                rx="16"
                ry="16"
                className="stroke-[var(--accent-primary)]"
                strokeWidth="2"
              />
            </svg>

            <div className="flex flex-col space-y-1.5 mb-4 px-2">
              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-widest
                  text-[var(--accent-primary)]
                "
              >
                {services[0].subtitle}
              </span>

              <h3
                className="
                  text-xl md:text-2xl
                  font-medium
                  tracking-tight
                  text-[var(--text-main)]
                "
              >
                {services[0].title}
              </h3>

              <p
                className="
                  text-xs md:text-sm
                  text-[var(--text-secondary)]
                  font-light
                  leading-relaxed
                "
              >
                {services[0].description}
              </p>
            </div>

            <div className="h-75 w-full rounded-xl overflow-hidden">
              <img
                src={services[0].image}
                className={`h-full w-full object-cover ${services[0].imageObjectPosition}`}
                alt={services[0].title}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
              flex flex-col
              w-full lg:w-3/7
              bg-[var(--bg-secondary)]
              p-4
              rounded-2xl
              border border-[var(--border-light)]
              relative
              overflow-hidden
            "
          >
            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              <rect
                ref={path2Ref}
                x="1.5"
                y="1.5"
                width="calc(100% - 3px)"
                height="calc(100% - 3px)"
                rx="16"
                ry="16"
                className="stroke-[var(--accent-primary)]"
                strokeWidth="2"
              />
            </svg>

            <div className="flex flex-col space-y-1.5 mb-4 px-2">
              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-widest
                  text-[var(--accent-primary)]
                "
              >
                {services[1].subtitle}
              </span>

              <h3
                className="
                  text-xl md:text-2xl
                  font-medium
                  tracking-tight
                  text-[var(--text-main)]
                "
              >
                {services[1].title}
              </h3>

              <p
                className="
                  text-xs md:text-sm
                  text-[var(--text-secondary)]
                  font-light
                  leading-relaxed
                "
              >
                {services[1].description}
              </p>
            </div>

            <div className="h-75 w-full rounded-xl overflow-hidden">
              <img
                src={services[1].image}
                className={`h-full w-full object-cover ${services[1].imageObjectPosition}`}
                alt={services[1].title}
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Card 3 */}
          <div
            className="
              flex flex-col
              w-full lg:w-3/7
              bg-[var(--bg-secondary)]
              p-4
              rounded-2xl
              border border-[var(--border-light)]
              relative
              overflow-hidden
            "
          >
            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              <rect
                ref={path3Ref}
                x="1.5"
                y="1.5"
                width="calc(100% - 3px)"
                height="calc(100% - 3px)"
                rx="16"
                ry="16"
                className="stroke-[var(--accent-primary)]"
                strokeWidth="2"
              />
            </svg>

            <div className="flex flex-col space-y-1.5 mb-4 px-2">
              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-widest
                  text-[var(--accent-primary)]
                "
              >
                {services[2].subtitle}
              </span>

              <h3
                className="
                  text-xl md:text-2xl
                  font-medium
                  tracking-tight
                  text-[var(--text-main)]
                "
              >
                {services[2].title}
              </h3>

              <p
                className="
                  text-xs md:text-sm
                  text-[var(--text-secondary)]
                  font-light
                  leading-relaxed
                "
              >
                {services[2].description}
              </p>
            </div>

            <div className="h-75 w-full rounded-xl overflow-hidden">
              <img
                src={services[2].image}
                className={`h-full w-full object-cover ${services[2].imageObjectPosition}`}
                alt={services[2].title}
              />
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="
              flex flex-col
              w-full lg:w-4/7
              bg-[var(--bg-secondary)]
              p-4
              rounded-2xl
              border border-[var(--border-light)]
              relative
              overflow-hidden
            "
          >
            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              <rect
                ref={path4Ref}
                x="1.5"
                y="1.5"
                width="calc(100% - 3px)"
                height="calc(100% - 3px)"
                rx="16"
                ry="16"
                className="stroke-[var(--accent-primary)]"
                strokeWidth="2"
              />
            </svg>

            <div className="flex flex-col space-y-1.5 mb-4 px-2">
              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-widest
                  text-[var(--accent-primary)]
                "
              >
                {services[3].subtitle}
              </span>

              <h3
                className="
                  text-xl md:text-2xl
                  font-medium
                  tracking-tight
                  text-[var(--text-main)]
                "
              >
                {services[3].title}
              </h3>

              <p
                className="
                  text-xs md:text-sm
                  text-[var(--text-secondary)]
                  font-light
                  leading-relaxed
                "
              >
                {services[3].description}
              </p>
            </div>

            <div className="h-75 w-full rounded-xl overflow-hidden">
              <img
                src={services[3].image}
                className={`h-full w-full object-cover ${services[3].imageObjectPosition}`}
                alt={services[3].title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
