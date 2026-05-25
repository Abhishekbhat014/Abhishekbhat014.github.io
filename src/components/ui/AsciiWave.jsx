import React, { useRef, useEffect } from "react";

export const AsciiWave = ({
  className = "",
  color = "#f97316", // Brand Orange
  speed = 1
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = null;
    let time = 0;
    let isVisible = false;

    const resize = () => {
      if (!container || !canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    // ASCII Characters sorted by density (light to dark)
    const chars = " .:+x*#".split("");
    const fontSize = 12;
    const columnWidth = 10;

    const draw = () => {
      if (!isVisible) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = color;

      const columns = Math.ceil(width / columnWidth);
      const rows = Math.ceil(height / fontSize);

      // Fire Logic: Pure Vertical Ascent
      for (let x = 0; x < columns; x++) {
        // Amplitude modulation only (Standing Wave)
        const shapeBase = Math.sin(x * 0.1) * 0.6 + Math.cos(x * 0.25) * 0.4;

        // Breath: Global pulsing
        const breath = Math.sin(time * 0.002 * speed) * 0.1;

        // Flicker: High frequency jitter
        const flicker = Math.sin(time * 0.008 * speed + x * 100) * 0.05;

        // Height calculation
        const noise = shapeBase + breath + flicker;
        const columnHeightNormal = Math.max(0.15, (noise + 1) / 2 * 0.6 + 0.15);
        const activeRows = Math.floor(columnHeightNormal * rows);

        for (let y = rows - 1; y > rows - activeRows; y--) {
          const flowShift = time * 0.005 * speed;

          // Independent column noise
          const charNoise = Math.sin((y * 0.2) - flowShift + x * 10);

          // Top fade
          const distFromTop = (y - (rows - activeRows));
          const fade = Math.min(1, distFromTop / 6);

          // Char selection
          const normalizedNoise = (charNoise + 1) / 2;
          const charIndex = Math.floor(normalizedNoise * chars.length);
          const char = chars[Math.min(charIndex, chars.length - 1)];

          const posX = x * columnWidth;
          const posY = y * fontSize;

          // Glitch dropouts (holes in the flame)
          if (Math.random() > 0.95) continue;

          ctx.globalAlpha = fade;
          ctx.fillText(char, posX, posY);
        }
      }

      ctx.globalAlpha = 1.0;
      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible) {
          cancelAnimationFrame(animationId);
          animationId = requestAnimationFrame(draw);
        } else if (!isVisible && wasVisible) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      },
      { threshold: 0.01 }
    );

    intersectionObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [color, speed]);

  return (
    <div ref={containerRef} className={`ascii-wave-container ${className}`}>
      <canvas ref={canvasRef} className="ascii-wave-canvas" />
      
      <style>{`
        .ascii-wave-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .ascii-wave-canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default AsciiWave;
