import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particle elements
    for (let i = 0; i < 9; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${10 + i * 10}%`;
      particle.style.animationDelay = `${-i * 2}s`;
      container.appendChild(particle);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
