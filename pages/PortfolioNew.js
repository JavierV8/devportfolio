import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';
import { Col } from 'reactstrap';
import withAuth from '../hoc/withAuth';
import { Router } from '../routes';

import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { createPortfolio } from '../store/actions/Portafolio';

const INITIAL_VALUES = {
    title: '',
    image: '',
    tools: '',
    description: ''
};

class PortfolioNew extends React.Component {
    constructor(props) {
        super();
        this.state = {
            error: undefined
        }
        this.savePortfolio = this.savePortfolio.bind(this);
    }

    async savePortfolio(portfolioData) {
        try {
            createPortfolio = await createPortfolio(portfolioData);
        } catch (error) {
            console.log("error");
        }
        Router.pushRoute('/portfolio');
    }

    render() {
        const { error } = this.state;
        const { auth } = this.props;
        return (
            <BaseLayout auth={auth}>
                <BasePage className="portfolio-create-page" title="Create New Portfolio">
                    <div>
                        <Col md="6">
                            <PortfolioCreateForm initialValues={INITIAL_VALUES} error={error} onSubmit={this.savePortfolio} />
                        </Col>
                    </div>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default withAuth('isAdmin')(PortfolioNew);