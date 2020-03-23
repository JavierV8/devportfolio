import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Col } from 'reactstrap';
import { updatePortfolio, getPortfolioById } from '../store/actions/Portafolio';
import withAuth from '../hoc/withAuth';
import { Router } from '../routes';


class PortfolioEdit extends React.Component {
  static async getInitialProps({ query }) {
    let portfolio = {};
    try {
      portfolio = await getPortfolioById(query.id);
    } catch (error) {
      console.log("error");
    }
    return { portfolio };
  }

  constructor(props) {
    super();
    this.state = {
      error: undefined
    }
    this.updatePortfolio = this.updatePortfolio.bind(this);
  }

  async updatePortfolio(portfolioData) {
    const { portfolio } = this.props;
    const { title, image, tools, description, url } = portfolioData;
    portfolio.title = title;
    portfolio.image = image;
    portfolio.tools = tools;
    portfolio.description = description;
    portfolio.url = url;
    try {
      createPortfolio = await updatePortfolio(portfolio);
    } catch (error) {
      console.log("error");
    }
    Router.pushRoute('/portfolio');
  }

  render() {
    const { error } = this.state;
    const { portfolio, auth } = this.props;
    return (
      <BaseLayout auth={auth}>
        <BasePage className="portfolio-edit" title="Update Portfolio">
          <div>
            <Col md="6">
              <PortfolioCreateForm initialValues={portfolio} error={error} onSubmit={this.updatePortfolio} />
            </Col>
          </div>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('isAdmin')(PortfolioEdit);
