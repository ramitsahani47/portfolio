import React, { useState, useEffect, useCallback, memo } from 'react';
import { IconCode, IconArrowUp, IconHeart, IconClock } from './Icons';
import { scrollToSection } from '../utils/navigation';

export const Footer = memo(() => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { timeZoneName: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = useCallback(() => {
    scrollToSection('home');
  }, []);

  return (
    <footer
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'rgba(7, 9, 14, 0.95)',
        padding: '60px 24px 40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Top Footer Row */}
        <div className="footer-top-row">
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--sky-accent)',
                flexShrink: 0,
              }}
            >
              <IconCode size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem' }}>
                Ramit Sahani
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                React Native Developer • 3+ Years Professional Experience
              </div>
            </div>
          </div>

          {/* Real-time Clock */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--glass-border)',
              fontSize: '0.825rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--sky-accent)',
            }}
          >
            <IconClock size={14} />
            <span>Local Time: {timeString}</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <span>Back to Top</span>
            <IconArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="footer-bottom-row">
          <div>
            © 2026 Ramit Sahani. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
            <span>Built with React 19, Vite & Dark Glassmorphism</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-top-row, .footer-bottom-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .footer-bottom-row {
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        @media (max-width: 640px) {
          .footer-top-row, .footer-bottom-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
});
