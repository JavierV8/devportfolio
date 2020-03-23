import React from 'react';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';

export default role => Component => 
    class withAuth extends React.Component {
    
        static async getInitialProps( args ) {
            const PageProps = await Component.getInitialProps && await Component.getInitialProps(args);
            return { ...PageProps };
        }
        verifyAuth() {
            const { isAuth, isAdmin } = this.props.auth;
            let content = null;
            let isAuthorized = false;
    
            if(role=="isAdmin") {
                if(isAdmin) { isAuthorized = true};
            }else {
                isAuthorized = true;
            }
            if (!isAuth ) {
                content =(<BaseLayout auth={isAuth} className="cover">
                                <BasePage>
                                    <h1>You are not AUTHENTICATED. Please login to acces this page</h1>
                                </BasePage>
                              </BaseLayout>);
            }else if (!isAuthorized) {
                content =(<BaseLayout auth={isAuth} className="cover">
                                <BasePage>
                                    <h1>You are not AUTHORIZATED. You do not have permision to visit this page</h1>
                                </BasePage>
                              </BaseLayout>);
            } else {
                content =(<Component {...this.props} />)
            }
            return content;
        }
        render() {
            return this.verifyAuth()
        }
    }
    

