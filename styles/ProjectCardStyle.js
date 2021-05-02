import styled from 'styled-components';

export const ProjectCardStyle = styled.div`
    border: 1px solid red;
    width: 30%;
    min-width: 30%;
    height: 35vw;
    margin: auto;
    margin-bottom: 2vw;

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
`