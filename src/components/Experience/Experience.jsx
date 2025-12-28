import { useState, useEffect, useRef } from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`} 
      id="experience"
    >
      <div className={styles.header}>
        <span className={styles.tagline}>My Expertise</span>
        <h2 className={styles.title}>Skills & Certifications</h2>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Constantly learning and growing with the latest technologies and industry certifications
        </p>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabNav}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'skills' ? styles.active : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <span className={styles.tabIcon}>⚡</span>
          <span className={styles.tabText}>Technical Skills</span>
          <span className={styles.tabCount}>{skills.length}</span>
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'certs' ? styles.active : ''}`}
          onClick={() => setActiveTab('certs')}
        >
          <span className={styles.tabIcon}>🏆</span>
          <span className={styles.tabText}>Certifications</span>
          <span className={styles.tabCount}>{history.length}</span>
        </button>
      </div>

      <div className={styles.content}>
        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className={styles.skillsGrid}>
            {skills.map((skill, id) => (
              <div 
                key={id} 
                className={styles.skillCard}
                style={{ '--delay': `${id * 0.05}s` }}
              >
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  <div className={styles.skillGlow}></div>
                </div>
                <p className={styles.skillName}>{skill.title}</p>
                <div className={styles.skillLevel}>
                  <div className={styles.skillLevelBar}></div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Certifications Tab */}
        {activeTab === 'certs' && (
          <div className={styles.certsGrid}>
            {history.map((historyItem, id) => (
              <div 
                key={id} 
                className={styles.certCard}
                style={{ '--delay': `${id * 0.08}s` }}
              >
                <div className={styles.certHeader}>
                  <div className={styles.certIconWrapper}>
                    <img 
                      src={getImageUrl(historyItem.imageSrc)} 
                      alt={`${historyItem.organization} Logo`}
                    />
                  </div>
                  <div className={styles.certBadge}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.certContent}>
                  <h3 className={styles.certTitle}>{historyItem.Certification}</h3>
                  <p className={styles.certOrg}>{historyItem.organization}</p>
                  <div className={styles.certFooter}>
                    <span className={styles.certDate}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {historyItem.issueddate}
                    </span>
                    <span className={styles.certStatus}>Completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>💻</div>
          <div className={styles.statNumber}>{skills.length}+</div>
          <div className={styles.statLabel}>Technologies</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📜</div>
          <div className={styles.statNumber}>{history.length}+</div>
          <div className={styles.statLabel}>Certifications</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>⏱️</div>
          <div className={styles.statNumber}>3+</div>
          <div className={styles.statLabel}>Years Learning</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎯</div>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Dedication</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;