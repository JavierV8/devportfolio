
import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

import { initStore } from "../store/index";
import * as actions from '../store/actions/index';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        let isAuth, isAdmin;
        process.browser ?
            await ctx.store.dispatch(actions.clientAuth())
            :
            await ctx.store.dispatch(actions.serverAuth(ctx.req));
        ctx.store.getState().auth.token != undefined ? isAuth = true : isAuth = false;
        ctx.store.getState().auth.isAdmin != undefined ? isAdmin = true : isAdmin = false;
        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
        const auth = { isAuth, isAdmin };
        return { pageProps, auth };
    }

    render() {
        const { Component, pageProps, store, auth } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} auth={auth} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initStore)(MyApp);
