import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect when an element is visible in the viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isInViewport] - Ref to attach to element and visibility state
 */
function useInViewport(options = {}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasBeenInViewport, setHasBeenInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInViewport(inView);
        
        // Once it's been in viewport, keep it that way
        if (inView && !hasBeenInViewport) {
          setHasBeenInViewport(true);
        }
      },
      {
        threshold: 0.2,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasBeenInViewport, options]);

  // Return hasBeenInViewport so the effect stays once triggered
  return [ref, hasBeenInViewport || isInViewport];
}

export default useInViewport;
