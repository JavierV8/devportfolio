import React from 'react';
import { ProjectsStyle } from '../styles/porjectsStyle';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
        <ProjectsStyle>
            <ProjectCard image='canvas' />
            <ProjectCard image='hooks' />
            <ProjectCard image='image' />
            <ProjectCard image='movieApp' />
            <ProjectCard image='puzzle' />
            <ProjectCard image='storeApp' />
        </ProjectsStyle>
        </div>

    );
};

export default Projects;