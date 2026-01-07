import { useEffect, useRef } from 'react';

/**
 * Hook para adicionar animações ao scroll
 * Usa Intersection Observer para melhor performance
 * 
 * @param {Object} options - Opções do Intersection Observer
 * @returns {Object} { ref, isVisible }
 * 
 * @example
 * const { ref, isVisible } = useScrollAnimation();
 * <div ref={ref} className={isVisible ? 'fade-in visible' : 'fade-in'} />
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = require('react').useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Para de observar após a animação
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
};

export default useScrollAnimation;
