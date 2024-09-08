import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { Project } from '../../../interfaces/project';

interface ProjectsProps {
  project: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ project }) => {
  return (
    <div className={styles.projectsWrapper}>
      {project.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
              width={150}
              height={150}
            />
          )}
          <div className={styles.projectContent}>
            <h2>{project.title}</h2>
            <p>
              <strong>Languages:</strong> {project.languages.join(', ')}
            </p>
            <p>
              <strong>Frameworks:</strong> {project.frameworks.join(', ')}
            </p>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
