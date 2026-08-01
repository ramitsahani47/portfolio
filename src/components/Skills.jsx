import React, { useState, useMemo, useCallback, memo } from 'react';
import {
  IconCpu,
  IconCode,
  IconServer,
  IconCloud,
  IconDatabase,
  IconShield,
  IconLayers,
  IconSparkles,
  IconCheck,
  IconSmartphone,
  IconLock,
  IconFlame,
  IconGlobe,
  IconFileText,
  IconWrench,
  IconSearch,
  IconZap,
  IconRocket
} from './Icons';

export const Skills = memo(() => {
  const [activeGroup, setActiveGroup] = useState('production');
  const [searchQuery, setSearchQuery] = useState('');

  const handleGroupChange = useCallback((id) => {
    setActiveGroup(id);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // 3 Primary Skill Groups
  const groups = useMemo(
    () => [
      { id: 'production', label: '1. Production Experience', count: '14 Categories' },
      { id: 'firebase', label: '2. Firebase Expertise (Production)', count: '5 Core Services' },
      { id: 'learning', label: '3. Backend Learning Journey', count: '5 Technologies' },
    ],
    []
  );

  // 1. Production Experience Stack
  const productionCategories = [
    {
      title: 'Mobile Development',
      icon: <IconSmartphone size={22} />,
      accent: '#38bdf8',
      skills: [
        { name: 'React Native', badge: 'Production Experience' },
        { name: 'Expo', badge: 'Production Experience' },
        { name: 'React Native CLI', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Programming Languages',
      icon: <IconCode size={22} />,
      accent: '#06b6d4',
      skills: [
        { name: 'JavaScript (ES6+)', badge: 'Production Experience' },
        { name: 'TypeScript', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Frontend & UI',
      icon: <IconLayers size={22} />,
      accent: '#8b5cf6',
      skills: [
        { name: 'React Native UI', badge: 'Production Experience' },
        { name: 'React.js', badge: 'Production Experience' },
        { name: 'HTML5 & CSS3', badge: 'Production Experience' },
      ],
    },
    {
      title: 'State Management',
      icon: <IconCpu size={22} />,
      accent: '#10b981',
      skills: [
        { name: 'Redux & Redux Toolkit', badge: 'Production Experience' },
        { name: 'Context API', badge: 'Production Experience' },
        { name: 'React Query', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Backend Development',
      icon: <IconServer size={22} />,
      accent: '#10b981',
      skills: [
        { name: 'Node.js', badge: 'Production Experience' },
        { name: 'Express.js', badge: 'Production Experience' },
        { name: 'REST APIs', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Authentication & Security',
      icon: <IconLock size={22} />,
      accent: '#f43f5e',
      skills: [
        { name: 'JWT Authentication', badge: 'Production Experience' },
        { name: 'Access & Refresh Tokens', badge: 'Production Experience' },
        { name: 'bcrypt Password Hashing', badge: 'Production Experience' },
        { name: 'Zod Validation', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Database Engineering',
      icon: <IconDatabase size={22} />,
      accent: '#38bdf8',
      skills: [
        { name: 'PostgreSQL', badge: 'Production Experience' },
        { name: 'MongoDB', badge: 'Production Experience' },
      ],
    },
    {
      title: 'API Integration',
      icon: <IconGlobe size={22} />,
      accent: '#06b6d4',
      skills: [
        { name: 'REST APIs', badge: 'Production Experience' },
        { name: 'Axios Interceptors', badge: 'Production Experience' },
        { name: 'Fetch API & JSON', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Mobile Native Features',
      icon: <IconSmartphone size={22} />,
      accent: '#8b5cf6',
      skills: [
        { name: 'Google Maps', badge: 'Production Experience' },
        { name: 'Camera Integration', badge: 'Production Experience' },
        { name: 'WebView & PDF Viewer', badge: 'Production Experience' },
        { name: 'File Sharing & Device Info', badge: 'Production Experience' },
        { name: 'Network Connectivity', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Local Storage Engine',
      icon: <IconDatabase size={22} />,
      accent: '#10b981',
      skills: [
        { name: 'AsyncStorage', badge: 'Production Experience' },
        { name: 'MMKV Fast Storage', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Performance Optimization',
      icon: <IconZap size={22} />,
      accent: '#f59e0b',
      skills: [
        { name: 'FlatList Optimization', badge: 'Production Experience' },
        { name: 'Lazy Loading & Code Splitting', badge: 'Production Experience' },
        { name: 'Memory & Profiling Tuning', badge: 'Production Experience' },
        { name: 'API Performance Optimization', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Backend Architecture',
      icon: <IconLayers size={22} />,
      accent: '#6366f1',
      skills: [
        { name: 'Clean Layered Architecture', badge: 'Production Experience' },
        { name: 'Routes & Controllers', badge: 'Production Experience' },
        { name: 'Services & Repositories', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Backend Features',
      icon: <IconServer size={22} />,
      accent: '#06b6d4',
      skills: [
        { name: 'CRUD APIs', badge: 'Production Experience' },
        { name: 'Pagination, Search & Filtering', badge: 'Production Experience' },
        { name: 'Global Error Handling & AsyncHandler', badge: 'Production Experience' },
        { name: 'Custom ApiResponse & ApiError', badge: 'Production Experience' },
      ],
    },
    {
      title: 'Development Tools & Git',
      icon: <IconWrench size={22} />,
      accent: '#f59e0b',
      skills: [
        { name: 'Git & GitHub', badge: 'Production Experience' },
        { name: 'Android Studio & Xcode', badge: 'Production Experience' },
        { name: 'VS Code & Postman', badge: 'Production Experience' },
        { name: 'Gradle Build System', badge: 'Production Experience' },
      ],
    },
  ];

  // 2. Firebase Production Expertise
  const firebaseCategory = {
    title: 'Firebase Production Suite',
    description: 'Battle-tested Firebase services implemented in real-world production apps with 1M+ downloads.',
    icon: <IconFlame size={26} />,
    accent: '#f59e0b',
    services: [
      { name: 'Firebase Authentication', detail: 'Secure user login, OAuth providers, and session management in live apps.', badge: 'Production Experience' },
      { name: 'Firebase Cloud Messaging (FCM)', detail: 'Real-time breaking news & promotional push notifications to 1M+ devices.', badge: 'Production Experience' },
      { name: 'Firebase Firestore', detail: 'Real-time NoSQL cloud database sync and offline data persistence.', badge: 'Production Experience' },
      { name: 'Firebase Analytics', detail: 'User event tracking, screen funnel analytics, and retention metrics.', badge: 'Production Experience' },
      { name: 'Firebase Crashlytics', detail: 'Real-time crash logging, stack trace debugging, and stability tracking.', badge: 'Production Experience' },
    ],
  };

  // 3. Backend Learning Journey
  const learningCategory = {
    title: 'Backend Learning Journey',
    description: 'Technologies currently being learned and implemented in personal & backend projects.',
    icon: <IconRocket size={26} />,
    accent: '#8b5cf6',
    techs: [
      { name: 'Docker', desc: 'Containerizing Node.js REST APIs & PostgreSQL services for deployment.', badge: 'Recently Learned' },
      { name: 'Swagger / OpenAPI', desc: 'Designing interactive REST API documentation and OpenAPI 3.0 schemas.', badge: 'Recently Learned' },
      { name: 'Helmet', desc: 'Securing Express HTTP response headers against security vulnerabilities.', badge: 'Recently Learned' },
      { name: 'Rate Limiting', desc: 'Preventing brute-force attacks and API abuse with express-rate-limit.', badge: 'Recently Learned' },
      { name: 'Jest', desc: 'Writing unit and integration tests for REST API endpoints and services.', badge: 'Recently Learned' },
    ],
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-tag">
        <IconCpu size={16} />
        <span>Technical Mastery</span>
      </div>

      <h2 className="section-title">
        Skills & <span className="gradient-text">Competency Matrix</span>
      </h2>

      <p className="section-subtitle">
        Organized honestly into production-proven expertise, real-world Firebase services, and active backend learning projects.
      </p>

      {/* Group Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '36px',
        }}
      >
        {groups.map((grp) => (
          <button
            key={grp.id}
            onClick={() => setActiveGroup(grp.id)}
            style={{
              background: activeGroup === grp.id ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(139, 92, 246, 0.2))' : 'rgba(15, 23, 42, 0.6)',
              border: activeGroup === grp.id ? '1px solid var(--sky-accent)' : '1px solid var(--glass-border)',
              color: activeGroup === grp.id ? 'var(--sky-accent)' : 'var(--text-secondary)',
              padding: '12px 24px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>{grp.label}</span>
            <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.08)', color: 'var(--text-muted)' }}>
              {grp.count}
            </span>
          </button>
        ))}
      </div>

      {/* Group 1: Production Experience Grid */}
      {activeGroup === 'production' && (
        <div>
          <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--emerald-accent)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              ✔ ALL TECHNOLOGIES BELOW ARE SHIPPED IN REAL-WORLD PRODUCTION APPS
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
              gap: '20px',
            }}
          >
            {productionCategories.map((cat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-glow"
                style={{ padding: 'clamp(18px, 3.5vw, 28px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${cat.accent}44`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: cat.accent,
                        flexShrink: 0,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {cat.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cat.skills.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          fontSize: '0.825rem',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          background: 'rgba(56, 189, 248, 0.08)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          color: 'var(--text-primary)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span style={{ color: 'var(--emerald-accent)', display: 'inline-flex' }}>
                          <IconCheck size={13} />
                        </span>
                        <span>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--emerald-accent)', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                    Production Experience
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Group 2: Firebase Production Expertise */}
      {activeGroup === 'firebase' && (
        <div className="glass-panel" style={{ padding: 'clamp(18px, 4vw, 36px)', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(15, 23, 42, 0.8))', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid rgba(245, 158, 11, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', flexShrink: 0 }}>
              <IconFlame size={30} />
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                {firebaseCategory.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                {firebaseCategory.description}
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '16px', marginTop: '24px' }}>
            {firebaseCategory.services.map((srv, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(7, 9, 14, 0.6)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <IconCheck size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      <span>{srv.name}</span>
                    </h4>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                      Production Experience
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {srv.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Group 3: Backend Learning Journey */}
      {activeGroup === 'learning' && (
        <div className="glass-panel" style={{ padding: 'clamp(18px, 4vw, 36px)', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(15, 23, 42, 0.8))', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-accent)', flexShrink: 0 }}>
              <IconRocket size={30} />
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                {learningCategory.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                {learningCategory.description}
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '16px', marginTop: '24px' }}>
            {learningCategory.techs.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(7, 9, 14, 0.6)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.name}
                    </h4>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--violet-accent)', background: 'rgba(139, 92, 246, 0.15)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                      ⚡ Recently Learned
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
});
