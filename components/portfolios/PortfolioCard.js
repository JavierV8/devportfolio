import React from 'react';
import { Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';

const PortfolioCard = props => {
  const { portfolio, children } = props;
  return (
    <Card className="portfolio-card">
      <CardHeader className="portfolio-card-header">{portfolio.title}</CardHeader>
      <CardBody className='cardBox'>
        <img src={`../../static/images/${portfolio.image}`} width='100%' />
        <p className="portfolio-card-tools">{portfolio.tools}</p>
        <CardText className="portfolio-card-text">{portfolio.description}</CardText>
        <div className="readMore">
          {children}
          <Button color="primary" className="gitHub-button" onClick={() => window.open(portfolio.url)}>GitHub</Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default PortfolioCard;