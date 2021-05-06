import React from 'react';
import {ProjectCardStyle} from '../styles/ProjectCardStyle';

const ProjectCard = props => {
    const { image, subtitle, text, demo_url, gitHub_url } = props;
    return (
        <ProjectCardStyle>
            <img src={`../static/images/${image}`}></img>
            <h4>{subtitle}</h4>
            <p>{text}</p>
            <button>Live Demo</button>
            <button className="project-card-button-github">GitHub</button>
        </ProjectCardStyle>
    )
}

export default ProjectCard;