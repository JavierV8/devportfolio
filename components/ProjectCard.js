import React from 'react';
import {ProjectCardStyle} from '../styles/ProjectCardStyle';

const ProjectCard = props => {
    const { image, subtitle, text, demo_url, gitHub_url } = props;
    return (
        <ProjectCardStyle>
            <img src={`../static/images/${image}`}></img>
            <h4>{subtitle}</h4>
            <p>{text}</p>
            <button onClick={() => window.open(demo_url)}>Live Demo</button>
            <button className="project-card-button-github" onClick={() => window.open(gitHub_url)}>GitHub</button>
        </ProjectCardStyle>
    )
}

export default ProjectCard;