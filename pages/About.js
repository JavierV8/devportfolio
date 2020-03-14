import React, { useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';
import Spinner from '../components/Spinner/Spinner';

const About = props => {
  const { auth } = props;
  const [isIniciated, setIsIniciated] = useState(false);

  const pageloaded = () => {
    document.getElementById("left-side-id").classList.add("bounceInLeft");
    document.getElementById("right-side-id").classList.add("bounceInRight");
    document.getElementById("about-section-id").style.display = "inline";
    setIsIniciated(true);
  }
  let render = null;
  isIniciated ? render = null : render = <Spinner />;
  return (
    <BaseLayout auth={auth}>
      <BasePage className="about-page">
        {render}
        <div className="about-section" id="about-section-id">
          <div className="left-side" id="left-side-id">
            <img onLoad={pageloaded} className="image-About" src='../static/images/about.png'></img>
          </div>
          <div className="right-side" id="right-side-id">
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



