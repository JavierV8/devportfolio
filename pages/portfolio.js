
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';
import { Button } from 'reactstrap';
import PortfolioCard from '../components/portfolios/PortfolioCard';
import { Router } from '../routes';
import { getPortfolios, deletePortfolio } from '../store/actions/Portafolio';

class Portfolio extends React.Component {

  static async getInitialProps() {
    let portfolios = [];
    try {
      portfolios = await getPortfolios();
    } catch (err) {
      console.error(err);
    }
    return { portfolios };

  }

  navigateToEdit(portfolioId, e) {
    e.stopPropagation();
    Router.push({
      pathname: '/portfolioEdit',
      query: { id: portfolioId },
    })
  }

  displayDeleteWarning(portfolioId, e) {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio???');
    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute('/portfolio');
      })
      .catch(err => console.error(err));
  }

  renderPortfolios(portfolios) {
    const { isAuth, isAdmin } = this.props.auth;
    return portfolios.map((portfolio, index) => {
      return (
        <PortfolioCard className="portfolio-card" portfolio={portfolio}>
          {isAuth && isAdmin ?
            <React.Fragment>
              <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)} color="warning">Edit</Button>{' '}
              <Button onClick={(e) => this.displayDeleteWarning(portfolio._id, e)} color="danger">Delete</Button>
            </React.Fragment>
            :
            null
          }
        </PortfolioCard>
      )
    })
  }

  render() {
    const { portfolios, auth } = this.props;

    return (
      <BaseLayout auth={auth} className="portfolio-cover">
        <BasePage className="portfolio-page bounceInRight" title="Portfolio">
          <p className="portfolio-text">
            Feel free to see some of my code... Some concepts of software engineering that i like to share with the
            community:
          </p>
          <div className="portfolio-container">
            {this.renderPortfolios(portfolios)}
          </div>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolio;
