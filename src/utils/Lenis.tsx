import { useEffect } from "react";
import Lenis from "lenis";

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      syncTouch: true,

      // Slightly faster scrolling
      wheelMultiplier: 1.1,
      touchMultiplier: 1.05,

      infinite: false,

      // Smoother easing
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
