import React, { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '', style = {} }) => (
  <div
    className={`scroll-stack-card ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      position: 'relative',
      width: '100%',
      minHeight: '280px',
      marginTop: '2rem',
      marginBottom: '2rem',
      padding: '0', // Keep padding 0 because project-card already handles padding!
      borderRadius: '24px',
      boxSizing: 'border-box',
      transformOrigin: 'top center',
      willChange: 'transform, filter',
      ...style
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 60,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '15%',
  scaleEndPosition = '5%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true, // We default to true because the main portfolio scrolls the window!
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const offsetsCacheRef = useRef({
    cardOffsets: [],
    endElementOffset: 0,
    containerHeight: 0,
    stackPositionPx: 0,
    scaleEndPositionPx: 0,
    endElement: null
  });

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    element => {
      if (useWindowScroll) {
        let top = 0;
        let el = element;
        while (el) {
          top += el.offsetTop;
          el = el.offsetParent;
        }
        return top;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCachedOffsets = useCallback(() => {
    if (!cardsRef.current.length) return;

    const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current?.clientHeight || 0;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementOffset = endElement ? getElementOffset(endElement) : 0;

    const cardOffsets = cardsRef.current.map(card => {
      if (!card) return 0;
      return getElementOffset(card);
    });

    offsetsCacheRef.current = {
      cardOffsets,
      endElementOffset,
      containerHeight,
      stackPositionPx,
      scaleEndPositionPx,
      endElement
    };
  }, [useWindowScroll, stackPosition, scaleEndPosition, getElementOffset, parsePercentage]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop } = getScrollData();
    const currentCache = offsetsCacheRef.current;

    // Initialize cache if empty
    if (currentCache.cardOffsets.length === 0) {
      updateCachedOffsets();
    }

    const currentCardOffsets = currentCache.cardOffsets;
    const currentEndElementOffset = currentCache.endElementOffset;
    const currentContainerHeight = currentCache.containerHeight;
    const currentStackPositionPx = currentCache.stackPositionPx;
    const currentScaleEndPositionPx = currentCache.scaleEndPositionPx;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = currentCardOffsets[i] || 0;
      const triggerStart = cardTop - currentStackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - currentScaleEndPositionPx;
      const pinStart = cardTop - currentStackPositionPx - itemStackDistance * i;
      const pinEnd = currentEndElementOffset - currentContainerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = currentCardOffsets[j] || 0;
          const jTriggerStart = jCardTop - currentStackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + currentStackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + currentStackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    getScrollData,
    updateCachedOffsets
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return null;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return null;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    updateCachedOffsets();

    setupLenis();

    updateCardTransforms();

    const handleResize = () => {
      updateCachedOffsets();
      updateCardTransforms();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (useWindowScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    updateCachedOffsets,
    handleScroll,
    React.Children.toArray(children).map(child => child.key).join(',')
  ]);

  const containerStyles = useWindowScroll
    ? {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        position: 'relative',
        width: '100%'
      }
    : {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position',
        position: 'relative',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'visible'
      };

  const containerClassName = className.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner" style={{ paddingTop: '5vh', paddingBottom: '25rem', minHeight: '100vh', width: '100%' }}>
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end" style={{ width: '100%', height: '1px' }} />
      </div>
    </div>
  );
};

export default ScrollStack;
