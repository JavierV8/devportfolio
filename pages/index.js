import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react';
import Typed from 'react-typed';
import Word_Carousel from '../components/Word_Carousel';
import {IndexStyle} from '../styles/indexStyle';


export default function Home() {
    const faceBox = useRef(null);
    const [boxWidth, setBoxWidth] = useState(0);
    const [imageSize, setImageSize] = useState(0);
    useEffect(() => {
        const resizeHandler = () => {
            console.log("EEE", boxWidth)
            setBoxWidth(faceBox.current.offsetWidth);
            setImageSize(faceBox.current.offsetWidth / 6);
        }
        window.addEventListener('resize', resizeHandler);
        resizeHandler();

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const images = [];
    for (let i = 1; i <= 36; i++) (
        images.push(<img style={{ transform: `0px`, width: imageSize-0.5 }} alt="resized image" id={`image_${i}`} className="imageCara" src={`../static/images/cara/Index_${i}.png`} />)
    )

    return (
        <IndexStyle boxWidth={boxWidth}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
            </style>
            <div className="index-face-box" ref={faceBox}>{images}</div>
            <div className="index-text-box" id="index-tex-tbox-id">
                <div className="index-text-1">Hi Im</div>
                <div className="index-text-2">Javier Sanchez</div>
                <Word_Carousel />
                <div className="index-text-3">
                    Passionate about information technologies and Self-learning software engineering.
                </div>
                <div className="index-text-4">
                    <Typed
                        loop
                        typeSpeed={80}
                        backSpeed={10}
                        strings={["Front-End thenclogies JavaScript | React | CSS | HTML", "Back-End techncoligies NodeJS | Express | NOSQL | SQL", "DevTools"]}
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
                <p>GitHUb</p>
                <p>Email</p>
                <button className="index-button">about me</button>
                <button className="index-button live">live projects</button>
            </div>
        </IndexStyle>
  )
}
