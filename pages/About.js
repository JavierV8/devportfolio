import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const About = props => {
  const { auth } = props;
  return (
    <BaseLayout auth={auth} className="cover">
      <BasePage className="about-page">
        <div className="about-section">
          <div className="left-side bounceInLeft">
            <img className="image-About" src='../static/images/cara.png'></img>
          </div>
          <div className="right-side bounceInRight">
            <h1 className="about-title">About me</h1>
            <h5 className="about-subtitle">My name is Javier Sanchez and I am an experienced software engineer.</h5>
            <div className="about-image-arround">
              <p className="about-subsubTitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
              <img className="image-About-2" src='../static/images/cara.png'></img>
            </div>

            <p className="about-subsubTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
            <p className="about-subsubTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
          </p>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default About;


