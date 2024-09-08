'use client'
import React, { useState } from 'react';
import styles from './SkillCard.module.css'; // Import your CSS module

const skills = [
    { name: 'JavaScript', icon: '🟨' },   // JavaScript Icon
    { name: 'TypeScript', icon: '🟦' },   // TypeScript Icon
    { name: 'React', icon: '⚛️' },        // React Icon
    { name: 'Next.js', icon: '🖥️' },      // Next.js Icon
    { name: 'CSS', icon: '🎨' },          // CSS Icon
    { name: 'Java', icon: '☕' },          // Java Icon
    { name: 'Spring Boot', icon: '🌱' },   // Spring Boot Icon
    { name: 'Gradle', icon: '📦' },        // Gradle Icon
    { name: 'Maven', icon: '📜' },         // Maven Icon
    { name: 'AWS', icon: '☁️' },          // AWS Icon
    { name: 'Vercel', icon: '🚀' },        // Vercel Icon
    { name: 'C#', icon: '🔷' },            // C# Icon
    { name: 'MySQL', icon: '🗄️' },        // MySQL Icon
    { name: 'NoSQL', icon: '📂' },         // NoSQL Icon
    { name: 'PostgreSQL', icon: '🐘' },    // PostgreSQL Icon
    { name: 'Linux', icon: '🐧' },         // Linux Icon
    { name: 'Bash', icon: '💻' },          // Bash Icon
    // Add more skills as needed
  ];
  

const SkillCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSkillCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.skillCardContainer}>
      {/* Header that triggers dropdown */}
      <div className={styles.skillCardHeader} onClick={toggleSkillCard}>
        <h3>My Skills</h3>
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <ul className={styles.skillList}>
          {skills.map((skill) => (
            <li key={skill.name} className={styles.skillItem}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillCard;
