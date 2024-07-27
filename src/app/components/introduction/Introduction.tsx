import React from 'react';
import Image from 'next/image';
import styles from './Introduction.module.css';
import profileImage from './git.jpg';
import { AboutMeProps } from './aboutme'; // Correct path without '.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand, faLinkedin as faLinkedinBrand } from '@fortawesome/free-brands-svg-icons';

const Introduction: React.FC<AboutMeProps> = ({ name, location, github, linkedin }) => {
  return (
    <div className={styles.introductionWrapper}>
      <div className={styles.introductionContainer}>
        <Image src={profileImage.src} alt={name} className={styles.profileImage} width={150} height={150} />
        <div className={styles.introductionContent}>
          <h1>{name}</h1>
          <p className={styles.location}>
            {location}
          </p>
          <a className={styles.github} href={github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubBrand} className={styles.icon} />
            GitHub
          </a>
          <a className={styles.linkedin} href={linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinBrand} className={styles.icon} />
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.breadcrumbContent}>
        <p className={styles.breadcrumb}>Hello! My name is Simon, and im a Java Full-stack Graduate. I finnished my 2year program at Stockholm tekniska institut June 2024.</p>
      </div>
    </div>
  );
}

export default Introduction;
