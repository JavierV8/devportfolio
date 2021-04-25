import styled, { keyframes } from 'styled-components';

export const AboutStyleLandscape = styled.div`
    display: flex;
    background-color: #dbdbdb;
    div {
        flex: 1;
        height: 100vh;
    }
    img {
        width: 50%;
        position: absolute;
        bottom: 0;
    }

    h1 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 3vw;
        font-weight: 600;
        color: black;
        width: 80%;
        margin: auto;
        margin-top: 5vw;
    }
    p {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 1.5vw;
        font-weight: 200;
        color: black;
        width: 80%;
        margin: auto;
        margin-top: 1vw;
    }
`

export const AboutStylePotrait = styled.div`
    display: block;
    background-color: #dbdbdb;
    height: 100vh;
    div {
        flex: 1;
        height: 100vh;
        position: absolute;
        background: transparent;
    }
    .about-image {
        height: 90vw;
        bottom: 0;
    }
    img {
        width: 100vw;
        z-index: 2;
        opacity: 0.5;
    }

    h1 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 8vw;
        font-weight: 600;
        color: black;
        width: 90%;
        margin: auto;
        margin-top: 8vh;
    }
    p {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 2.1vh;
        font-weight: 200;
        color: black;
        width: 90%;
        margin: auto;
        margin-top: 2vh;
        text-align: justify;
    }
`