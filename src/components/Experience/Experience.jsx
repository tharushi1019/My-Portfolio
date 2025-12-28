import { useState, useEffect, useRef } from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      <h2 className={styles.title}>Skills and Certifications</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div 
              key={id} 
              className={styles.skill}
              style={{ '--delay': `${id * 0.05}s` }}
            >
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                <div className={styles.skillGlow}></div>
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li 
              key={id} 
              className={styles.historyItem}
              style={{ '--delay': `${id * 0.1}s` }}
            >
              <div className={styles.certIconWrapper}>
                <img 
                  src={getImageUrl(historyItem.imageSrc)} 
                  alt={`${historyItem.organization} Logo`}
                />
              </div>
              <div className={styles.historyItemDetails}>
                <h3>{historyItem.Certification}</h3>
                <p className={styles.organization}>{historyItem.organization}</p>
                <p className={styles.date}>{historyItem.issueddate}</p>
              </div>
              <div className={styles.certBadge}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;