import { useEffect } from "react";

declare global {
  interface Window {
    Lenis: any;
  }
}

export default function useLenis() {
  useEffect(() => {
    // Check if we're in a browser environment and Lenis is available
    if (typeof window === 'undefined' || !window.Lenis) {
      return;
    }

    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
}
