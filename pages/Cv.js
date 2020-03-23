import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';


const Cv = props => {
    const { auth } = props;
    return (
        <BaseLayout auth={auth}>
            <BasePage title='Get my CV' className="cv-page">
                <div className="cv-title"></div>
                <iframe src="../static/CV_jav.pdf"></iframe>
            </BasePage>
        </BaseLayout>
    )
}

export default Cv;