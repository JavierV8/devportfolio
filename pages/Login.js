import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

const Login = props => {
    const { auth } = props;
    return (
        <BaseLayout auth={auth} className="cover">
            <BasePage className="login-page" title="Login">
            </BasePage>
        </BaseLayout>
    )
}

export default Login;