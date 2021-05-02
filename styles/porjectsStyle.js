import styled from 'styled-components';

export const ProjectsStyle = styled.div`
    border: 1px solid red;
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width : 1200px) {
        width: 90%;
    }

    @media only screen and (max-width : 600px) {
        width: 100%;
    }
`