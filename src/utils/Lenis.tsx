import { useEffect } from "react";
import Lenis from "lenis";

const LenisScroll = () => {
  useEffect(() => {
    // Enable Lenis only on desktop (1024px and above)
    if (window.innerWidth < 1024) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1.1,
      touchMultiplier: 1,
      infinite: false,
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
