import React, { useState, useEffect, useRef, Suspense } from 'react';
import { SectionSkeleton } from './Skeletons';

export const LazySection = ({ children, id, fallbackHeight = '400px', title = 'Loading...' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);

  // Listen for explicit section load events dispatched during navigation clicks
  useEffect(() => {
    const handleLoadEvent = () => {
      setIsLoaded(true);
      setIsRevealed(true);
    };

    window.addEventListener('load-all-sections', handleLoadEvent);
    window.addEventListener(`load-section-${id}`, handleLoadEvent);

    return () => {
      window.removeEventListener('load-all-sections', handleLoadEvent);
      window.removeEventListener(`load-section-${id}`, handleLoadEvent);
    };
  }, [id]);

  // Viewport IntersectionObserver for natural scrolling
  useEffect(() => {
    if (isLoaded) return;

    if (!('IntersectionObserver' in window)) {
      setIsLoaded(true);
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsLoaded(true);
          setTimeout(() => setIsRevealed(true), 50);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '200px 0px',
        threshold: 0.05,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`reveal-on-scroll ${isRevealed ? 'is-visible' : ''}`}
      style={{ minHeight: '100px' }}
    >
      {isLoaded ? (
        <Suspense fallback={<SectionSkeleton title={title} height={fallbackHeight} />}>
          {children}
        </Suspense>
      ) : (
        <SectionSkeleton title={title} height={fallbackHeight} />
      )}
    </div>
  );
};
