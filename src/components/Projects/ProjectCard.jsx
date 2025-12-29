import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, featured },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Overlay */}
      <div className={styles.imageWrapper}>
        <img 
          src={getImageUrl(imageSrc)}
          alt={`${title} preview`}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.imageOverlay}>
          <div className={styles.quickActions}>
            <a 
              href={demo} 
              className={styles.quickAction}
              target='_blank'
              rel='noopener noreferrer'
              aria-label="View demo"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </a>
            <a 
              href={source} 
              className={styles.quickAction}
              target='_blank'
              rel='noopener noreferrer'
              aria-label="View source code"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Featured Badge */}
        {featured && (
          <div className={styles.featuredBadge}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {/* Skills Tags */}
        <div className={styles.skillsWrapper}>
          <ul className={styles.skills}>
            {skills.slice(0, 4).map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
            {skills.length > 4 && (
              <li className={styles.skillMore}>+{skills.length - 4}</li>
            )}
          </ul>
        </div>

        {/* Action Links */}
        <div className={styles.links}>
          <a 
            href={demo} 
            className={`${styles.link} ${styles.demoLink}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Live Demo</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
          <a 
            href={source} 
            className={`${styles.link} ${styles.sourceLink}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Source Code</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && <div className={styles.cardGlow}></div>}
    </div>
  );
};

export default ProjectCard;