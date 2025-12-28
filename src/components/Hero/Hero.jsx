import { useState, useEffect } from 'react';
import styles from "./Hero.module.css";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ["Full-Stack Developer", "AI/ML Enthusiast", "UI/UX Designer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      {/* Animated Background Particles */}
      <div className={styles.particlesContainer}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            '--delay': `${i * 0.3}s`,
            '--duration': `${15 + Math.random() * 10}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`
          }} />
        ))}
      </div>

      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.greeting}>
          <span className={styles.wave}>👋</span>
          <span className={styles.hello}>Hello, I'm</span>
        </div>
        
        <h1 className={styles.title}>
          <span className={styles.nameGradient}>Tharushi Nimnadi</span>
        </h1>
        
        <div className={styles.roleContainer}>
          <span className={styles.roleLabel}>I'm a </span>
          <span className={styles.role} key={currentRole}>
            {roles[currentRole]}
          </span>
        </div>
        
        <p className={styles.description}>
          Passionate about building <span className={styles.highlight}>AI-powered solutions</span> and 
          beautiful web experiences. Currently crafting <span className={styles.highlight}>BrandyBot</span> – 
          an intelligent branding toolkit. Let's transform ideas into reality.
        </p>
        
        <div className={styles.ctaContainer}>
          <a href="mailto:tharushinimnadee19@gmail.com" className={styles.primaryBtn}>
            <span className={styles.btnText}>Let's Connect</span>
            <svg className={styles.btnIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <a href="#projects" className={styles.secondaryBtn}>
            <span className={styles.btnText}>View Projects</span>
          </a>
        </div>

        <div className={styles.socialLinks}>
          <a href="https://github.com/tharushi1019" target="_blank" rel="noopener noreferrer" 
             className={styles.socialIcon} aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/t-nimnadi/" target="_blank" rel="noopener noreferrer" 
             className={styles.socialIcon} aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper} style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}>
          <div className={styles.imageGlow}></div>
          <img 
            src="/My-Portfolio/assets/hero/heroImage1.png"
            alt="Tharushi Nimnadi - Full Stack Developer" 
            className={styles.heroImg}
          />
          <div className={styles.floatingBadge}>
            <span className={styles.statusDot}></span>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.mouseScroller}></div>
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;