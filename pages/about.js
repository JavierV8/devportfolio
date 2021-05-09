import React, {useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AboutStyleLandscape, AboutStylePotrait } from '../styles/AboutStyle';

const AboutMe = () => {
    const imgRef = useRef(null);
    const [isPotrait, setIsPotrait] = useState(false);
    const [isMobile, setIsmobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            setIsmobile(true);
           }
    }, [])

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
        }, 500);
        const animation = () => {
            setTimeout(() => {
                imgRef.current.style.transform = 'translateX(0%)';
            }, 600);
        }

        window.addEventListener("orientationchange", animation);

        return () => {
            window.removeEventListener("orientationchange", animation);
        }

    }, [isPotrait]);

    const AboutStyle = isPotrait ? AboutStylePotrait : AboutStyleLandscape;
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <AboutStyle isMobile={isMobile}>
                <div className="about-image">
                {!isPotrait && <h1>About Me</h1>}
                   <div className="about-image-box"><img src={`../static/images/about.png`} ref={imgRef}></img></div>
                </div>
                <div className="about-text">
                    {isPotrait ? <h1>About Me</h1> : <h1>...</h1>}
                    <h3>Lorem ipsum odor amet, consectetuer adipiscing elit.</h3>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes ridiculus malesuada inceptos; mi orci per senectus magna. Inceptos nec feugiat turpis; neque scelerisque turpis mi. Potenti quam placerat a ex eleifend ridiculus vel mollis. Erat inceptos velit nulla condimentum nec, eu sodales. Aptent suscipit litora torquent fusce et inceptos. Justo urna tempor ullamcorper; turpis donec pellentesque commodo.</p>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes ridiculus malesuada inceptos; mi orci per senectus magna. Inceptos nec feugiat turpis; neque scelerisque turpis mi. Potenti quam placerat a ex eleifend ridiculus vel mollis. Erat inceptos velit nulla condimentum nec, eu sodales. Aptent suscipit litora torquent fusce et inceptos. Justo urna tempor ullamcorper; turpis donec pellentesque commodo.</p>
                </div>
                <button className="about-goHome-button" onClick={() => router.push('/')}>{'Go Home'}</button>
            </AboutStyle>
        </>
    )
}

export default AboutMe;