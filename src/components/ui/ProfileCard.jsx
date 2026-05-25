import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

// Inject keyframes once
const KEYFRAMES_ID = 'pc-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
  const style = document.createElement('style');
  style.id = KEYFRAMES_ID;
  style.textContent = `
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  `;
  document.head.appendChild(style);
}

const ProfileCardComponent = ({
  avatarUrl = '<Placeholder for avatar URL>',
  backAvatarUrl,
  iconUrl = '<Placeholder for icon URL>',
  grainUrl = '<Placeholder for grain URL>',
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Javi A. Torres',
  title = 'Software Engineer',
  handle = 'javicodes',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isFlippedRef = useRef(false);
  isFlippedRef.current = isFlipped;

  const wrapRef = useRef(null);
  const shellRef = useRef(null);

  const enterTimerRef = useRef(null);
  const leaveRafRef = useRef(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x, y) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      // Invert horizontal tilt when flipped to match view orientation
      const finalCenterX = isFlippedRef.current ? -centerX : centerX;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(finalCenterX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`
      };

      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = ts => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x, y) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x, y) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, [enableTilt]);

  const getOffsets = (evt, el) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      shell.classList.add('active');
      shell.classList.add('entering');
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove('entering');
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  const handleDeviceOrientation = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;

      const centerX = shell.clientWidth / 2;
      const centerY = shell.clientHeight / 2;
      const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
      const y = clamp(
        centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        0,
        shell.clientHeight
      );

      tiltEngine.setTarget(x, y);
    },
    [tiltEngine, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return;

    const shell = shellRef.current;
    if (!shell) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;
    const deviceOrientationHandler = handleDeviceOrientation;

    shell.addEventListener('pointerenter', pointerEnterHandler);
    shell.addEventListener('pointermove', pointerMoveHandler);
    shell.addEventListener('pointerleave', pointerLeaveHandler);

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      const anyMotion = window.DeviceMotionEvent;
      if (anyMotion && typeof anyMotion.requestPermission === 'function') {
        anyMotion
          .requestPermission()
          .then(state => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };
    shell.addEventListener('click', handleClick);

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener('pointerenter', pointerEnterHandler);
      shell.removeEventListener('pointermove', pointerMoveHandler);
      shell.removeEventListener('pointerleave', pointerLeaveHandler);
      shell.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [
    enableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation
  ]);

  const cardRadius = '30px';

  const cardStyle = useMemo(
    () => ({
      '--icon': iconUrl ? `url(${iconUrl})` : 'none',
      '--grain': grainUrl ? `url(${grainUrl})` : 'none',
      '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
      '--behind-glow-color': behindGlowColor ?? 'rgba(125, 190, 255, 0.67)',
      '--behind-glow-size': behindGlowSize ?? '50%',
      '--pointer-x': '50%',
      '--pointer-y': '50%',
      '--pointer-from-center': '0',
      '--pointer-from-top': '0.5',
      '--pointer-from-left': '0.5',
      '--card-opacity': '0',
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
      '--background-x': '50%',
      '--background-y': '50%',
      '--card-radius': cardRadius,
      '--sunpillar-1': 'hsl(2, 100%, 73%)',
      '--sunpillar-2': 'hsl(53, 100%, 69%)',
      '--sunpillar-3': 'hsl(93, 100%, 69%)',
      '--sunpillar-4': 'hsl(176, 100%, 76%)',
      '--sunpillar-5': 'hsl(228, 100%, 74%)',
      '--sunpillar-6': 'hsl(283, 100%, 73%)',
      '--sunpillar-clr-1': 'var(--sunpillar-1)',
      '--sunpillar-clr-2': 'var(--sunpillar-2)',
      '--sunpillar-clr-3': 'var(--sunpillar-3)',
      '--sunpillar-clr-4': 'var(--sunpillar-4)',
      '--sunpillar-clr-5': 'var(--sunpillar-5)',
      '--sunpillar-clr-6': 'var(--sunpillar-6)'
    }),
    [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize, cardRadius]
  );

  const hasBack = !!backAvatarUrl;

  const handleCardClick = useCallback((e) => {
    if (!hasBack) return;
    // Don't flip if clicking contact button
    if (e.target.closest('.pc-btn')) return;

    const section = shellRef.current?.querySelector('.pc-section');
    if (section) {
      // Temporarily apply transition for the flip animation
      section.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      
      const nextFlipped = !isFlipped;
      setIsFlipped(nextFlipped);
      
      // Calculate new rotate values immediately based on the current hover variables
      const wrap = wrapRef.current;
      const rotateXVar = wrap.style.getPropertyValue('--rotate-x') || '0deg';
      const rotateYVar = wrap.style.getPropertyValue('--rotate-y') || '0deg';
      
      // Update transform with the new flip angle + hover tilt
      section.style.transform = `translateZ(0) rotateX(${rotateYVar}) rotateY(calc(${nextFlipped ? '180deg' : '0deg'} + ${rotateXVar}))`;
      
      // After transition finishes, reset the transition to 'none' so hover tilt remains responsive
      setTimeout(() => {
        if (shellRef.current?.classList.contains('active') && section) {
          section.style.transition = 'none';
        }
      }, 800);
    }
  }, [isFlipped, hasBack]);

  const handleContactClick = useCallback((e) => {
    // Prevent event from bubbling up to trigger the card flip
    e.stopPropagation();
    onContactClick?.();
  }, [onContactClick]);

  // Complex styles that require CSS variables and can't be done with Tailwind
  const shineStyle = {
    maskImage: 'var(--icon)',
    maskMode: 'luminance',
    maskRepeat: 'repeat',
    maskSize: '150%',
    maskPosition: 'top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x))',
    filter: 'brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5)',
    animation: 'pc-holo-bg 18s linear infinite',
    animationPlayState: 'running',
    mixBlendMode: 'color-dodge',
    '--space': '5%',
    '--angle': '-45deg',
    transform: 'translate3d(0, 0, 1px)',
    overflow: 'hidden',
    zIndex: 3,
    background: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `
      repeating-linear-gradient(
        0deg,
        var(--sunpillar-clr-1) calc(var(--space) * 1),
        var(--sunpillar-clr-2) calc(var(--space) * 2),
        var(--sunpillar-clr-3) calc(var(--space) * 3),
        var(--sunpillar-clr-4) calc(var(--space) * 4),
        var(--sunpillar-clr-5) calc(var(--space) * 5),
        var(--sunpillar-clr-6) calc(var(--space) * 6),
        var(--sunpillar-clr-1) calc(var(--space) * 7)
      ),
      repeating-linear-gradient(
        var(--angle),
        #0e152e 0%,
        hsl(180, 10%, 60%) 3.8%,
        hsl(180, 29%, 66%) 4.5%,
        hsl(180, 10%, 60%) 5.2%,
        #0e152e 10%,
        #0e152e 12%
      ),
      radial-gradient(
        farthest-corner circle at var(--pointer-x) var(--pointer-y),
        hsla(0, 0%, 0%, 0.1) 12%,
        hsla(0, 0%, 0%, 0.15) 20%,
        hsla(0, 0%, 0%, 0.25) 120%
      )
    `.replace(/\s+/g, ' '),
    gridArea: 'overlap',
    borderRadius: cardRadius,
    pointerEvents: 'none'
  };

  const glareStyle = {
    transform: 'translate3d(0, 0, 1.1px)',
    overflow: 'hidden',
    backgroundImage: `radial-gradient(
      farthest-corner circle at var(--pointer-x) var(--pointer-y),
      hsl(248, 25%, 80%) 12%,
      hsla(207, 40%, 30%, 0.8) 90%
    )`,
    mixBlendMode: 'overlay',
    filter: 'brightness(0.8) contrast(1.2)',
    zIndex: 4,
    gridArea: 'overlap',
    borderRadius: cardRadius,
    pointerEvents: 'none'
  };

  const renderCardFace = (imgUrl, isBack = false) => {
    return (
      <div className={`pc-inner pc-face ${isBack ? 'pc-back' : 'pc-front'}`}>
        {/* Shine layer */}
        <div style={shineStyle} />

        {/* Glare layer */}
        <div style={glareStyle} />

        {/* Avatar content */}
        <div className="pc-avatar-content">
          <img
            className="pc-avatar"
            src={imgUrl}
            alt={`${name || 'User'} avatar`}
            loading="lazy"
            onError={e => {
              e.target.style.display = 'none';
            }}
          />
          {showUserInfo && (
            <div className="pc-ui">
              <div className="pc-user-info">
                <div className="pc-mini-avatar-wrap">
                  <img
                    className="pc-mini-avatar"
                    src={miniAvatarUrl || imgUrl}
                    alt={`${name || 'User'} mini avatar`}
                    loading="lazy"
                    onError={e => {
                      e.target.style.opacity = '0.5';
                      e.target.src = imgUrl;
                    }}
                  />
                </div>
                <div className="pc-text-details">
                  <div className="pc-handle">@{handle}</div>
                  <div className="pc-status">{status}</div>
                </div>
              </div>
              <button
                className="pc-btn"
                onClick={handleContactClick}
                type="button"
                aria-label={`Contact ${name || 'user'}`}
              >
                {contactText}
              </button>
            </div>
          )}
        </div>

        {/* Details content */}
        <div className="pc-details-content">
          <div className="pc-title-wrap">
            <h3 className="pc-name">{name}</h3>
            <p className="pc-job-title">{title}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={wrapRef}
      className={`pc-wrap ${className}`.trim()}
      style={cardStyle}
    >
      <style>{`
        .pc-wrap {
          position: relative;
          touch-action: none;
          perspective: 1000px;
          transform: translate3d(0, 0, 0.1px);
        }
        .pc-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.2s ease-out;
          filter: blur(50px) saturate(1.1);
        }
        .pc-shell {
          position: relative;
          z-index: 1;
          cursor: ${hasBack ? 'pointer' : 'default'};
        }
        .pc-section {
          display: grid;
          position: relative;
          overflow: visible;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateZ(0) rotateX(0deg) rotateY(${isFlipped ? '180deg' : '0deg'});
          background: rgba(0, 0, 0, 0.9);
        }
        .pc-face {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: var(--card-radius);
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .pc-front {
          z-index: 2;
          transform: rotateY(0deg);
        }
        .pc-back {
          z-index: 1;
          transform: rotateY(180deg);
        }
        .pc-inner {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: var(--inner-gradient);
          background-color: rgba(0, 0, 0, 0.9);
          border-radius: var(--card-radius);
          display: grid;
          grid-template-areas: 'overlap';
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .pc-avatar-content {
          grid-area: overlap;
          overflow: visible;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(2px);
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          pointer-events: none;
        }
        .pc-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          will-change: transform;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          transform-origin: 50% 50%;
          transform: translate3d(0, 0, 0px) scale(1);
          border-radius: var(--card-radius);
        }
        .pc-shell:hover .pc-avatar,
        .pc-shell.active .pc-avatar {
          transition: transform 120ms ease-out;
          transform: translate3d(calc((var(--pointer-from-left) - 0.5) * 20px), calc((var(--pointer-from-top) - 0.5) * 20px), 40px) scale(1.04);
        }
        .pc-ui {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: none; /* Block pointer click events when hidden */
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 14px;
          --ui-inset: 20px;
          --ui-radius-bias: 6px;
          bottom: var(--ui-inset);
          left: var(--ui-inset);
          right: var(--ui-inset);
          border-radius: calc(max(0px, var(--card-radius) - var(--ui-inset) + var(--ui-radius-bias)));
          opacity: 0; /* Hidden by default */
          transform: translateY(12px) translate3d(0, 0, 0px);
          transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .pc-shell:hover .pc-ui,
        .pc-shell.active .pc-ui {
          opacity: 1;
          transform: translateY(0) translate3d(calc((var(--pointer-from-left) - 0.5) * 10px), calc((var(--pointer-from-top) - 0.5) * 10px), 95px);
          pointer-events: auto; /* Enable clicks on contact button when visible */
        }
        .pc-user-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pc-mini-avatar-wrap {
          border-radius: 9999px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          width: 48px;
          height: 48px;
        }
        .pc-mini-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }
        .pc-text-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }
        .pc-handle {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1;
        }
        .pc-status {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1;
        }
        .pc-btn {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.2s ease-out;
          background: transparent;
        }
        .pc-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
        }
        .pc-details-content {
          grid-area: overlap;
          max-height: 100%;
          overflow: hidden;
          text-align: center;
          position: relative;
          z-index: 5;
          pointer-events: none;
          mix-blend-mode: luminosity;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          transform: translate3d(0, 0, 0px);
        }
        .pc-shell:hover .pc-details-content,
        .pc-shell.active .pc-details-content {
          transition: transform 120ms ease-out;
          transform: translate3d(calc((var(--pointer-from-left) - 0.5) * -20px), calc((var(--pointer-from-top) - 0.5) * -20px), 70px);
        }
        .pc-title-wrap {
          width: 100%;
          position: absolute;
          display: flex;
          flex-direction: column;
          top: 3em;
        }
        .pc-name {
          font-weight: 600;
          margin: 0;
          font-size: min(5svh, 3em);
          background-image: linear-gradient(to bottom, #ffffff, #ea580c);
          background-size: 1em 1.5em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          display: block;
          pointer-events: auto;
        }
        .pc-job-title {
          font-family: var(--font-accent);
          font-style: italic;
          font-weight: 500;
          white-space: nowrap;
          margin: 0 auto;
          position: relative;
          top: -6px;
          font-size: 18px;
          background-image: linear-gradient(to bottom, #ffffff, #f97316);
          background-size: 1em 1.5em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          display: block;
          pointer-events: auto;
        }
      `}</style>
      
      {behindGlowEnabled && (
        <div
          className="pc-glow"
          style={{
            background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y), var(--behind-glow-color) 0%, transparent var(--behind-glow-size))`,
            opacity: 'calc(0.8 * var(--card-opacity))'
          }}
        />
      )}
      
      <div ref={shellRef} className="pc-shell" onClick={handleCardClick}>
        <section
          className="pc-section"
          style={{
            height: '80svh',
            maxHeight: '540px',
            aspectRatio: '0.718',
            borderRadius: cardRadius,
            backgroundBlendMode: 'color-dodge, normal, normal, normal'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transition = 'none';
            e.currentTarget.style.transform = `translateZ(0) rotateX(var(--rotate-y)) rotateY(calc(${isFlippedRef.current ? '180deg' : '0deg'} + var(--rotate-x)))`;
            wrapRef.current.style.setProperty('--card-opacity', '1');
          }}
          onMouseLeave={e => {
            const shell = shellRef.current;
            if (shell?.classList.contains('entering')) {
              e.currentTarget.style.transition = 'transform 180ms ease-out';
            } else {
              e.currentTarget.style.transition = 'transform 1s ease';
            }
            e.currentTarget.style.transform = `translateZ(0) rotateX(0deg) rotateY(${isFlippedRef.current ? '180deg' : '0deg'})`;
            wrapRef.current.style.setProperty('--card-opacity', '0');
          }}
        >
          {renderCardFace(avatarUrl, false)}
          {hasBack && renderCardFace(backAvatarUrl, true)}
        </section>
      </div>
    </div>
  );
};

export const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
