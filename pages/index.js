import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react';
import Typed from 'react-typed';
import { useRouter } from 'next/router'
import Word_Carousel from '../components/Word_Carousel';
import { LoadingIndexPageStyle, IndexStyleLandscape, IndexStylePotrait } from '../styles/indexStyle';

export default function Home() {
    const faceBox = useRef(null);
    const [boxWidth, setBoxWidth] = useState(0);
    const [imageSize, setImageSize] = useState(0);
    const [images, setImages] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(0);
    const [isPotrait, setIsPotrait] = useState(false);
    const router = useRouter()

    useEffect(() => {
        const resizeHandler = () => {
            if(window.innerHeight > window.innerWidth){
                setIsPotrait(true);
                setBoxWidth(window.innerHeight);
                setImageSize(window.innerHeight / 6);
            } else {
                setIsPotrait(false);
                setBoxWidth(faceBox.current.offsetWidth);
                setImageSize(faceBox.current.offsetWidth / 6);
            }
        }
        window.addEventListener('resize', resizeHandler);
        resizeHandler();

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    useEffect(() => {
        const imagess = [];
        for (let i = 1; i <= 36; i++) {
            const random1 = Math.floor(Math.random() * (600 - -600 + 1)) + -600;
            const random2 = Math.floor(Math.random() * (600 - -600 + 1)) + -600;
            const styles = {
                transform: `translate(${random1}px, ${random2}px)`, 
                width: imageSize - 1,
            };
            imagess.push(<img style={styles} alt="resized image" id={`image_${i}`} className="imageCara" src={`../static/images/cara/Index_${i}.png`} onLoad={() => setImageLoaded(img => img + 1)} />)
        }
        setImages(imagess);
    }, [imageSize]);

    if (imageLoaded > 35) {
        setTimeout(function () {
            for (let i = 1; i <= 36; i++) {
                document.getElementById(`image_${i}`).style.transition = 'all 2s';
                document.getElementById(`image_${i}`).style.transform = `translate(${0}px, ${0}px)`;
                document.getElementById(`image_${i}`).style.width = imageSize - 0.5;
            }
        }, 50);
    }

    const IndexStyle = isPotrait ? IndexStylePotrait : IndexStyleLandscape;

    return (
        <>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            </Head>
            <LoadingIndexPageStyle isVisible={imageLoaded < 36}><div>Loading...</div></LoadingIndexPageStyle>
            <IndexStyle boxWidth={boxWidth} isVisible={imageLoaded < 36}>
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
                <button className="index-button" onClick={() => router.push('/about')}>about me</button>
                <button className="index-button live">live projects</button>
            </div>
            </IndexStyle>
        </>
    )
}
