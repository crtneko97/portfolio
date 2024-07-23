import React from 'react';
import Image from 'next/image';
import styles from './Introduction.module.css';
import profileImage from './git.jpg';
import { AboutMeProps } from './aboutme'; // Correct path without '.ts'

const Introduction: React.FC<AboutMeProps> = ({ name, location, role }) => {
  return (
    <div className={styles.introductionWrapper}>
      <div className={styles.introductionContainer}>
        <Image src={profileImage.src} alt={name} className={styles.profileImage} width={150} height={150} />
        <div className={styles.introductionContent}>
          <h1>{name}</h1>
          <p className={styles.location}>{location}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <div className={styles.breadcrumbContent}>
        <p className={styles.breadcrumb}>Home About Me</p>
      </div>
    </div>
  );
}

export default Introduction;
