import React from 'react';

// Base Skeleton Block with Pulse Shimmer
export const SkeletonBlock = ({ width = '100%', height = '20px', borderRadius = '8px', style = {} }) => (
  <div
    style={{
      width,
      height,
      borderRadius,
      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 25%, rgba(56, 189, 248, 0.08) 50%, rgba(255, 255, 255, 0.04) 75%)',
      backgroundSize: '200% 100%',
      animation: 'skeletonShimmer 1.8s infinite ease-in-out',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      ...style,
    }}
  />
);

// Generic Section Skeleton Loader
export const SectionSkeleton = ({ title = 'Loading Section...', height = '400px' }) => (
  <div className="section-container" style={{ minHeight: height, position: 'relative' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
      <SkeletonBlock width="140px" height="24px" borderRadius="20px" />
      <SkeletonBlock width="60%" height="40px" borderRadius="12px" />
      <SkeletonBlock width="40%" height="20px" borderRadius="8px" />
    </div>

    <div
      className="glass-panel"
      style={{
        padding: '36px',
        minHeight: '260px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SkeletonBlock width="48px" height="48px" borderRadius="14px" />
      <SkeletonBlock width="50%" height="24px" borderRadius="8px" />
      <SkeletonBlock width="80%" height="16px" borderRadius="6px" />
      <SkeletonBlock width="70%" height="16px" borderRadius="6px" />
    </div>

    <style>{`
      @keyframes skeletonShimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </div>
);
