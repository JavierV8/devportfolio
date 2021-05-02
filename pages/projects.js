import React from 'react';
import { ProjectsStyle } from '../styles/porjectsStyle';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
    return (
        <ProjectsStyle>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ProjectsStyle>
    );
};

export default Projects;