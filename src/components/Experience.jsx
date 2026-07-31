import React, { useState, useMemo, useCallback, memo } from 'react';
import {
  IconBriefcase,
  IconClock,
  IconMapPin,
  IconChevronRight,
  IconCheckCircle2,
  IconZap,
  IconBuilding,
  IconRocket,
  IconGlobe,
  IconShield,
  IconSparkles,
  IconCode,
  IconServer
} from './Icons';

export const Experience = memo(() => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpanded = useCallback((idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  }, []);

  const experiences = useMemo(
    () => [
      {
        id: 'margadarsi-computers',
        role: 'Mobile App Developer',
        company: 'Margadarsi Computers',
        logoInitials: 'MC',
        logoGradient: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)',
        location: 'Hyderabad, Telangana, India',
        period: 'May 2023 – Present',
        type: 'Full-Time',
        summary: 'Architecting, developing, and maintaining production-grade Android & iOS applications using React Native, JavaScript, TypeScript, Redux Toolkit, and Firebase. Contributed directly to live applications including the flagship Eenadu News App with over 1 Million+ downloads on Google Play Store.',
        highlightBadge: '🔥 1M+ Play Store Downloads (Eenadu News App)',
        responsibilities: [
          'Developing and maintaining production-grade React Native applications for Android and iOS.',
          'Building scalable and reusable mobile application features using React Native, JavaScript, TypeScript, and Redux Toolkit.',
          'Integrating REST APIs and Firebase services including Authentication, Firestore, Analytics, and Crashlytics.',
          'Improving application performance, fixing production issues, and optimizing user experience.',
          'Collaborating with designers, QA engineers, backend developers, and project stakeholders to deliver high-quality applications.',
          'Publishing, maintaining, and supporting production mobile applications.',
          'Following clean architecture, reusable component design, and React Native best practices.',
          'Contributing to continuous application improvements and feature enhancements.'
        ],
        achievements: [
          '3+ Years of Professional Experience',
          'Built & maintained production Android & iOS applications',
          'Worked on apps with 1 Million+ Google Play Store downloads',
          'Strong experience in production React Native development',
          'Experience with Firebase production services suite',
          'Experience integrating REST APIs & backend services'
        ],
        techStack: ['React Native', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Firebase', 'REST APIs', 'Node.js', 'Express.js', 'PostgreSQL'],
      },
      {
        id: 'backend-node-expansion',
        role: 'Full-Stack & REST API Engineer',
        company: 'Node.js & PostgreSQL Backend Architecture',
        logoInitials: 'BE',
        logoGradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        location: 'Hyderabad, Telangana, India',
        period: 'Parallel Experience & Practice',
        type: 'Full-Stack Practice',
        summary: 'Designing modular Express.js + PostgreSQL REST APIs, complete with JWT Authentication, bcrypt password hashing, and clean controller-service-repository architecture to support cross-platform mobile apps.',
        highlightBadge: '⚡ Clean Layered Architecture & REST APIs',
        responsibilities: [
          'Built layered backend architecture separating controllers, services, and repositories in Node.js & TypeScript.',
          'Implemented stateless JWT Authentication with bcrypt password encryption.',
          'Designed relational database schemas, migrations, and optimized SQL queries using PostgreSQL.',
          'Engineered reusable REST API middleware for input validation, pagination, and centralized error handling.'
        ],
        achievements: [
          'Layered Architecture Pattern',
          'Stateless JWT Authentication',
          'Relational SQL Database Management'
        ],
        techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'SQL', 'TypeScript', 'JWT Auth', 'REST APIs'],
      },
    ],
    []
  );

  return (
    <section id="experience" className="section-container">
      <div className="section-tag">
        <IconBriefcase size={16} />
        <span>Professional Career Timeline</span>
      </div>

      <h2 className="section-title">
        Work <span className="gradient-text">Experience</span>
      </h2>

      <p className="section-subtitle">
        Mobile App Developer at Margadarsi Computers with 3+ Years of hands-on experience building production React Native applications, publishing on Play Store, and integrating Firebase & REST APIs.
      </p>

      {/* Timeline Container */}
      <div className="timeline-wrapper" style={{ position: 'relative', marginTop: '40px' }}>
        {/* Vertical Timeline Glow Bar */}
        <div className="timeline-glow-bar" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={exp.id} className="timeline-card-item">
                {/* Glowing Timeline Marker Node */}
                <div className="timeline-marker">
                  <IconZap size={14} />
                </div>

                {/* Main Experience Card */}
                <div
                  className={`glass-panel experience-card ${isExpanded ? 'glass-panel-glow' : ''}`}
                  style={{
                    padding: 'clamp(16px, 4vw, 32px)',
                    borderColor: isExpanded ? 'rgba(56, 189, 248, 0.45)' : 'var(--glass-border)',
                    boxShadow: isExpanded ? '0 15px 40px rgba(0, 0, 0, 0.4)' : 'none',
                  }}
                >
                  {/* Top Company Info & Logo Row */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    {/* Logo + Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: exp.logoGradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: 800,
                          fontSize: '1rem',
                          fontFamily: 'var(--font-heading)',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                          flexShrink: 0,
                        }}
                      >
                        {exp.logoInitials}
                      </div>

                      <div>
                        <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                          {exp.role}
                        </h3>
                        <div style={{ fontSize: '0.925rem', color: 'var(--sky-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                          <IconBuilding size={15} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Period & Location Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          borderRadius: '9999px',
                          background: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          color: 'var(--sky-accent)',
                          fontSize: '0.825rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <IconClock size={14} />
                        <span>{exp.period}</span>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--glass-border)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <IconMapPin size={13} style={{ color: 'var(--violet-accent)' }} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Pill Banner */}
                  {exp.highlightBadge && (
                    <div
                      style={{
                        marginBottom: '16px',
                        padding: '8px 14px',
                        borderRadius: '10px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: 'var(--emerald-accent)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <IconSparkles size={16} />
                      <span>{exp.highlightBadge}</span>
                    </div>
                  )}

                  {/* Summary */}
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                    {exp.summary}
                  </p>

                  {/* Key Achievements Grid */}
                  {exp.achievements && (
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--sky-accent)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <IconSparkles size={15} />
                        <span>Key Achievements</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-primary)', background: 'rgba(56, 189, 248, 0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                            <IconCheckCircle2 size={15} style={{ color: 'var(--emerald-accent)', flexShrink: 0 }} />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Responsibilities Bullet List */}
                  <div style={{ marginBottom: '20px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        padding: '10px 0',
                        borderTop: '1px solid var(--glass-border)',
                        borderBottom: '1px solid var(--glass-border)',
                        marginBottom: '14px',
                      }}
                      onClick={() => toggleExpanded(idx)}
                    >
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Key Professional Responsibilities ({exp.responsibilities.length})
                      </span>
                      <div style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: 'var(--sky-accent)' }}>
                        <IconChevronRight size={18} />
                      </div>
                    </div>

                    {isExpanded && (
                      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', listStyle: 'none', padding: 0 }} className="responsibility-grid">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                            <span style={{ color: 'var(--sky-accent)', flexShrink: 0, marginTop: '2px' }}>
                              <IconCheckCircle2 size={15} />
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Technology Badges Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginRight: '6px' }}>
                      TECHNOLOGY BADGES:
                    </span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          color: 'var(--sky-accent)',
                          background: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          padding: '4px 12px',
                          borderRadius: '8px',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded CSS for Timeline Layout */}
      <style>{`
        .timeline-wrapper {
          padding-left: 20px;
        }

        .timeline-glow-bar {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 31px;
          width: 3px;
          background: linear-gradient(180deg, var(--sky-accent) 0%, var(--emerald-accent) 50%, var(--violet-accent) 100%);
          border-radius: 9999px;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
        }

        .timeline-card-item {
          position: relative;
          padding-left: 48px;
        }

        .timeline-marker {
          position: absolute;
          left: 17px;
          top: 24px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #07090e;
          border: 2px solid var(--sky-accent);
          color: var(--sky-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px var(--sky-accent);
          z-index: 2;
        }

        @media (max-width: 640px) {
          .timeline-wrapper {
            padding-left: 0;
          }
          .timeline-glow-bar {
            left: 12px;
          }
          .timeline-card-item {
            padding-left: 36px;
          }
          .timeline-marker {
            left: 0px;
            width: 26px;
            height: 26px;
          }
          .responsibility-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
});
