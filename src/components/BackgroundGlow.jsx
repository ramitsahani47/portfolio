import React, { useEffect, useState, memo } from 'react';

export const BackgroundGlow = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          // Parallax offset on desktop
          if (window.innerWidth > 768) {
            setParallaxOffset({
              x: (e.clientX - window.innerWidth / 2) * 0.025,
              y: (e.clientY - window.innerHeight / 2) * 0.025,
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y - 250,
          left: mousePosition.x - 250,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)',
          borderRadius: '50%',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
        }}
      />

      {/* Top Right Cyan Ambient Aura with Parallax */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 75%)',
          filter: 'blur(80px)',
          transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Middle Left Violet Ambient Aura with Parallax */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '-10%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(99, 102, 241, 0.03) 50%, transparent 75%)',
          filter: 'blur(100px)',
          transform: `translate3d(${-parallaxOffset.x * 1.2}px, ${-parallaxOffset.y * 1.2}px, 0)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Bottom Right Emerald Glow with Parallax */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          transform: `translate3d(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px, 0)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Subgrid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }}
      />
    </div>
  );
});
