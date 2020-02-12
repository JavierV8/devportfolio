import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const Contact = props => {
   return (
    <BaseLayout auth={props.auth} className="cover">
      <BasePage className="contact-page" title="Contact">
      </BasePage>
    </BaseLayout>
    );
};

export default Contact;