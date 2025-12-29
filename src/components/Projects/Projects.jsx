import React, { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
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

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.flatMap(p => 
    p.skills.slice(0, 2).map(s => s.toLowerCase())
  ))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => 
        p.skills.some(s => s.toLowerCase() === filter)
      );

  return (
    <section 
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`} 
      id="projects"
    >
      <div className={styles.header}>
        <span className={styles.tagline}>My Work</span>
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Explore my latest work in web development, AI/ML integration, and creative design solutions
        </p>
      </div>

      {/* Filter Tabs */}
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          <span className={styles.filterIcon}>🌟</span>
          <span>All Projects</span>
          <span className={styles.filterCount}>{projects.length}</span>
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'react' ? styles.active : ''}`}
          onClick={() => setFilter('react')}
        >
          <span className={styles.filterIcon}>⚛️</span>
          <span>React</span>
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'python' ? styles.active : ''}`}
          onClick={() => setFilter('python')}
        >
          <span className={styles.filterIcon}>🐍</span>
          <span>Python</span>
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'javascript' ? styles.active : ''}`}
          onClick={() => setFilter('javascript')}
        >
          <span className={styles.filterIcon}>💻</span>
          <span>JavaScript</span>
        </button>
      </div>

      <div className={styles.projects}>
        {filteredProjects.map((project, id) => (
          <ProjectCard 
            key={id} 
            project={project}
            style={{ '--delay': `${id * 0.1}s` }}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{projects.length}+</div>
          <div className={styles.statLabel}>Academic & Personal Projects</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statLabel}>Technologies Explored</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>3+</div>
          <div className={styles.statLabel}>AI/ML Projects</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;