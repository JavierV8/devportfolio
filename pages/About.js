import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const About = props => {
  const { auth } = props;
  return (
    <BaseLayout auth={auth} className="cover">
      <BasePage className="about-page" title="About">
      </BasePage>
    </BaseLayout>
  )
}

export default About;


