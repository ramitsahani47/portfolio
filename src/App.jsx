import React, { useState, useEffect, useCallback, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SplashScreen } from './components/SplashScreen';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LazySection } from './components/LazySection';
import { IconCheck } from './components/Icons';

// Section Loaders for Prefetching & Code-Splitting
const loadAbout = () => import('./components/About');
const loadSkills = () => import('./components/Skills');
const loadExperience = () => import('./components/Experience');
const loadProjects = () => import('./components/Projects');
const loadContact = () => import('./components/Contact');
const loadFooter = () => import('./components/Footer');

// Code-Split Dynamic Components
const About = lazy(() => loadAbout().then(m => ({ default: m.About })));
const Skills = lazy(() => loadSkills().then(m => ({ default: m.Skills })));
const Experience = lazy(() => loadExperience().then(m => ({ default: m.Experience })));
const Projects = lazy(() => loadProjects().then(m => ({ default: m.Projects })));
const Contact = lazy(() => loadContact().then(m => ({ default: m.Contact })));
const Footer = lazy(() => loadFooter().then(m => ({ default: m.Footer })));

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  // Background Idle Prefetching for Non-Critical Sections
  useEffect(() => {
    const prefetchSections = () => {
      loadAbout();
      loadSkills();
      loadExperience();
      loadProjects();
      loadContact();
      loadFooter();
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(prefetchSections, { timeout: 3000 });
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timerId = setTimeout(prefetchSections, 2000);
      return () => clearTimeout(timerId);
    }
  }, []);

  // Throttled Scroll Listener using requestAnimationFrame for 60 FPS performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)) : 0;
          setScrollProgress(isNaN(progress) ? 0 : progress);

          // Active Section Detection
          const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
          const scrollPosition = window.scrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerNotification = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: 'var(--bg-dark)' }}>
      {/* Vercel Web Analytics Component */}
      <Analytics />

      {/* Animated Developer Terminal Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Top Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Dynamic Background Spotlight & Canvas Particles */}
      <BackgroundGlow />

      {/* Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section (Instant Loading) */}
        <Hero onNotify={triggerNotification} />

        {/* Below-the-fold sections progressive lazy loading */}
        <LazySection id="about" fallbackHeight="500px" title="About Section">
          <About />
        </LazySection>

        <LazySection id="skills" fallbackHeight="500px" title="Skills Section">
          <Skills />
        </LazySection>

        <LazySection id="experience" fallbackHeight="550px" title="Experience Section">
          <Experience />
        </LazySection>

        <LazySection id="projects" fallbackHeight="600px" title="Projects Section">
          <Projects />
        </LazySection>

        <LazySection id="contact" fallbackHeight="550px" title="Contact Section">
          <Contact onNotify={triggerNotification} />
        </LazySection>
      </main>

      {/* Footer Lazy Section */}
      <LazySection id="footer" fallbackHeight="150px" title="Footer">
        <Footer />
      </LazySection>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid var(--sky-accent)',
            borderRadius: '12px',
            padding: '14px 20px',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 30px rgba(56, 189, 248, 0.25)',
            backdropFilter: 'blur(16px)',
            animation: 'float 0.3s ease-out',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.925rem',
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--emerald-accent)',
            }}
          >
            <IconCheck size={14} />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
