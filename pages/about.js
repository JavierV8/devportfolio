import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import { AboutStyleLandscape, AboutStylePotrait } from '../styles/AboutStyle';
const AboutMe = () => {
    const [isPotrait, setIsPotrait] = useState(false);

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

    const AboutStyle = isPotrait ? AboutStylePotrait : AboutStyleLandscape;
    return (
        <>
            <Head>
                <title>About</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
                </style>
            </Head>
            <AboutStyle>
                <div className="about-image animate__animated animate__bounceInLeft">
                   <div className="about-image-box"><img src={`../static/images/about.png`}></img></div>
                </div>
                <div className="about-text animate__animated animate__bounceInRight">
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