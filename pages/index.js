import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';
import Word_Carousel from '../components/Word_Carousel';


export default function Home() {


    return (
        <div className="index-container" id="index-container-id">
            <div className="index-face-box" id="index-face-box-id"></div>
            <div className="index-text-box" id="index-tex-tbox-id">
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
                </div>
                <p>GitHUb</p>
                <p>Email</p>
                <p>Open Source projects</p>
                <button className="index-about-button">about me</button>
            </div>
        </div>
  )
}
