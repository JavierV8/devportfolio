import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';
import { Button } from 'reactstrap';
import Router from 'next/router';
import BaseLayout from '../components/layouts/BaseLayout';
import Word_Carousel from '../components/Word_Carousel/Word_Carousel';
import Spinner from '../components/Spinner/Spinner';

import 'bootstrap/dist/css/bootstrap.min.css';

const Index = props => {
    const { auth } = props;
    const [imageWdith, setImageWdith] = useState(null);
    const [isIniciated, setIsIniciated] = useState(true);

    const resizeFunction = () => {
        let widthPage = window.innerWidth;
        let heightPage = window.innerHeight;
        if (widthPage < heightPage) {
            let widhtScreen = window.innerHeight * 1.1;
            let imageWidht = widhtScreen / 6;
            setImageWdith(imageWidht)
            document.getElementById("image-index-id").style.height = "100%";
            document.getElementById("image-index-id").style.width = (widhtScreen) + "px";
            if (window.innerWidth < 450) {
                let widhtScreen = window.innerHeight;
                let imageWidht = widhtScreen / 6;
                setImageWdith(imageWidht)
                document.getElementById("image-index-id").style.height = "100%";
                document.getElementById("image-index-id").style.width = (widhtScreen) + "px";
            }
        } else {
            let imageWidht = (((window.innerWidth / 2) * 85 / 100) / 6);
            setImageWdith(imageWidht - 1)
            const widthBox = (window.innerWidth / 2) * 0.9;
            const porcent = (widthBox * 80) / 100;
            document.getElementById("image-index-id").style.height = porcent + "px";
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resizeFunction);
        resizeFunction();
        return () => {
            window.removeEventListener('resize', resizeFunction);
        };
    }, [resizeFunction]);
    const redirectPage = () => {
        Router.push('/about');
    }

    let imageStyle = [];
    let random1 = null;
    let random2 = null;
    let images1 = [];
    let images = [];
    if (isIniciated) {
        for (let i = 1; i < 38; i++) (
            random1 = Math.floor(Math.random() * (600 - -600 + 1)) + -600,
            random2 = Math.floor(Math.random() * (600 - -600 + 1)) + -600,
            imageStyle.push({ transform: `translate(${random1}px, ${random2}px)` })
        )
    } else {
        for (let i = 1; i < 38; i++) (
            imageStyle.push({ transform: `0px`, minWidth: imageWdith - 5 })
        )
    }
    for (let i = 1; i < 10; i++) (
        images1.push(<img style={imageStyle[i]} alt="resized image" id={`image_${i}`} className="imageCara" src={`../static/images/cara/Index_0${i}.jpg`} />)
    )
    for (let i = 10; i < 37; i++) (
        images.push(<img style={imageStyle[i]} alt="resized image" id={`image_${i}`} className="imageCara" src={`../static/images/cara/Index_${i}.jpg`} />)
    )

    const pageloaded = () => {

        setIsIniciated(false)
        setTimeout(function () {
            for (let i = 1; i < 37; i++) (
                document.getElementById(`image_${i}`).style.transform = `translate(${0}px, ${0}px)`
            )
        }, 10);
        document.getElementById("main-section-id").style.display = "flex";
        document.getElementById("image-index-id").style.display = "inline";
        document.getElementById("text-index-id").style.display = "inline";
    }

    let render = null;
    isIniciated ? render = <Spinner /> : render = null;
    return (
        <BaseLayout auth={auth} headerType="index">
            {render}
            <div className="main-section" id="main-section-id">
                <div md="6" className="image-index" id="image-index-id">
                    {images1}
                    {images}
                </div>
                <div md="6" className="text-index" id="text-index-id">
                    <div className="text-index-welcome" id="text-index-welcome-id">
                        <div className="text-index-welcome-1">Hi Im</div>
                        <div className="text-index-welcome-2">Javier Sanchez</div>
                        <Word_Carousel />

                        <div className="text-index-welcome-4">
                            Passionate about information technologies and Self-learning software engineering.
                                </div>
                        <div className="text-index-welcome-5">
                            <Typed
                                loop
                                typeSpeed={80}
                                backSpeed={10}
                                strings={["Front-End thenclogies JavaScript | CSS | HTML...", "Back-End thencoligies NodeJS | Express | MongoDB...", "IOT technologies Node-Red|Arduino|MQTT...", "Control systems technologies PLC|HMI|OPC-UA..."]}
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
                    <img alt="resized image" onLoad={pageloaded} src='../static/images/logos/github.png' className="github-img" onClick={() => window.open("https://github.com/javierV8")}></img>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Index;
