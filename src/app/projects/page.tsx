// src/app/projects/page.tsx
import React from 'react';
import Projects from '../components/cards/projects/projects'
import { Project } from '../interfaces/project';

const projectData: Project[] = [
    {
        title: "Project One",
        github: "https://github.com/user/project-one",
        languages: ["JavaScript", "TypeScript"],
        frameworks: ["React", "Next.js"],
        description: "This is a description for Project One.",
        image: "/path/to/image1.jpg"
    },
    {
        title: "Project Two",
        github: "https://github.com/user/project-two",
        languages: ["Python"],
        frameworks: ["Django"],
        description: "This is a description for Project Two.",
        image: "/path/to/image2.jpg"
    }
];

const Page: React.FC = () => {
    return (
        <div>
            <Projects project={projectData} />
        </div>
    );
}

export default Page;
