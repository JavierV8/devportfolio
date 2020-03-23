import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = props => {
    const { className, children, auth } = props;
    const headerType = props.headerType || 'default';
    const title = props.title || 'Javier Sanchez Portfolio';
    return (
        <div className="layout-container">
            <Head>
                <title>{title}</title>
                <meta name="description" content="My name is Javier Sanchez. I currently work as a software engineer in control systems. I have a degree in 'Robotics and Computing Science' and experience working on a wide range of technologies and projects from PLC,s for industrial enviroment to modern mobile and web applications in React." />
                <meta name="keywords" content="javi portfolio, javi developer, javi programming" />
                <meta property="og:title" content="Javi Sanchez - programmer, developer" />
                <meta property="og:locale" content="en_EU" />
                <meta property="og:url" content={`${process.env.BASE_URL}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="My name is Javier Sanchez and I am an experienced software engineer." />
                <link rel="icon" type="image/ico" href="/static/favicon.ico" />
            </Head>
            <Header className={`port-nav-${headerType}`} auth={auth} />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default BaseLayout;