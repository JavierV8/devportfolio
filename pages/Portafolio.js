import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

class Portfolio extends React.Component {

  render() {
   
    return (
      <BaseLayout auth={this.props.auth} className="cover">
      <BasePage className="portfolio-page" title="Portfolio">
      </BasePage>
    </BaseLayout>
    )
  }
}

export default Portfolio;
