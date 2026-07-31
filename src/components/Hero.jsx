import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconDownload,
  IconSparkles,
  IconZap,
  IconSend,
  IconArrowDown
} from './Icons';
import { scrollToSection } from '../utils/navigation';

export const Hero = memo(({ onNotify }) => {
  const roles = useMemo(
    () => [
      'React Native Developer',
      'Cross-Platform Mobile Engineer',
      '3+ Years Professional Experience',
      'Node.js & PostgreSQL Backend'
    ],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('mobile');
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [downloading, setDownloading] = useState(false);
  const [imageSrc, setImageSrc] = useState('/assets/images/hero_portrait.png');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const handleDownloadResume = useCallback(async (e) => {
    try {
      setDownloading(true);
      const resumeUrl = '/assets/resume/Ramit_Sahani_Resume.pdf';

      const response = await fetch(resumeUrl, { method: 'HEAD' });
      if (!response.ok) {
        e.preventDefault();
        onNotify('Resume file is being updated. Please contact ramitsahani47@gmail.com');
        setDownloading(false);
        return;
      }

      onNotify('Downloading Ramit_Sahani_Resume.pdf...');
      setTimeout(() => setDownloading(false), 1200);
    } catch (err) {
      e.preventDefault();
      onNotify('Resume file is being updated. Please contact ramitsahani47@gmail.com');
      setDownloading(false);
    }
  }, [onNotify]);

  const handleRunTerminal = useCallback(() => {
    setTerminalRunning(true);
    setTerminalLogs(['$ npx react-native run-android --mode=release']);
    
    setTimeout(() => {
      setTerminalLogs((prev) => [...prev, '✔ Bundling Hermes JS Engine for Ramit Sahani Apps...']);
    }, 400);

    setTimeout(() => {
      setTerminalLogs((prev) => [...prev, '🔥 Initializing Firebase Cloud Messaging & Redux Toolkit Store']);
    }, 800);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        '🚀 Build Success! Target: Eenadu News App (1M+ Play Store Downloads)',
        '✅ Target: Hyderabad, India | FPS: 60fps | Status: Production Ready'
      ]);
      setTerminalRunning(false);
    }, 1400);
  }, []);

  const handleImageError = useCallback(() => {
    if (imageSrc === '/assets/images/hero_portrait.png') {
      setImageSrc('/assets/images/hero_portrait.jpg');
    } else if (imageSrc === '/assets/images/hero_portrait.jpg') {
      setImageSrc('/assets/images/hero_portrait.jpeg');
    } else {
      setImageSrc(null); // Fallback to SVG
    }
  }, [imageSrc]);

  const scrollToAbout = useCallback((e) => {
    e.preventDefault();
    scrollToSection('about');
  }, []);

  return (
    <section id="home" className="section-container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="hero-grid">
        {/* Left Column: Bio & Name & CTA */}
        <div className="hero-left-content">
          <div className="section-tag hero-stagger-1" style={{ marginBottom: '16px' }}>
            <IconSparkles size={16} />
            <span>REACT NATIVE DEVELOPER • 3+ YEARS EXPERIENCE</span>
          </div>

          <h1 className="hero-stagger-2" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px' }}>
            Hi, I'm <span className="gradient-text">Ramit Sahani</span>
          </h1>

          <div
            className="hero-stagger-3"
            style={{
              minHeight: '40px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
              fontWeight: 600,
              color: 'var(--sky-accent)',
              marginBottom: '20px',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.4,
            }}
          >
            <span>&gt; {displayText}</span>
            <span style={{ animation: 'pulseGlow 1s infinite', marginLeft: '4px' }}>|</span>
          </div>

          <p className="hero-stagger-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', fontWeight: 600, lineHeight: 1.5, marginBottom: '16px' }}>
            Building scalable, high-performance cross-platform mobile applications using React Native.
          </p>

          <p className="hero-stagger-4" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.925rem, 1.8vw, 1rem)', lineHeight: 1.7, marginBottom: '32px', wordBreak: 'break-word' }}>
            React Native Developer with <strong>3+ Years of Professional Experience</strong> based in <strong>Hyderabad, Telangana, India</strong>. Specialized in building live mobile applications (including the <strong>Eenadu News App with 1M+ Play Store Downloads</strong>) and Node.js PostgreSQL backend REST APIs.
          </p>

          {/* Action CTA Buttons */}
          <div className="hero-stagger-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
            <a
              href="/assets/resume/Ramit_Sahani_Resume.pdf"
              download="Ramit_Sahani_Resume.pdf"
              onClick={handleDownloadResume}
              className="btn-primary"
              style={{
                opacity: downloading ? 0.85 : 1,
                transform: downloading ? 'scale(0.98)' : undefined,
                transition: 'all 0.25s ease',
              }}
            >
              <IconDownload size={18} />
              <span>{downloading ? 'Downloading...' : 'Download Resume'}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn-secondary"
            >
              <IconSend size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              CONNECT:
            </span>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://github.com/ramitsahani47"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                className="glass-panel-glow"
                title="GitHub: ramitsahani47"
              >
                <IconGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/ramit-sahani"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                className="glass-panel-glow"
                title="LinkedIn: ramit-sahani"
              >
                <IconLinkedin size={20} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ramitsahani47@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Ramit,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noreferrer"
                aria-label="Open Gmail compose to send an email to Ramit Sahani"
                title="Open Gmail Compose: ramitsahani47@gmail.com"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
                className="glass-panel-glow"
              >
                <IconMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Circular Glowing Profile Avatar + Code Editor Below */}
        <div className="hero-right-container">
          {/* Top: Circular Profile Photo with Glowing Cyan Ring */}
          <div className="hero-circle-avatar-wrapper hero-stagger-6">
            <div className="circle-avatar-container">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Ramit Sahani"
                  onError={handleImageError}
                  className="circle-avatar-img"
                  loading="eager"
                  decoding="async"
                  width="220"
                  height="220"
                />
              ) : (
                <svg
                  viewBox="0 0 200 200"
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                >
                  <defs>
                    <linearGradient id="avatarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" fill="#0b1324" />
                  <circle cx="100" cy="75" r="42" fill="url(#avatarGlow)" opacity="0.85" />
                  <path d="M 30 185 C 30 135, 60 120, 100 120 C 140 120, 170 135, 170 185 Z" fill="url(#avatarGlow)" opacity="0.85" />
                </svg>
              )}

              {/* Glowing Cyan Status Indicator Dot */}
              <div className="circle-status-dot" />
            </div>
          </div>

          {/* Bottom: Supporting Developer.ts Code Editor Card */}
          <div
            className="glass-panel hero-code-editor hero-stagger-7"
            style={{
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '16px',
            }}
          >
            {/* Window Bar */}
            <div
              style={{
                background: 'rgba(10, 15, 26, 0.9)',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  onClick={() => setActiveTab('mobile')}
                  style={{
                    background: activeTab === 'mobile' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    color: activeTab === 'mobile' ? 'var(--sky-accent)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  developer.ts
                </button>
                <button
                  onClick={() => setActiveTab('backend')}
                  style={{
                    background: activeTab === 'backend' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    color: activeTab === 'backend' ? 'var(--sky-accent)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  api.controller.ts
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  style={{
                    background: activeTab === 'terminal' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    color: activeTab === 'terminal' ? 'var(--sky-accent)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  metro
                </button>
              </div>

              <button
                onClick={handleRunTerminal}
                disabled={terminalRunning}
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--emerald-accent)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <IconZap size={13} />
                <span>{terminalRunning ? 'Building...' : 'Run App'}</span>
              </button>
            </div>

            {/* Code Content */}
            <div
              style={{
                padding: '16px 20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                lineHeight: 1.6,
                minHeight: '200px',
                background: 'rgba(11, 15, 25, 0.9)',
                overflowX: 'auto',
              }}
            >
              {activeTab === 'mobile' && (
                <div>
                  <div style={{ color: 'var(--text-muted)' }}>// Developer Profile Definition</div>
                  <div>
                    <span style={{ color: '#f43f5e' }}>interface</span> <span style={{ color: '#38bdf8' }}>DeveloperProfile</span> &#123;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    name: <span style={{ color: '#10b981' }}>'Ramit Sahani'</span>;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    role: <span style={{ color: '#10b981' }}>'React Native Developer'</span>;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    experience: <span style={{ color: '#10b981' }}>'3+ Years Professional'</span>;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    location: <span style={{ color: '#10b981' }}>'Hyderabad, Telangana, India'</span>;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    email: <span style={{ color: '#10b981' }}>'ramitsahani47@gmail.com'</span>;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    phone: <span style={{ color: '#10b981' }}>'+91 76679 72667'</span>;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    skills: [<span style={{ color: '#10b981' }}>'React Native'</span>, <span style={{ color: '#10b981' }}>'TypeScript'</span>, <span style={{ color: '#10b981' }}>'Node.js'</span>, <span style={{ color: '#10b981' }}>'PostgreSQL'</span>];
                  </div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === 'backend' && (
                <div>
                  <div style={{ color: 'var(--text-muted)' }}>// Express + Node.js Layered REST Controller</div>
                  <div>
                    <span style={{ color: '#f43f5e' }}>export const</span> <span style={{ color: '#38bdf8' }}>getTransactions</span> = <span style={{ color: '#f43f5e' }}>async</span> (req, res) =&gt; &#123;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    <span style={{ color: '#f43f5e' }}>const</span> data = <span style={{ color: '#f43f5e' }}>await</span> expenseService.findAll(req.query);
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    <span style={{ color: '#8b5cf6' }}>res</span>.json(&#123; success: <span style={{ color: '#8b5cf6' }}>true</span>, data &#125;);
                  </div>
                  <div>&#125;;</div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div>
                  <div style={{ color: 'var(--text-muted)' }}>// Metro Execution Logs</div>
                  <div style={{ color: '#10b981' }}>$ npx react-native start --reset-cache</div>
                  <div style={{ color: 'var(--text-secondary)' }}>Bundler active on port 8081</div>
                  {terminalLogs.map((log, i) => (
                    <div key={i} style={{ color: log.startsWith('✔') || log.startsWith('🚀') ? '#38bdf8' : '#e2e8f0', marginTop: '4px' }}>
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginTop: '48px',
        }}
      >
        {[
          { metric: '3+ Years', label: 'Professional React Native Experience', color: 'var(--sky-accent)' },
          { metric: '1M+', label: 'Eenadu News App Downloads', color: 'var(--cyan-accent)' },
          { metric: 'Hyderabad', label: 'Telangana, India Base', color: 'var(--violet-accent)' },
          { metric: 'Full-Stack', label: 'React Native & Node.js PostgreSQL', color: 'var(--emerald-accent)' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-glow"
            style={{ padding: '20px 16px', textAlign: 'center' }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: 800,
                color: stat.color,
                marginBottom: '4px',
              }}
            >
              {stat.metric}
            </div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Modern Animated Scroll Down Indicator */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <a href="#about" onClick={scrollToAbout} className="scroll-indicator-container" aria-label="Scroll to About section">
          <div className="mouse-icon">
            <div className="mouse-wheel" />
          </div>
          <div className="scroll-arrow">
            <IconArrowDown size={18} />
          </div>
        </a>
      </div>

      {/* Inline Styles */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-left-content p {
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .hero-right-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .hero-circle-avatar-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .circle-avatar-container {
          position: relative;
          width: clamp(180px, 25vw, 220px);
          height: clamp(180px, 25vw, 220px);
          border-radius: 50%;
          padding: 5px;
          background: linear-gradient(135deg, #38bdf8 0%, #06b6d4 50%, #8b5cf6 100%);
          box-shadow: 0 0 35px rgba(56, 189, 248, 0.5), 0 0 15px rgba(6, 182, 212, 0.3);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          animation: floatCircle 5s ease-in-out infinite;
        }

        .circle-avatar-container:hover {
          transform: scale(1.04);
          box-shadow: 0 0 48px rgba(56, 189, 248, 0.7);
        }

        .circle-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid #07090e;
        }

        .circle-status-dot {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #38bdf8;
          border: 3px solid #07090e;
          box-shadow: 0 0 12px #38bdf8;
        }

        .hero-code-editor {
          width: 100%;
        }

        @keyframes floatCircle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        /* Responsive Layout Overrides */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hero-right-container {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
});
