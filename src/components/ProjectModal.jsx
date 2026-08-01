import React, { useEffect, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import {
  IconX,
  IconExternalLink,
  IconGithub,
  IconCheck,
  IconZap,
  IconLayers,
  IconServer,
  IconShield,
  IconSmartphone,
  IconRocket
} from './Icons';

export const ProjectModal = memo(({ project, onClose }) => {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (project) {
      // Lock body scroll while modal is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Auto-scroll modal card content to top
      if (cardRef.current) {
        cardRef.current.scrollTop = 0;
      }

      // ESC Key Listener to Close Modal
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  const modalContent = (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(7, 9, 14, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 4vw, 32px)',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        animation: 'modalBackdropFade 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
      onClick={onClose}
    >
      <div
        ref={cardRef}
        className="glass-panel modal-card-content"
        style={{
          maxWidth: '820px',
          width: '100%',
          maxHeight: 'calc(100vh - 64px)',
          overflowY: 'auto',
          margin: 'auto',
          padding: 'clamp(20px, 4vw, 36px)',
          position: 'relative',
          background: 'rgba(15, 23, 42, 0.98)',
          border: '1px solid rgba(56, 189, 248, 0.45)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.25)',
          borderRadius: '20px',
          animation: 'modalCardScale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}
          aria-label="Close modal dialog"
        >
          <IconX size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px', paddingRight: '48px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--sky-accent)',
                fontWeight: 600,
              }}
            >
              PROJECT OVERVIEW & DETAILS
            </span>
            {project.achievement && (
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '3px 10px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 700 }}>
                {project.achievement}
              </span>
            )}
          </div>

          <h2 id="modal-project-title" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.1rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', marginTop: '6px', lineHeight: 1.5 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '0.825rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 600 }}>
            Tech Stack Utilized:
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.78rem',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: 'var(--sky-accent)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div style={{ background: 'rgba(7, 9, 14, 0.6)', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--sky-accent)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconLayers size={18} />
            <span>Key Implemented Features</span>
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '10px' }}>
            {project.features.map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <IconCheck size={16} style={{ color: 'var(--emerald-accent)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Implementing (Learning) Section */}
        {project.currentlyImplementing && (
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.3)', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--violet-accent)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconRocket size={18} />
              <span>Currently Implementing (Learning Phase):</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.currentlyImplementing.map((item, idx) => (
                <span key={idx} style={{ fontSize: '0.78rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(139, 92, 246, 0.2)', color: 'var(--violet-accent)', fontFamily: 'var(--font-mono)' }}>
                  ⚡ {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Topology */}
        <div style={{ background: 'rgba(10, 15, 26, 0.8)', padding: '16px 18px', borderRadius: '12px', border: '1px solid var(--glass-border)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', overflowX: 'auto' }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: '6px' }}>// Component Architecture Flow</div>
          <div style={{ color: '#38bdf8', wordBreak: 'break-word' }}>{project.topology}</div>
        </div>
      </div>

      {/* Embedded Animations for Modal Backdrop and Card */}
      <style>{`
        @keyframes modalBackdropFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes modalCardScale {
          0% { opacity: 0; transform: scale(0.94) translateY(16px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
});
