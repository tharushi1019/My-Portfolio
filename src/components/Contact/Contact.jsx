import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            <h4>I'm always open to discussing new opportunities or collaborations.</h4>
            <br></br>
            <h6>&#169; Tharushi Nimnadi 2024</h6>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon"/>
                <a href="mailto:tharushinimnadee19@gmail.com">tharushinimnadee19@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkediIn Icon"/>
                <a href="https://www.linkedin.com/in/t-nimnadi/">linkedin.com/tharushinimnadi</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon"/>
                <a href="https://github.com/tharushi1019">github.com/tharushinimnadi</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact