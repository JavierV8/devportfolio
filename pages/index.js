import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';
import { Button } from 'reactstrap';
import Router from 'next/router';
import WordCarrousel from '../components/Word_Carousel/Word_Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = props => {
    const { auth } = props;
    const redirectPage = () => {
        Router.push('/about');
    }
    return (
        <BaseLayout auth={auth} className="cover" headerType="index">
            <div className="main-section">
                <div md="6" className="image-index" id="image-index-id">
                </div>
                <div md="6" className="text-index" id="text-index-id">
                    <div className="text-index-welcome" id="text-index-welcome-id">
                        <div className="text-index-welcome-1">Hi Im</div>
                        <div className="text-index-welcome-2">Javier Sanchez</div>
                        <WordCarrousel />
                        <div className="text-index-welcome-4">
                            Passionate about information technologiesand Self-learning software engineering through research & development.
                                </div>
                        <div className="text-index-welcome-5">
                            <Typed
                                loop
                                typeSpeed={80}
                                backSpeed={10}
                                strings={["Front-End thenclogies JavaScript | CSS | HTML", "Back-End thencoligies NodeJS | Express | MongoDB", "IOT technologies Node-Red|Arduino",]}
                                smartBackspace
                                shuffle={false}
                                backDelay={5000}
                                fadeOut={false}
                                fadeOutDelay={100}
                                loopCount={0}
                                showCursor
                                cursorChar="|"
                            />
                        </div>
                    </div>
                    <Button className="index-about-button" onClick={redirectPage}>about me</Button>
                </div>
                <div className="index-footer">
                    <img src='../static/images/logos/github.png' className="github-img" onClick={() => window.open("https://github.com/javierV8")}></img>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Index;
