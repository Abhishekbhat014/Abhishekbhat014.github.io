import React, { useEffect, useRef } from 'react';

export const ScrollStarEffect = ({
  starCount = 100,
  baseSpeed = 0.05,
  className = '',
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Initialize stars
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        // Parallax depth/speed factor
        depth: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        // Glow effect
        glow: Math.random() > 0.8,
      });
    }
    starsRef.current = stars;

    // Track scroll velocity/delta
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      // Accumulate velocity with direction
      scrollVelocity += delta * baseSpeed;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Re-position stars that are out of bounds
      starsRef.current.forEach(star => {
        if (star.x > width) star.x = Math.random() * width;
        if (star.y > height) star.y = Math.random() * height;
      });
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Decelerate scroll velocity smoothly
      scrollVelocity *= 0.95;

      const starsList = starsRef.current;
      for (let i = 0; i < starsList.length; i++) {
        const star = starsList[i];

        // Move stars vertically relative to scroll velocity and depth (parallax)
        star.y -= scrollVelocity * star.depth;

        // Infinite wrap-around bounds
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        } else if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        // Draw star
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        
        if (star.glow) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount, baseSpeed]);

  return (
    <div
      ref={containerRef}
      className={`scroll-star-effect-container ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0, // Keep in the background
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default ScrollStarEffect;
