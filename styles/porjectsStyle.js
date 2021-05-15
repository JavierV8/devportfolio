import styled from 'styled-components';

export const ProjectsStyle = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    h1 {
        width: 100%;
        font-size: 3vw;
    }
    h4 {
        width: 100%;
        font-size: 3vh; 
    }
    .projects-goHome-button {
        position: fixed;
        font-family: 'Montserrat', 'Helvetica';
        font-size: ${pr => pr.isMobile ? '1.5vw' : '1vw'};
        font-weight: 600;
        border: none;
        cursor: pointer;
        padding: 1vw;
        bottom: 5%;
        left: 5%;
        background: #990000;
        color: white;
        border-radius: 10%;
    }

    @media only screen and (max-width : 1200px) {
        width: 90%;
    }

    @media only screen and (max-width : 600px) {
        width: 100%;
    }

    @media screen and (orientation:portrait) {
        h1 {
            width: 100%;
            font-size: 3vh;
            margin-left: 7%;
        }
        h4 {
            width: 100%;
            font-size: 1.8vh; 
            margin-left: 7%;
        }
        .projects-goHome-button {
            position: fixed;
            font-family: 'Montserrat', 'Helvetica';
            font-size: ${pr => pr.isMobile ? '3vh' : '2vh'};
            font-weight: 100;
            border: none;
            cursor: pointer;
            padding: 1.5vh;
            bottom: 5%;
            left: 5%;
            background: #990000;
            color: white;
            border-radius: 10%;
        }
    }
`