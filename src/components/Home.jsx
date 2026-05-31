import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TRACK_CONFIGS } from '../config/navigation';
import { useProgress } from '../context/ProgressContext';
import './Home.css';

// SVG Icons for different tracks (20px sized for minimalist look)
const HldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="6" height="6" rx="1" />
    <rect x="16" y="2" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <line x1="8" y1="5" x2="16" y2="5" />
    <line x1="8" y1="19" x2="16" y2="19" />
    <line x1="5" y1="8" x2="5" y2="16" />
    <line x1="19" y1="8" x2="19" y2="16" />
  </svg>
);

const JavaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <path d="M6 1v3" />
    <path d="M10 1v3" />
    <path d="M14 1v3" />
  </svg>
);

const LldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const DsaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <line x1="12" y1="8" x2="6.5" y2="16" />
    <line x1="12" y1="8" x2="17.5" y2="16" />
  </svg>
);

const DbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const BehavioralIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// Registry of track icon components
const ICONS = {
  HldIcon: <HldIcon />,
  JavaIcon: <JavaIcon />,
  LldIcon: <LldIcon />,
  DsaIcon: <DsaIcon />,
  DbIcon: <DbIcon />,
  BehavioralIcon: <BehavioralIcon />
};

// High-fidelity custom progress ring component
const ProgressRing = ({ completed, total, colorClass }) => {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className={`progress-ring ${colorClass}`}>
      <svg width="34" height="34" viewBox="0 0 34 34">
        <circle
          cx="17"
          cy="17"
          r={radius}
          fill="transparent"
          stroke="rgba(145, 158, 171, 0.1)"
          strokeWidth="2.5"
        />
        <circle
          cx="17"
          cy="17"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 17 17)"
        />
      </svg>
      <span className="progress-ring-label">{percent}%</span>
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const { completedArticles } = useProgress();

  const getTrackStats = (sections) => {
    const total = sections.reduce((acc, sec) => acc + sec.items.length, 0);
    const unlocked = sections.reduce((acc, sec) => 
      acc + sec.items.filter(item => item.status !== 'locked').length
    , 0);
    const completed = sections.reduce((acc, sec) => 
      acc + sec.items.filter(item => item.status !== 'locked' && completedArticles.includes(item.id)).length
    , 0);
    return { completed, unlocked, total };
  };

  const hldStats = getTrackStats(TRACK_CONFIGS['system-design']?.sections || []);

  return (
    <div className="home-dashboard-wrapper">
      {/* Dynamic ambient color nodes in background */}
      <div className="light-ambient-sphere-1"></div>
      <div className="light-ambient-sphere-2"></div>

      <div className="home-dashboard">
        {/* Modern Minimal Page Header */}
        <header className="home-header">
          <div className="home-brand">
            <span>ready4interview</span>
          </div>
          <h1>Technical Interview Playbooks</h1>
          <p className="home-subtitle">
            Curated engineering roadmaps and interactive deep-dives designed for system design and language internals.
          </p>
        </header>

        {/* Tracks Grid */}
        <div className="home-tracks-section">
          <div className="tracks-grid">
            
            {Object.entries(TRACK_CONFIGS).map(([trackId, config]) => {
               const stats = getTrackStats(config.sections);
               const ringColorClass = (trackId === 'java' || trackId === 'java-lang') ? 'java-ring' : trackId === 'lld' ? 'lld-ring' : 'hld-ring';
               const iconThemeClass = (trackId === 'java' || trackId === 'java-lang') ? 'java-theme' : trackId === 'lld' ? 'lld-theme' : 'hld-theme';
               const cardClass = (trackId === 'java' || trackId === 'java-lang') ? 'java-card' : trackId === 'lld' ? 'lld-card' : 'hld-card';
               const firstItem = config.sections[0]?.items[0];
               const firstItemPath = firstItem ? firstItem.href : '/';

               return (
                 <div key={trackId} className={`track-card track-card--active ${cardClass}`} onClick={() => navigate(firstItemPath)}>
                   <div className="card-corner card-corner--top-left"></div>
                   <div className="card-corner card-corner--bottom-right"></div>

                   <div className="track-card-header">
                     <div className={`track-icon ${iconThemeClass}`}>
                       {ICONS[config.icon] || <HldIcon />}
                     </div>
                     <ProgressRing completed={stats.completed} total={stats.unlocked} colorClass={ringColorClass} />
                   </div>
                   <h3 className="track-title">{config.title}</h3>
                   <p className="track-desc">{config.desc}</p>
                   <div className="track-footer">
                     <span className="track-stats-pill">
                       {stats.unlocked}/{stats.total} Modules
                     </span>
                     <span className="track-link">
                       Explore <span className="arrow">→</span>
                     </span>
                   </div>
                 </div>
               );
             })}

            {/* DSA Card */}
            <div className="track-card track-card--locked">
              <div className="track-card-header">
                <div className="track-icon locked-theme">
                  <DsaIcon />
                </div>
                <div className="lock-indicator">
                  <LockIcon />
                </div>
              </div>
              <h3 className="track-title">Algorithms (DSA)</h3>
              <p className="track-desc">
                Review critical coding interview patterns: dynamic programming, graph traversals, and heaps.
              </p>
              <div className="track-footer">
                <span className="track-stats-pill locked-pill">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Database Internals Card */}
            <div className="track-card track-card--locked">
              <div className="track-card-header">
                <div className="track-icon locked-theme">
                  <DbIcon />
                </div>
                <div className="lock-indicator">
                  <LockIcon />
                </div>
              </div>
              <h3 className="track-title">Database Internals</h3>
              <p className="track-desc">
                Master storage engine models (LSM, B-Tree), transaction isolation, indexing, and replication.
              </p>
              <div className="track-footer">
                <span className="track-stats-pill locked-pill">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Behavioral Round Card */}
            <div className="track-card track-card--locked">
              <div className="track-card-header">
                <div className="track-icon locked-theme">
                  <BehavioralIcon />
                </div>
                <div className="lock-indicator">
                  <LockIcon />
                </div>
              </div>
              <h3 className="track-title">Behavioral Round</h3>
              <p className="track-desc">
                Learn the STAR method to structure leadership stories, resolve conflicts, and show ownership.
              </p>
              <div className="track-footer">
                <span className="track-stats-pill locked-pill">
                  Coming Soon
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
