import React from 'react';
import { ProjectsStyle } from '../styles/porjectsStyle';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
    return (
        <ProjectsStyle>
            <h1>Projects</h1>
            <ProjectCard />
        </ProjectsStyle>
    );
};

export default Projects;