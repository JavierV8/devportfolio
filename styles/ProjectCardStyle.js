import styled from 'styled-components';

export const ProjectCardStyle = styled.div`
    width: 30%;
    min-width: 30%;
    height: 100%;
    margin: auto;
    margin-bottom: 2vw;
    border-radius: 2%;
    overflow: hidden;
    position: relative;

    -webkit-box-shadow: 0px 0px 20px 0px rgba(181,181,181,1);
    -moz-box-shadow: 0px 0px 20px 0px rgba(181,181,181,1);
    box-shadow: 0px 0px 20px 0px rgba(181,181,181,1);
    @media only screen and (max-width : 1050px) {
        width: 32%;
        min-width: 32%;
        max-width: 32%;
        height: 100%;
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
        font-size: 1.2vw;
        padding: 0.5vw;
        border: none;
        border-radius: 9%;
        background: #0066ff;
        color: white;
        margin-left: 1vw;
        margin-bottom: 1vw;
        cursor: pointer;
        margin-top: 1vw;
    }
    .project-card-button-github {
        left: 9vw;
    }

    @media screen and (orientation:portrait) {
        h4{
            margin-top: 0%;
            margin-left: 1.2vh;
            font-size: 1.2vh;
        }
        p{
            margin-left: 1.2vh;
            font-size: 1.3vh;
        }
        button {
            font-size: 1.5vh;
            padding: 0.8vh;
            margin-bottom: 2vw;
            margin-left: 2vw;
        }
        .project-card-button-github {
            left: 8vh;
        }
    }

    @media only screen and (max-width : 1050px) {
        width: 48%;
        min-width: 48%;
        max-width: 48%;
        height: 100%;
    }
    @media only screen and (max-width : 450px) {
        width: 85%;
        min-width: 85%;
        max-width: 85%;
        height: 100%;
        h4{
            margin-top: 0%;
            margin-left: 1.2vh;
            font-size: 2vh;
        }
        p{
            margin-left: 1.2vh;
            font-size: 1.9vh;
        }
        button {
            font-size: 2vh;
            padding: 1.5vh;
        }
        .project-card-button-github {
            left: 8vh;
        }
    }
`