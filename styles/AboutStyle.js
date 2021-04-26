import styled from 'styled-components';

export const AboutStyleLandscape = styled.div`
    display: flex;
    background-color: #dbdbdb;
    div {
        flex: 1;
        height: 100vh;
    }
    .about-text {
        overflow-Y: scroll;
    }
    .about-image {
    }
    .about-image-box {
        position absolute;
        left: 8%;
        width: 60%;
        height: 50%;
        bottom: 0;
    }
    img {
        width: 100%;
        position: absolute;
        bottom: 0;
        opacity: 0.7
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
    h3 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 2vw;
        font-weight: 200;
        width: 80%;
        margin: auto;
    }
    p {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 1.4vw;
        font-weight: 200;
        color: black;
        width: 80%;
        margin: auto;
        margin-top: 1vw;
        text-align: justify;
    }
`

export const AboutStylePotrait = styled.div`
    display: block;
    background-color: #dbdbdb;
    positon: fixed;
    div {
        flex: 1;
        height: 90vh;
        position: absolute;
        background: transparent;
    }
    .about-image {
        height: 100vw;
        bottom: -6%;
        position: fixed;
        width: 100vw;
        left: -5%;
    }
    .about-image-box {
        position relative;
        width: 100%;
        bottom: 0%;
        left: 5%;
    }
    img {
        position: absolute;
        width: 100%;
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
    h3 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 5vw;
        font-weight: 200;
        width: 90%;
        margin: auto;
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