import styled, { keyframes } from 'styled-components';

export const AboutStyle = styled.div`
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