import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <BaseLayout auth={this.props.auth} className="cover" headerType="index">
                <div className="main-section">

                </div>
            </BaseLayout>
        )
    }
}

export default Index;
