import React from 'react';
import { ProjectsStyle } from '../styles/porjectsStyle';
import ProjectCard from '../components/ProjectCard';
import { useRouter } from 'next/router';
import { projects } from '../static/projects';


const Projects = () => {
    const router = useRouter();
    const pro = projects.map(p => {
        return <ProjectCard image={p.image} subtitle={p.subtitle} text={p.text} demo_url={p.demo_url} gitHub_url={p.gitHub_url} />
    })
    console.log(projects)
    return (
        <ProjectsStyle>
        <h1>Projects</h1>
            {pro}
            <button className="projects-goHome-button" onClick={() => router.push('/')}>{'Go Home'}</button>
        </ProjectsStyle>
    );
};

export default Projects;