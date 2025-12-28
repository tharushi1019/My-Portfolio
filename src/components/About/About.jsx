import React, { useState, useEffect, useRef } from 'react';
import styles from './About.module.css';
import services from '../../data/services.json';
import { getImageUrl } from '../../utils';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('services');
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
      id="about"
    >
      <div className={styles.header}>
        <span className={styles.tagline}>Get To Know More</span>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          A passionate developer dedicated to creating innovative solutions and exceptional user experiences
        </p>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎓</div>
          <div className={styles.statContent}>
            <h3>Education</h3>
            <p>BSc (Hons) IT</p>
            <span>Horizon Campus</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📊</div>
          <div className={styles.statContent}>
            <h3>GPA</h3>
            <p>3.79/4.0</p>
            <span>Current Standing</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🚀</div>
          <div className={styles.statContent}>
            <h3>Projects</h3>
            <p>8+ Completed</p>
            <span>Full-Stack & AI</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📜</div>
          <div className={styles.statContent}>
            <h3>Certifications</h3>
            <p>10+ Courses</p>
            <span>Verified Skills</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className={styles.bioSection}>
        <div className={styles.bioImage}>
          <img 
            src={getImageUrl("about/aboutImage1.png")} 
            alt="Tharushi Nimnadi working" 
            className={styles.aboutImage}
          />
          <div className={styles.imageGlow}></div>
        </div>
        <div className={styles.bioContent}>
          <h3 className={styles.bioTitle}>Who I Am</h3>
          <p className={styles.bioText}>
            I'm a <span className={styles.highlight}>passionate full-stack developer</span> and third-year IT undergraduate 
            specializing in creating innovative solutions that blend <span className={styles.highlight}>cutting-edge technology</span> with 
            exceptional user experiences.
          </p>
          <p className={styles.bioText}>
            Currently working on <span className={styles.highlight}>BrandyBot</span>, an AI-powered branding toolkit that 
            combines machine learning with creative design. I thrive on turning complex problems into elegant, 
            user-friendly applications.
          </p>
          <div className={styles.bioHighlights}>
            <div className={styles.bioHighlight}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17L4 12"/>
              </svg>
              <span>Final-year IT Student at Horizon Campus</span>
            </div>
            <div className={styles.bioHighlight}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17L4 12"/>
              </svg>
              <span>Specializing in React, Node.js & AI/ML Integration</span>
            </div>
            <div className={styles.bioHighlight}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17L4 12"/>
              </svg>
              <span>Open to opportunities and collaborations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className={styles.servicesSection}>
        <h3 className={styles.servicesTitle}>What I Do</h3>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.serviceCard}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIconWrapper}>
                  <span className={styles.serviceEmoji}>{service.emoji}</span>
                  <img src={getImageUrl(service.icon)} alt={`${service.title} icon`} />
                </div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceTech}>
                {service.technologies.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.serviceGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;