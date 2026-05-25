import React, { useState, useEffect, useRef } from 'react';

export const GooeyCursor = ({
  className = '',
  color = '#fff',
  size = 32,
  tailLength = 30,
  lag = 0.35,
  explosionFactor = 50,
  blendMode = 'difference',
  zIndex = 99999
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const elementRefs = useRef([]);
  const nodes = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const isHoveredRef = useRef(false);
  const hoverScale = useRef(1);

  // Initialize mouse position in center on mount
  useEffect(() => {
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }, []);

  // Check if fine pointer device (desktop)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Hide default cursor when active
  useEffect(() => {
    if (!isDesktop) return;
    document.body.classList.add('custom-cursor-active');
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isDesktop]);

  // Handle physics nodes initialization when tailLength changes
  useEffect(() => {
    if (!isDesktop) return;

    nodes.current = Array.from({ length: tailLength }, () => ({
      x: mouse.current.x,
      y: mouse.current.y,
      ox: 0,
      oy: 0
    }));
  }, [tailLength, isDesktop]);

  // Event handlers
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseDown = () => {
      nodes.current.forEach((node) => {
        const angle = Math.random() * Math.PI * 2;
        const force = Math.random() * explosionFactor;
        node.ox = Math.cos(angle) * force;
        node.oy = Math.sin(angle) * force;
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-card') ||
        target.closest('.transformed-card') ||
        target.closest('.filter-tab') ||
        target.closest('.theme-toggle-btn') ||
        target.closest('.mobile-menu-btn') ||
        target.closest('.edu-transformed-card') ||
        window.getComputedStyle(target).cursor === 'pointer';

      isHoveredRef.current = !!isInteractive;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop, explosionFactor]);

  // Physics animation loop
  useEffect(() => {
    if (!isDesktop) return;

    const updatePhysics = () => {
      if (nodes.current.length === 0) {
        rafId.current = requestAnimationFrame(updatePhysics);
        return;
      }

      // Smoothly interpolate hover scale
      const targetHoverScale = isHoveredRef.current ? 1.5 : 1;
      hoverScale.current += (targetHoverScale - hoverScale.current) * 0.15;

      // First node follows mouse
      const firstNode = nodes.current[0];
      firstNode.x += (mouse.current.x - firstNode.x) * (1 - lag);
      firstNode.y += (mouse.current.y - firstNode.y) * (1 - lag);
      firstNode.ox *= 0.85;
      firstNode.oy *= 0.85;

      const el0 = elementRefs.current[0];
      if (el0) {
        const finalX = firstNode.x + firstNode.ox;
        const finalY = firstNode.y + firstNode.oy;
        el0.style.transform = `translate3d(${finalX - size / 2}px, ${finalY - size / 2}px, 0) scale(${hoverScale.current})`;
      }

      // Subsequent nodes follow previous nodes
      for (let i = 1; i < tailLength; i++) {
        const node = nodes.current[i];
        const prevNode = nodes.current[i - 1];

        node.x += (prevNode.x - node.x) * (1 - lag);
        node.y += (prevNode.y - node.y) * (1 - lag);
        node.ox *= 0.85;
        node.oy *= 0.85;

        const el = elementRefs.current[i];
        if (el) {
          const finalX = node.x + node.ox;
          const finalY = node.y + node.oy;
          // Taper the tail size
          const scale = (1 - (i / tailLength) * 0.75) * hoverScale.current;
          el.style.transform = `translate3d(${finalX - size / 2}px, ${finalY - size / 2}px, 0) scale(${scale})`;
        }
      }

      rafId.current = requestAnimationFrame(updatePhysics);
    };

    rafId.current = requestAnimationFrame(updatePhysics);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isDesktop, size, tailLength, lag]);

  if (!isDesktop) return null;

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="gooey-cursor-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className={`gooey-cursor-container ${className}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex,
          mixBlendMode: blendMode,
          filter: "url('#gooey-cursor-filter')",
        }}
      >
        {Array.from({ length: tailLength }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (elementRefs.current[i] = el)}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: color,
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      <style>{`
        body.custom-cursor-active,
        body.custom-cursor-active * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default GooeyCursor;
