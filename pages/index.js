import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react';
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
            </Head>
            <LoadingIndexPageStyle isVisible={imageLoaded < 36}><div>Loading...</div></LoadingIndexPageStyle>
            <IndexStyle boxWidth={boxWidth} isVisible={imageLoaded < 36}>
                <div className="index-face-box" ref={faceBox}>{images}</div>
                <div className="index-text-box" id="index-tex-tbox-id">
                <div className="index-text-1">Hi Im</div>
                <div className="index-text-2">Javier Sanchez</div>
                <Word_Carousel />
                <div className="index-text-3">
                    Passionate about information technologies and Self-learning software engineering.
                </div>
                <div className="index-links">
                    <div className="index-github" onClick={() => window.open("https://github.com/JavierV8")}>
                        <img alt="img" className="index-github-img" src={`../static/images/github.png`} />
                        <p className="index-info">GitHub</p>
                    </div>
                    <div className="index-github" onClick={() => window.open("https://codesandbox.io/u/JavierV8")}>
                        <img alt="img" className="index-codeSandBox-img" src={`../static/images/codesandbox.png`} />
                        <p className="index-info">CodeSandbox</p>
                    </div>
                    <div className="index-github" onClick={() => window.open("https://codesandbox.io/u/JavierV8")}>
                        <img alt="img" className="index-codeSandBox-img" src={`../static/images/codesandbox.png`} />
                        <p className="index-info">GitBook</p>
                    </div>
                </div>
               
                <button className="index-button" onClick={() => router.push('/about')}>about me</button>
            </div>
            <div className="index-portrait-bar"></div>
            </IndexStyle>
        </>
    )
}
