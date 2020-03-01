import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import Router from 'next/router';
import Spinner from '../components/Spinner/Spinner';
import useForm from "react-hook-form";

const Login = props => {
    const { auth } = props;
    const { handleSubmit, register, errors } = useForm();
    const submitLogin = e => {
        let isSignup = false;
        props.onAuth(e.Password, e.Name, isSignup);
    }

    let loading = null;
    if (props.isAuthenticated) Router.push('/index');
    if (props.loading) loading = <Spinner />
    return (
        <BaseLayout auth={auth}>
            <BasePage className="login-page">
                {loading}
                <div className="ContainerLogin">
                    <form onSubmit={handleSubmit(submitLogin)}>

                        <input placeholder="Name" name="Name" ref={register({ required: true })} />
                        {errors.Name && 'Name is required.'}

                        <input placeholder="Password" name="Password" ref={register({ required: true })} />
                        {errors.Password && 'Password is required.'}
                        <button type="submit">Sign In</button>
                    </form>
                    <p className="license">(C) 2019 All Rights Reserved. Project Designed and created by JaviSan</p>
                </div>
            </BasePage>
        </BaseLayout>
    )

}
const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        loading: state.auth.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (password, name, isSignup) => dispatch(actions.auth(password, name, isSignup)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);