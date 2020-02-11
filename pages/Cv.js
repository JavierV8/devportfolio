import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const Cv = () => {
    return (
        <BaseLayout auth={props.auth} className="cover">
          <BasePage title='Get my CV' className="cv-page">
          </BasePage>
        </BaseLayout>
    )
}

export default Cv;