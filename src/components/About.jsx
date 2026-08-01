import React, { useMemo, memo } from 'react';
import {
  IconUser,
  IconCpu,
  IconZap,
  IconServer,
  IconLayers,
  IconCheck,
  IconShield,
  IconGlobe,
  IconRocket,
  IconCode,
  IconSmartphone,
  IconCheckCircle2,
  IconFlame,
  IconAward,
  IconDatabase,
  IconSparkles
} from './Icons';

export const About = memo(() => {
  const highlights = useMemo(
    () => [
      '3+ Years Professional Experience',
      '1M+ Google Play Store Downloads (Eenadu News App)',
      'Production Android & iOS Applications',
      'React Native Specialist',
      'Node.js & PostgreSQL Backend Journey',
    ],
    []
  );

  const coreTech = useMemo(
    () => [
      { name: 'React Native', color: '#38bdf8' },
      { name: 'JavaScript', color: '#f59e0b' },
      { name: 'TypeScript', color: '#38bdf8' },
      { name: 'Redux Toolkit', color: '#8b5cf6' },
      { name: 'Firebase', color: '#f59e0b' },
      { name: 'Node.js', color: '#10b981' },
      { name: 'Express.js', color: '#06b6d4' },
      { name: 'PostgreSQL', color: '#38bdf8' },
      { name: 'REST APIs', color: '#10b981' },
    ],
    []
  );

  const focusAreas = [
    { text: 'Performance Optimization', icon: <IconZap size={18} />, color: '#f59e0b' },
    { text: 'Clean Code & Layered Architecture', icon: <IconLayers size={18} />, color: '#8b5cf6' },
    { text: 'Mobile UI Development', icon: <IconSmartphone size={18} />, color: '#38bdf8' },
    { text: 'API Integration', icon: <IconGlobe size={18} />, color: '#06b6d4' },
    { text: 'Firebase Production Suite', icon: <IconFlame size={18} />, color: '#f59e0b' },
    { text: 'Production Bug Fixing', icon: <IconCheckCircle2 size={18} />, color: '#10b981' },
  ];

  const quickStats = [
    { value: '3+ Years', label: 'Professional Exp', color: 'var(--sky-accent)' },
    { value: '7+ Projects', label: 'Delivered & Deployed', color: 'var(--violet-accent)' },
    { value: '1M+', label: 'Play Store Downloads', color: 'var(--cyan-accent)' },
    { value: 'Android & iOS', label: 'Cross-Platform Core', color: 'var(--emerald-accent)' },
    { value: 'Firebase Suite', label: 'Auth, FCM, Firestore, Crashlytics', color: '#f59e0b' },
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-tag">
        <IconUser size={16} />
        <span>About Me & Professional Journey</span>
      </div>

      <h2 className="section-title">
        Engineering Mobile Apps & <span className="gradient-text">Scalable Backend APIs</span>
      </h2>
      
      <p className="section-subtitle">
        A recruiter-focused summary of my career achievements, core technical stack, and engineering principles.
      </p>

      {/* Main Two-Column Content Layout */}
      <div className="about-redesign-grid" style={{ marginTop: '36px' }}>
        {/* Left Column: Comprehensive Professional Journey Text */}
        <div className="glass-panel" style={{ padding: 'clamp(18px, 4vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
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
              <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                About Me
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '16px', wordBreak: 'break-word' }}>
              I am <strong>Ramit Sahani</strong>, a dedicated <strong>React Native Developer</strong> with <strong>3+ years of professional experience</strong> based in <strong>Hyderabad, Telangana, India</strong>. I specialize in building, optimizing, and maintaining production-grade Android and iOS applications using <strong>React Native, JavaScript, TypeScript, Redux Toolkit, and Firebase</strong>.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '16px', wordBreak: 'break-word' }}>
              Throughout my career, I have contributed to multiple live applications, including the flagship <strong>Eenadu News App with over 1 million downloads on Google Play Store</strong>. My mobile expertise spans real-time Firebase Authentication, Cloud Messaging (FCM), Firestore NoSQL databases, Analytics tracking, and Crashlytics stability monitoring.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '16px', wordBreak: 'break-word' }}>
              To complement my frontend mobile specialization, I am expanding into Backend Development using <strong>Node.js, Express.js, PostgreSQL, and TypeScript</strong> — building production-ready REST APIs with JWT Authentication, Clean Layered Architecture (Controller-Service-Repository), Zod schema validation, pagination, filtering, and centralized error handling.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.75, wordBreak: 'break-word' }}>
              My engineering philosophy revolves around <strong>clean architecture</strong>, <strong>performance optimization</strong>, memory profiling, and continuous learning to deliver high-quality, maintainable software.
            </p>
          </div>

          <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconSparkles size={18} style={{ color: 'var(--sky-accent)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.825rem', color: 'var(--sky-accent)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              Location: Hyderabad, India • Available for Mobile & Backend Roles
            </span>
          </div>
        </div>

        {/* Right Column: 4 Premium Information Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Card 1 – Career Highlights */}
          <div className="glass-panel glass-panel-glow" style={{ padding: 'clamp(18px, 4vw, 28px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f59e0b',
                  flexShrink: 0,
                }}
              >
                <IconAward size={20} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Career Highlights
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <IconCheckCircle2 size={16} style={{ color: 'var(--emerald-accent)', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.4 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 – Core Technologies */}
          <div className="glass-panel glass-panel-glow" style={{ padding: 'clamp(18px, 4vw, 28px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
                <IconCpu size={20} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Core Technologies
              </h4>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {coreTech.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    padding: '5px 10px',
                    borderRadius: '8px',
                    background: `${tech.color}15`,
                    border: `1px solid ${tech.color}33`,
                    color: tech.color,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 – What I Focus On */}
          <div className="glass-panel glass-panel-glow" style={{ padding: 'clamp(18px, 4vw, 28px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--violet-accent)',
                  flexShrink: 0,
                }}
              >
                <IconRocket size={20} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                What I Focus On
              </h4>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: '10px' }}>
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'rgba(7, 9, 14, 0.5)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <span style={{ color: area.color, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    {area.icon}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.3 }}>
                    {area.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 – Quick Stats */}
          <div className="glass-panel glass-panel-glow" style={{ padding: 'clamp(18px, 4vw, 28px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald-accent)',
                  flexShrink: 0,
                }}
              >
                <IconShield size={20} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Quick Stats
              </h4>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(7, 9, 14, 0.6)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: stat.color, fontFamily: 'var(--font-heading)' }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid CSS */}
      <style>{`
        .about-redesign-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .about-redesign-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
});
