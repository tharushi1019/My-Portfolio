import React, { useState, useEffect, useRef } from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
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
      id="about"
    >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src={getImageUrl("about/aboutImage1.png")} 
          alt="Me sitting with a laptop" 
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
            </div>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Development</h3>
              <p>
                I build dynamic, responsive web applications using React.js, Node.js, and modern 
                JavaScript frameworks. Experienced in creating scalable solutions with MongoDB, 
                Firebase, and RESTful APIs. Passionate about clean code and optimal performance.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
            </div>
            <div className={styles.aboutItemText}>
              <h3>AI & Machine Learning</h3>
              <p>
                Integrating AI/ML into web applications using TensorFlow, FastAPI, and Stable 
                Diffusion. Currently developing AI-powered solutions for branding and analytics. 
                Experienced in model training, deployment, and real-time inference.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/uiIcon.png")} alt="ui icon"/>
            </div>
            <div className={styles.aboutItemText}>
              <h3>UI/UX Design</h3>
              <p>
                Creating intuitive, user-centered designs with Figma and Adobe XD. Focused on 
                accessibility, responsive layouts, and modern design principles. I believe great 
                design is invisible – it just works beautifully.
              </p>
            </div>
          </li>
        </ul> 
      </div>
    </section>
  );
};

export default About;