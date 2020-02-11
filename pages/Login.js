import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

class Login extends Component {
    render () {
        return (
            <BaseLayout auth={auth} className="cover">
                <BasePage>
                </BasePage>
            </BaseLayout>
        )
    };
}

export default Login;