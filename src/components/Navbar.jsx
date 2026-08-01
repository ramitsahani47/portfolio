import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { IconMenu, IconX, IconCode, IconDownload, IconSend } from './Icons';
import { scrollToSection } from '../utils/navigation';

export const Navbar = memo(({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const handleNavClick = useCallback((id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxWidth: '100vw',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '10px 0' : '16px 0',
        animation: 'navSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        boxSizing: 'border-box',
      }}
      className={scrolled ? 'glass-nav' : ''}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(12px, 4vw, 24px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(139, 92, 246, 0.2))',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--sky-accent)',
              flexShrink: 0,
            }}
          >
            <IconCode size={20} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
              Ramit <span style={{ color: 'var(--sky-accent)' }}>Sahani</span>
            </div>
            <div className="nav-subtitle" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
              React Native Developer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            padding: '4px 8px',
            backdropFilter: 'blur(12px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(139, 92, 246, 0.15))' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                  color: isActive ? 'var(--sky-accent)' : 'var(--text-secondary)',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-actions">
          <div className="badge-status">
            <span className="status-dot"></span>
            <span>Available for Hire</span>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.875rem' }}
          >
            <IconSend size={16} />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button - Always Anchored & Visible */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            padding: '8px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'none',
            flexShrink: 0,
            minWidth: '40px',
            minHeight: '40px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <IconX size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            width: '100%',
            maxWidth: '100vw',
            background: 'rgba(7, 9, 14, 0.96)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '20px clamp(14px, 4vw, 24px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
            boxSizing: 'border-box',
            overflowX: 'hidden',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background: activeSection === link.id ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                border: activeSection === link.id ? '1px solid rgba(56, 189, 248, 0.25)' : 'none',
                color: activeSection === link.id ? 'var(--sky-accent)' : 'var(--text-primary)',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ marginTop: '10px', paddingTop: '14px', borderTop: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="badge-status" style={{ justifyContent: 'center' }}>
              <span className="status-dot"></span>
              <span>Available for Hire</span>
            </div>
            <button onClick={() => handleNavClick('contact')} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <IconSend size={18} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Navbar */}
      <style>{`
        @media (max-width: 960px) {
          .desktop-nav, .desktop-actions { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (max-width: 420px) {
          .nav-subtitle { display: none !important; }
        }
      `}</style>
    </header>
  );
});
