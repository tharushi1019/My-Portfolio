import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage1.png")} 
                 alt="Me sitting with a laptop" 
                 className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} 
                         alt="cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Web Development</h3>
                        <p>
                        I specialize in creating dynamic and responsive web applications using modern technologies like React.js, HTML, CSS, and JavaScript. 
                        I am always keen to learn new frameworks and libraries to enhance my skill set.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} 
                         alt="server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Development</h3>
                        <p>
                        I have experience with server-side programming and database management using PHP and MySQL.
                        I enjoy building robust back-end systems that support seamless user experiences.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} 
                         alt="ui icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Design</h3>
                        <p>
                        I am passionate about creating user-centered designs. My goal is to enhance user experience 
                        by designing intuitive interfaces using tools like Adobe XD and Figma.
                        </p>
                    </div>
                </li>
            </ul> 
        </div>
    </section>
  )
};

export default About;