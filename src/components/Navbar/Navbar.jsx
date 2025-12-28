import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a 
          className={styles.logo} 
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
        >
          <span className={styles.logoIcon}>{'<TN/>'}</span>
          <span className={styles.logoText}>Tharushi</span>
        </a>

        <div className={styles.menu}>
          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
            <li>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className={activeSection === 'about' ? styles.active : ''}
              >
                <span className={styles.menuIcon}>👤</span>
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                href="#experience"
                onClick={(e) => handleNavClick(e, '#experience')}
                className={activeSection === 'experience' ? styles.active : ''}
              >
                <span className={styles.menuIcon}>💡</span>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className={activeSection === 'projects' ? styles.active : ''}
              >
                <span className={styles.menuIcon}>🚀</span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={activeSection === 'contact' ? styles.active : ''}
              >
                <span className={styles.menuIcon}>📧</span>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <a 
            href="https://github.com/tharushi1019" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubBtn}
            aria-label="Visit GitHub profile"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill}></div>
      </div>
    </nav>
  );
};

export default Navbar;