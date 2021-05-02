import React from 'react';
import {ProjectCardStyle} from '../styles/ProjectCardStyle';

const ProjectCard = () => {
    return (
        <ProjectCardStyle>
            <img src={`../static/images/movieApp.png`}></img>
            <h4>Html, JavasScript, css</h4>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes ridiculus malesuada inceptos; mi orci per senectus magna. Inceptos nec feugiat turpis; neque scelerisque turpis mi. Potenti quam placerat a ex eleifend ridiculus vel mollis. Erat inceptos velit nulla condimentum nec, eu sodales. Aptent suscipit litora torquent fusce et inceptos. Justo urna tempor ullamcorper; turpis donec pellentesque commodo.</p>
            <button>Live Demo</button>
            <button className="project-card-button-github">GitHub</button>
        </ProjectCardStyle>
    )
}

export default ProjectCard;