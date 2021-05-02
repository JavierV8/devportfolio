import React from 'react';
import { ProjectsStyle } from '../styles/porjectsStyle';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
        <ProjectsStyle>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ProjectsStyle>
        </div>

    );
};

export default Projects;