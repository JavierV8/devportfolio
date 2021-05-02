import styled from 'styled-components';

export const ProjectCardStyle = styled.div`
    border: 1px solid red;
    width: 30%;
    min-width: 30%;
    height: 35vw;
    margin: auto;
    margin-bottom: 2vw;
    border-radius: 2%;
    overflow: hidden;
    position: relative;

    @media only screen and (max-width : 1050px) {
        width: 32%;
        min-width: 32%;
        max-width: 32%;
        height: 38vw;
    }

    @media only screen and (max-width : 650px) {
        width: 48%;
        min-width: 48%;
        max-width: 48%;
        height: 65vw;
    }

    img {
        width: 100%;
    }
    h4{
        margin-top: 0%;
        margin-left: 1vw;
        font-size: 1.1vw;
    }
    p{
        margin-left: 1vw;
        font-size: 1vw;
    }
    button {
        position: absolute;
        bottom: 5%;
        font-size: 1.2vw;
        padding: 0.5vw;
        border: none;
        border-radius: 9%;
        background: #0066ff;
        color: white;
        left: 1vw;
        cursor: pointer;
    }
    .project-card-button-github {
        left: 9vw;
    }
`