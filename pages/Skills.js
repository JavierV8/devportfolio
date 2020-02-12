import React from "react";
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const Skills = () => {
  const { auth } = props;
  return (
    <BaseLayout auth={auth} className="cover">
      <BasePage className="skills-page" title="Skills">
      </BasePage>
    </BaseLayout>
  );
};

export default Skills;
