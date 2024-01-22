import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <a target="blank" href="https://github.com/LeonardoFMiranda"><FaGithub size={24} /></a>
        </li>
        <li>
          <a target="blank" href="https://www.linkedin.com/in/leonardo-f-miranda/"><FaLinkedin size={24} /></a>
        </li>
      </ul>
      <p className={styles.copyRight}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
