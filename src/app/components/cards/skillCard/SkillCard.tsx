'use client'
import React, { useState, useEffect, useRef } from 'react';
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
  // Explicitly type the ref to point to an HTMLDivElement or null
  const skillCardRef = useRef<HTMLDivElement>(null);

  const toggleSkillCard = () => {
    setIsOpen(!isOpen);
  };

  // Close the popup when clicking outside of the skill card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the ref element
      if (skillCardRef.current && !skillCardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay when card is open */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}

      <div
        className={`${styles.skillCardContainer} ${isOpen ? styles.open : ''}`}
        onClick={toggleSkillCard}
        ref={skillCardRef}
      >
        {/* Header that triggers dropdown */}
        <div className={styles.skillCardHeader}>
          <h3>My Skills</h3>
          <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
        </div>

        {/* Dropdown content */}
        {isOpen && (
          <ul className={styles.skillList}>
            {skills.map((skill) => (
              <li key={skill.name} className={`${styles.skillItem} ${styles.fallIn}`}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SkillCard;
