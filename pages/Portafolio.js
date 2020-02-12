import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const Portfolio = props => {
  const { auth } = props;
    return (
      <BaseLayout auth={auth} className="cover">
        <BasePage className="portfolio-page" title="Portfolio">
        </BasePage>
    </BaseLayout>
    )
}

export default Portfolio;
