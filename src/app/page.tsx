import React from 'react';
import Introduction from './components/cards/introduction/Introduction';
import "./styles/globals.css";
import ResumeButton from './components/downloadButton/DownloadButton';
import SkillCard from './components/cards/skillCard/SkillCard';
import Projects from './components/cards/projects/projects';

const myProjects = [
  {
    title: 'Portfolio Website',
    github: 'https://github.com/yourusername/portfolio-website',
    languages: ['TypeScript', 'CSS'],
    frameworks: ['Next.js', 'React'],
    description: 'A personal portfolio website showcasing my skills and projects.',
    image: '/path/to/portfolio-image.jpg', // Replace with actual image path
  },
  {
    title: 'Portfolio Website',
    github: 'https://github.com/yourusername/portfolio-website',
    languages: ['TypeScript', 'CSS'],
    frameworks: ['Next.js', 'React'],
    description: 'A personal portfolio website showcasing my skills and projects.',
    image: '/path/to/portfolio-image.jpg', // Replace with actual image path
  },
  // Add more projects as needed
];

const Home = () => {
  return (
    <main>
      <Introduction name={'Simon Kern'} location={'Sweden/Stockholm'} github={'https://github.com/crtneko97'} linkedin={'https://www.linkedin.com/in/simonkern97/'} />    
      {/* Correct the component name and pass the correct props */}
      <ResumeButton title={'Download Resume'} link='/SimonKernCVwrd.pdf' />
      <SkillCard />
      <Projects project={myProjects} />
    </main>
  );
};

export default Home;
