import React from 'react';
import { AboutStyle } from '../styles/AboutStyle';

const AboutMe = () => {

    return (
        <AboutStyle>
            <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
                </style>
            <div>
                <img src={`../static/images/about.png`}></img>
            </div>
            <div>
                <h1>About Me</h1>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes ridiculus malesuada inceptos; mi orci per senectus magna. Inceptos nec feugiat turpis; neque scelerisque turpis mi. Potenti quam placerat a ex eleifend ridiculus vel mollis. Erat inceptos velit nulla condimentum nec, eu sodales. Aptent suscipit litora torquent fusce et inceptos. Justo urna tempor ullamcorper; turpis donec pellentesque commodo.</p>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes ridiculus malesuada inceptos; mi orci per senectus magna. Inceptos nec feugiat turpis; neque scelerisque turpis mi. Potenti quam placerat a ex eleifend ridiculus vel mollis. Erat inceptos velit nulla condimentum nec, eu sodales. Aptent suscipit litora torquent fusce et inceptos. Justo urna tempor ullamcorper; turpis donec pellentesque commodo.</p>
               
            </div>
        </AboutStyle>
    )
}

export default AboutMe;