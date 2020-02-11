import React from "react";
import App, { Container } from "next/app";
// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
       
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
