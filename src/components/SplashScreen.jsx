import React, { useState, useEffect, useRef } from 'react';
import { IconCode } from './Icons';

export const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const canvasRef = useRef(null);

  const tagline = 'Building High-Performance Mobile Applications';

  // Lock scroll during splash screen
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Progress Bar Timer & Typing Effect
  useEffect(() => {
    const duration = 2400; // Total display duration in ms before fade
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Typing effect start after name animates (approx 400ms)
    let charIndex = 0;
    const typingDelay = setTimeout(() => {
      const typingTimer = setInterval(() => {
        if (charIndex < tagline.length) {
          setTypedText(tagline.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingTimer);
        }
      }, 35);

      return () => clearInterval(typingTimer);
    }, 400);

    // Trigger Fade Out & Completion
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, duration);

    const completeTimer = setTimeout(() => {
      setIsMounted(false);
      if (onComplete) onComplete();
    }, duration + 500); // 500ms fade transition duration

    return () => {
      clearInterval(progressTimer);
      clearTimeout(typingDelay);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Floating Canvas Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = prefersReducedMotion ? 10 : 35;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(56, 189, 248, ' : 'rgba(139, 92, 246, ',
      alpha: Math.random() * 0.5 + 0.25,
      speedY: -(Math.random() * 0.7 + 0.3),
      speedX: (Math.random() - 0.5) * 0.4,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-label="Loading Ramit Sahani Portfolio"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#07090e',
        opacity: isFading ? 0 : 1,
        transform: isFading ? 'scale(1.02)' : 'scale(1)',
        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isFading ? 'none' : 'auto',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      {/* Background Animated Gradient Aura */}
      <div className="splash-bg-gradient" />

      {/* Canvas Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main Glassmorphic Card with Soft Blue Glow */}
      <div className="splash-card">
        {/* Animated Brand Logo Icon */}
        <div className="splash-logo-wrapper">
          <div className="splash-logo-pulse-ring" />
          <div className="splash-logo-box">
            <IconCode size={36} />
          </div>
        </div>

        {/* Developer Name */}
        <h1 className="splash-name">
          Ramit <span className="splash-name-highlight">Sahani</span>
        </h1>

        {/* Subtitle / Role */}
        <div className="splash-subtitle">React Native Developer</div>

        {/* Tagline with Typing Animation */}
        <div className="splash-tagline">
          <span>{typedText}</span>
          <span className="splash-cursor">|</span>
        </div>

        {/* Bottom Loading Progress Indicator */}
        <div className="splash-loader-container">
          <div className="splash-loader-header">
            <span>INITIALIZING EXPERIENCE</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>{Math.min(100, Math.round(progress))}%</span>
          </div>

          <div className="splash-progress-track">
            <div
              className="splash-progress-fill"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Responsive Styles & GPU Keyframe Animations */}
      <style>{`
        .splash-bg-gradient {
          position: absolute;
          inset: -50%;
          background: radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.12) 0%, rgba(139, 92, 246, 0.08) 35%, rgba(7, 9, 14, 0.95) 70%);
          animation: splashGradientRotate 12s linear infinite;
          pointer-events: none;
        }

        @keyframes splashGradientRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .splash-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 480px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 24px;
          padding: clamp(28px, 6vw, 42px) clamp(20px, 5vw, 36px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 0 50px rgba(56, 189, 248, 0.25), 0 20px 40px rgba(0, 0, 0, 0.6);
          animation: splashCardAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes splashCardAppear {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .splash-logo-wrapper {
          position: relative;
          width: 72px;
          height: 72px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .splash-logo-pulse-ring {
          position: absolute;
          inset: -6px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6));
          filter: blur(10px);
          opacity: 0.7;
          animation: splashPulseGlow 2.5s ease-in-out infinite;
        }

        @keyframes splashPulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.08); }
        }

        .splash-logo-box {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9));
          border: 1px solid rgba(56, 189, 248, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sky-accent);
          box-shadow: inset 0 0 15px rgba(56, 189, 248, 0.2);
          animation: splashLogoScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes splashLogoScale {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .splash-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(1.75rem, 4vw, 2.3rem);
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 6px;
          animation: splashSlideUp 0.6s ease-out 0.15s both;
        }

        .splash-name-highlight {
          color: var(--sky-accent);
          background: linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .splash-subtitle {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(0.95rem, 2.2vw, 1.1rem);
          color: var(--sky-accent);
          margin-bottom: 12px;
          letter-spacing: 0.02em;
          animation: splashSlideUp 0.6s ease-out 0.25s both;
        }

        .splash-tagline {
          font-family: var(--font-mono);
          font-size: clamp(0.8rem, 1.8vw, 0.9rem);
          color: var(--text-secondary);
          min-height: 28px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: splashSlideUp 0.6s ease-out 0.35s both;
        }

        .splash-cursor {
          color: var(--sky-accent);
          margin-left: 2px;
          animation: splashBlink 0.8s infinite;
          font-weight: 700;
        }

        @keyframes splashBlink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes splashSlideUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .splash-loader-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          animation: splashSlideUp 0.6s ease-out 0.45s both;
        }

        .splash-loader-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.725rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.08em;
          font-weight: 600;
        }

        .splash-progress-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .splash-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #38bdf8 0%, #06b6d4 50%, #8b5cf6 100%);
          border-radius: 9999px;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.8);
          transition: width 0.03s linear;
        }

        @media (prefers-reduced-motion: reduce) {
          .splash-bg-gradient,
          .splash-logo-pulse-ring,
          .splash-card,
          .splash-name,
          .splash-subtitle,
          .splash-tagline,
          .splash-loader-container {
            animation: none !important;
          }
          .splash-card {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};
