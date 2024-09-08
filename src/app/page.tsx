import React from 'react';
import Introduction from './components/cards/introduction/Introduction';
import "./styles/globals.css";
import ResumeButton from './components/downloadButton/DownloadButton';
import SkillCard from './components/cards/skillCard/SkillCard';
import Projects from './components/cards/projects/projects';
import ContactCard from './components/cards/contact/ContactCard';

const myProjects = [
  {
    title: '2D-Game - slice of worklife',
    github: 'https://github.com/crtneko97/Examens_Arbete_2DJAVA/tree/master',
    languages: ['Java'],
    frameworks: [''],
    description: '2D game for my school project, a level based game that is not fully complete. Pixxels made in Aesperite, sound recorded with a webcam and Audio edited in audacity.',
    image: '/press6.png', // Replace with actual image path
  },
  {
    title: 'Forum page',
    github: 'https://github.com/crtneko97/JavaEeProject',
    languages: ['Java', 'CSS', 'HTML', 'MYSQL'],
    frameworks: ['GRADLE', 'SPRINGBOOT'],
    description: 'A online forum built for my 2D-Game, to keep a community updated aswell, they can contribute with feedback from the game, or genereal forum discussions.',
    image: '/onlineforum.png', // Replace with actual image path
  },
  {
    title: 'Weather api',
    github: 'https://github.com/crtneko97/WebbservicesJ22SK/tree/master',
    languages: ['Java', 'MYSQL'],
    frameworks: ['MAVEN', 'SPRINGBOOT'],
    description: '',
    image: '/weather.png', // Replace with actual image path
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
      <ContactCard />
    </main>
  );
};

export default Home;
