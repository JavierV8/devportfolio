import React, {useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AboutStyleLandscape, AboutStylePotrait } from '../styles/AboutStyle';

const AboutMe = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const [isPotrait, setIsPotrait] = useState(false);
    const router = useRouter();
    const [isPortraid, setIsportraid] = useState(false);

    useEffect(() => {
        const resizeHandler = () => {
            if(window.innerHeight > window.innerWidth){
                setIsPotrait(true);
            } else {
                setIsPotrait(false);
            }
        }
        window.addEventListener('resize', resizeHandler);
        resizeHandler();

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            imgRef.current.style.transform = 'translateX(0%)';
            textRef.current.style.transform = 'translateX(0%)';
        }, 100);
        const animation = () => {
            setTimeout(() => {
                imgRef.current.style.transform = 'translateX(0%)';
                textRef.current.style.transform = 'translateX(0%)';
            }, 600);
        }
        const resizeHandler = () => {
            const isLandscape = window.innerWidth > window.innerHeight;
            setIsportraid(isLandscape);
        }

        window.addEventListener("orientationchange", animation);
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("orientationchange", animation);
            window.removeEventListener("resize", resizeHandler);
        }

    }, [isPortraid]);

    const AboutStyle = isPotrait ? AboutStylePotrait : AboutStyleLandscape;
    return (
        <>
            <Head>
                <title>About</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
                </style>
            </Head>
            <AboutStyle>
                <button className="about-goHome-button" onClick={() => router.push('/')}>Go Home</button>
                <div className="about-image">
                   <div className="about-image-box"><img src={`../static/images/about.png`} ref={imgRef}></img></div>
                </div>
                <div className="about-text" ref={textRef}>
                    <h1>About Me</h1>
                    <h3>Lorem ipsum odor amet, consectetuer adipiscing elit.</h3>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes ridiculus malesuada inceptos; mi orci per senectus magna. Inceptos nec feugiat turpis; neque scelerisque turpis mi. Potenti quam placerat a ex eleifend ridiculus vel mollis. Erat inceptos velit nulla condimentum nec, eu sodales. Aptent suscipit litora torquent fusce et inceptos. Justo urna tempor ullamcorper; turpis donec pellentesque commodo.</p>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes ridiculus malesuada inceptos; mi orci per senectus magna. Inceptos nec feugiat turpis; neque scelerisque turpis mi. Potenti quam placerat a ex eleifend ridiculus vel mollis. Erat inceptos velit nulla condimentum nec, eu sodales. Aptent suscipit litora torquent fusce et inceptos. Justo urna tempor ullamcorper; turpis donec pellentesque commodo.</p>
                
                </div>
            </AboutStyle>
        </>
    )
}

export default AboutMe;