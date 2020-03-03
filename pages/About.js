import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const About = props => {
  const { auth } = props;
  return (
    <BaseLayout auth={auth}>
      <BasePage className="about-page">
        <div className="about-section">
          <div className="left-side bounceInLeft">

          </div>
          <div className="right-side bounceInRight">
            <h1 className="about-title">About me</h1>
            <h5 className="about-subtitle">My name is Javier Sanchez. I currently work as a software engineer in control systems.</h5>
            <p className="about-subsubTitle">
              I have a degree in 'Robotics and Computing Science' and experience working
              on a wide range of technologies and projects from PLC,s for industrial enviroment to
              modern mobile and web applications in React.
            </p>
            <p className="about-subsubTitle">
              I love Programming algorithms and developt solutions, but olso design UI effects, animations and creating
              intuitive, dynamic user experiences. I olso tries to learn new  thecnologies and acquired advanced technical
              knowledge. To that end, my new challenge is to immerse myself in the incredible world of data science and
              learn this branch of science that is already the present and certainly predicts the  future.
            </p>
            <p className="about-subsubTitle">
              As a software enthiusast I always will continue to pursue those engaging challenges and build software to
              contribute to the open source community.
            </p>
          </div>

        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default About;


