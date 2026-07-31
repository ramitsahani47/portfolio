import React, { useState, useMemo, useCallback, memo } from 'react';
import {
  IconFolder,
  IconExternalLink,
  IconGithub,
  IconLayers,
  IconZap,
  IconArrowUpRight,
  IconCode,
  IconServer,
  IconSmartphone,
  IconCheck
} from './Icons';
import { ProjectModal } from './ProjectModal';

export const Projects = memo(() => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCategoryChange = useCallback((id) => {
    setActiveCategory(id);
  }, []);

  const handleOpenModal = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const categories = useMemo(
    () => [
      { id: 'all', label: 'All Projects (6)' },
      { id: 'mobile', label: 'Mobile Apps (5)' },
      { id: 'backend', label: 'Backend APIs (1)' },
    ],
    []
  );

  const projectList = [
    {
      id: 'eenadu-news-app',
      category: 'mobile',
      title: 'Eenadu News App',
      subtitle: 'Android & iOS Production Application',
      description: 'High-traffic news mobile application serving over 1 million users with breaking news, multi-language news feeds, push notifications, and AdMob integration.',
      tags: ['React Native', 'JavaScript', 'Redux Toolkit', 'Firebase', 'REST APIs', 'WebView', 'Google AdMob'],
      features: [
        'Breaking News Alerts',
        'Category-wise News Feeds',
        'Firebase Push Notifications (FCM)',
        'Multi-language Support',
        'Advertisement Integration (Google AdMob)',
        'FlatList Performance Optimization',
        'REST API Integration',
      ],
      achievement: '🏆 1M+ Downloads on Google Play Store',
      topology: '[ Mobile React Native UI ] ──> [ Redux Toolkit Store ] ──> [ Firebase FCM & REST News API ] ──> [ Live Google Play Store App ]',
      accentColor: '#38bdf8',
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(56, 189, 248, 0.05))',
    },
    {
      id: 'eenadu-photographer-app',
      category: 'mobile',
      title: 'Eenadu Photographer App',
      subtitle: 'Media & Photo Upload Mobile Platform',
      description: 'Specialized mobile application for photojournalists and photographers to capture, manage, authenticate, and upload high-resolution images to newsroom media servers.',
      tags: ['React Native', 'Redux Toolkit', 'REST APIs', 'Camera', 'Image Picker'],
      features: [
        'User Authentication',
        'Camera & High-Res Photo Upload',
        'Media Gallery & Image Management',
        'REST API Server Integration',
      ],
      topology: '[ React Native Camera UI ] ──> [ Redux Toolkit Media Queue ] ──> [ Image Upload REST API ]',
      accentColor: '#8b5cf6',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.05))',
    },
    {
      id: 'rfc-tourism-app',
      category: 'mobile',
      title: 'RFC Tourism App',
      subtitle: 'Travel & Location Discovery Application',
      description: 'Interactive tourism mobile application providing travelers with Ramoji Film City information, interactive map navigation, guided tour points, and venue discovery.',
      tags: ['React Native', 'Google Maps', 'REST APIs', 'Location Services'],
      features: [
        'Tourism & Venue Information',
        'Google Maps Location Services',
        'Interactive Mobile UI',
        'REST API Integration',
      ],
      topology: '[ React Native Maps UI ] ──> [ Google Maps SDK ] ──> [ Tourism REST API Endpoints ]',
      accentColor: '#10b981',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.05))',
    },
    {
      id: 'vasundhara-kutumbam-app',
      category: 'mobile',
      title: 'Vasundhara Kutumbam App',
      subtitle: 'Community & Member Engagement Platform',
      description: 'Community-centric mobile application connecting members with event updates, authentic user profiles, and seamless API data synchronization.',
      tags: ['React Native', 'Redux', 'REST APIs', 'AsyncStorage'],
      features: [
        'Member Authentication',
        'REST API Integration',
        'Redux State Management',
        'Responsive Mobile Layout',
      ],
      topology: '[ React Native App Screens ] ──> [ Redux Global State ] ──> [ Backend Community APIs ]',
      accentColor: '#06b6d4',
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.05))',
    },
    {
      id: 'eenadu-pratibha-app',
      category: 'mobile',
      title: 'Eenadu-Pratibha App',
      subtitle: 'Educational & Exam Prep Mobile Portal',
      description: 'Educational mobile application providing students with study materials, practice tests, exam news, and Firebase backend synchronization.',
      tags: ['React Native', 'Firebase', 'REST APIs', 'Mobile UI'],
      features: [
        'Firebase Integration',
        'REST API Content Fetching',
        'Mobile UI Development',
        'Practice Exam Interface',
      ],
      topology: '[ Education Quiz UI ] ──> [ Firebase Services ] ──> [ Pratibha REST Content API ]',
      accentColor: '#f59e0b',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(244, 63, 94, 0.05))',
    },
    {
      id: 'expense-tracker-backend-api',
      category: 'backend',
      title: 'Expense Tracker Backend API',
      subtitle: 'Node.js, Express & PostgreSQL Layered REST Service',
      description: 'Production-ready financial API backend with JWT authentication, access & refresh token rotation, bcrypt password hashing, Zod validation, and clean layered architecture.',
      tags: ['Node.js', 'Express.js', 'PostgreSQL', 'TypeScript', 'Zod', 'JWT Auth'],
      features: [
        'JWT Authentication & Access/Refresh Tokens',
        'bcrypt Password Hashing & Security',
        'Zod Runtime Request Validation',
        'Full CRUD APIs for Transactions & Expense Categories',
        'Pagination, Search, Filtering & Sorting',
        'Clean Layered Architecture (Controller -> Service -> Repository)',
        'Async Handler & Global Error Handling Middleware',
        'PostgreSQL Database Integration',
      ],
      currentlyImplementing: [
        'Swagger / OpenAPI Docs',
        'Docker Containerization',
        'Helmet Security Headers',
        'Rate Limiting Middleware',
        'Jest Unit Tests',
      ],
      topology: '[ Express Router ] ──> [ Zod Middleware ] ──> [ Layered Service / Repo ] ──> [ PostgreSQL Database ]',
      accentColor: '#10b981',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(139, 92, 246, 0.05))',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectList
    : projectList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <div className="section-tag">
        <IconFolder size={16} />
        <span>Featured Engineering Work</span>
      </div>

      <h2 className="section-title">
        Project <span className="gradient-text">Showcase</span>
      </h2>

      <p className="section-subtitle">
        Highlighting 5 production React Native mobile applications and production-ready Node.js & PostgreSQL REST APIs.
      </p>

      {/* Category Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              background: activeCategory === cat.id ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(139, 92, 246, 0.2))' : 'rgba(15, 23, 42, 0.6)',
              border: activeCategory === cat.id ? '1px solid var(--sky-accent)' : '1px solid var(--glass-border)',
              color: activeCategory === cat.id ? 'var(--sky-accent)' : 'var(--text-secondary)',
              padding: '10px 20px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
        }}
      >
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="glass-panel glass-panel-glow"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              background: proj.gradient,
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div>
              {/* Header Badge Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: proj.accentColor,
                    fontWeight: 600,
                  }}
                >
                  {proj.category === 'mobile' ? '📱 Mobile App' : '⚙️ Backend API'}
                </span>

                {proj.achievement && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      color: '#f59e0b',
                      fontWeight: 700,
                    }}
                  >
                    {proj.achievement}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                {proj.title}
              </h3>
              <div style={{ fontSize: '0.875rem', color: proj.accentColor, fontWeight: 600, marginBottom: '12px' }}>
                {proj.subtitle}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {proj.description}
              </p>

              {/* Key Features Preview Pills */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  HIGHLIGHTED FEATURES:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {proj.features.slice(0, 4).map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-secondary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <IconCheck size={12} style={{ color: proj.accentColor }} />
                      <span>{feat}</span>
                    </span>
                  ))}
                  {proj.features.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', alignSelf: 'center' }}>
                      +{proj.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(7, 9, 14, 0.5)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Case Study / Details Button */}
              <button
                onClick={() => handleOpenModal(proj)}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
              >
                <span>View Full Features & Architecture</span>
                <IconArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
});
