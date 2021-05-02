import React from 'react';
import { ProjectsStyle } from '../styles/porjectsStyle';
import ProjectCard from '../components/ProjectCard';
import { useRouter } from 'next/router';


const Projects = () => {
    const router = useRouter();
    return (
        <ProjectsStyle>
        <h1>Projects</h1>
            <ProjectCard image='canvas' />
            <ProjectCard image='hooks' />
            <ProjectCard image='image' />
            <ProjectCard image='movieApp' />
            <ProjectCard image='puzzle' />
            <ProjectCard image='storeApp' />
            <button className="projects-goHome-button" onClick={() => router.push('/')}>{'Go Home'}</button>
        </ProjectsStyle>
    );
};

export default Projects;