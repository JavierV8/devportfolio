import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const About = () => {
  return (
    <BaseLayout auth={auth}>
      <BasePage className={`about-page ${className}`}>
      </BasePage>
    </BaseLayout>
  )
}

export default About;


