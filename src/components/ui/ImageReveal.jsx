import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { MoveUpRight as ArrowIcon } from "lucide-react";

const visualData = [
  {
    key: 1,
    url: "https://images.pexels.com/photos/9002742/pexels-photo-9002742.jpeg",
    label: "Designing Pinky Island: Creative SVG Layouts",
  },
  {
    key: 2,
    url: "https://images.pexels.com/photos/31622979/pexels-photo-31622979.jpeg",
    label: "The primarylw Model: Advanced CSS Layouts",
  },
  {
    key: 3,
    url: "https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg",
    label: "Inside Sigma Connect: Re-engineering WebSockets",
  },
  {
    key: 4,
    url: "https://images.pexels.com/photos/28168248/pexels-photo-28168248.jpeg",
    label: "Exploring Futuristic Gamma: Next-Gen WebGL Graphics",
  },
];

export const ImageReveal = () => {
  const [focusedItem, setFocusedItem] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const onHoverActivate = (item) => {
    setFocusedItem(item);
  };

  const onHoverDeactivate = () => {
    setFocusedItem(null);
  };

  return (
    <div
      className="image-reveal-wrapper"
      onMouseMove={onMouseTrack}
      onMouseLeave={onHoverDeactivate}
    >
      {visualData.map((item) => (
        <div
          key={item.key}
          className="reveal-row"
          onMouseEnter={() => onHoverActivate(item)}
        >
          {!isLargeScreen && (
            <img
              src={item.url}
              className="reveal-mobile-img"
              alt={item.label}
            />
          )}
          
          <h2
            className={`reveal-title ${
              focusedItem?.key === item.key ? "focused-title" : ""
            }`}
          >
            {item.label}
          </h2>
          
          <button
            aria-label={`View ${item.label}`}
            className={`reveal-btn ${
              focusedItem?.key === item.key ? "focused-btn" : ""
            }`}
          >
            <ArrowIcon className="arrow-icon" size={24} />
          </button>
          
          <div
            className={`reveal-underline ${
              focusedItem?.key === item.key ? "active-underline" : ""
            }`}
          />
        </div>
      ))}

      <AnimatePresence>
        {isLargeScreen && focusedItem && (
          <motion.img
            src={focusedItem.url}
            alt={focusedItem.label}
            className="reveal-floating-img"
            style={{
              left: smoothX,
              top: smoothY,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </AnimatePresence>

      <style>{`
        .image-reveal-wrapper {
          position: relative;
          margin: 3rem auto 0;
          width: 100%;
          max-width: 1000px;
          min-height: fit-content;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          overflow: visible;
        }
        .reveal-row {
          padding: 2.25rem 1rem;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          overflow: visible;
        }
        .reveal-title {
          font-family: var(--font-heading);
          text-transform: uppercase;
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 0;
          color: #a1a1aa;
          transition: color 0.3s ease, transform 0.3s ease;
          position: relative;
          z-index: 10;
          pointer-events: none;
          max-width: 80%;
          text-align: left;
        }
        .reveal-title.focused-title {
          color: #ffffff;
          transform: translateX(10px);
        }
        .reveal-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #a1a1aa;
          background: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
        }
        .reveal-btn.focused-btn {
          background: #ffffff;
          color: #09090b;
          border-color: #ffffff;
          transform: rotate(45deg);
        }
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        .reveal-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          width: 0;
          transition: width 0.3s ease;
          z-index: 5;
        }
        .reveal-underline.active-underline {
          width: 100%;
        }
        .reveal-floating-img {
          position: fixed;
          z-index: 100;
          object-fit: cover;
          width: 260px;
          height: 340px;
          border-radius: 12px;
          pointer-events: none;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .reveal-mobile-img {
          display: none;
        }
        
        @media (max-width: 768px) {
          .reveal-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
            padding: 1.5rem 0.5rem;
          }
          .reveal-mobile-img {
            display: block;
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .reveal-title {
            font-size: 1.25rem;
            max-width: 100%;
          }
          .reveal-title.focused-title {
            transform: none;
          }
          .reveal-btn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageReveal;
