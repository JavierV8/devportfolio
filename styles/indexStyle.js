import styled, { keyframes } from 'styled-components';

const kf = keyframes`
	0%, 15% {
		transform: translateY(0);
	}
	20%,55% {
		transform: translateY(-25%);
	}
	60%,90% {
		transform: translateY(-50%);
	}
	95%,100% {
		transform: translateY(-75%);
	}
`;

export const LoadingIndexPageStyle = styled.div`
    position fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(238, 238, 238);
    z-index: 1;
    transition: opacity 2000ms ease-out;
    opacity: ${pr=> (pr.isVisible ? 1 : 0)};

    div {
        position: relative;
        width: 10vw;
        left: 50%;
        top 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 2vw;
        transition: opacity 0ms ease-out;
        opacity: ${pr=> (pr.isVisible ? 1 : 0)};
    }
`;


export const IndexStyle = styled.div`
    margin: auto;
    max-width: 1400px;
    width: 80%;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Montserrat', 'Helvetica';
    color: #2e2e2e;
    
    .index-face-box {
        flex: 1;
    }
    .imageCara {
        margin-bottom: -5px;
        padding: 0;
    }
    .index-text-box {
        flex: 1;
        transition: opacity 5000ms ease-out;
        transition-delay: 1000ms;
        opacity: ${pr=> (pr.isVisible ? 0 : 1)};
    }
    .index-text-1 {
        margin-top: ${pr => pr.boxWidth * 0.05}px;
        font-size:  ${pr => pr.boxWidth * 0.05}px;
        font-weight: 300;
    }
    .index-text-2 {
        font-size: ${pr => pr.boxWidth * 0.13}px;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        height: ${pr => pr.boxWidth * 0.15}px;
    }
    .index-text-3 {
        width: 90%;
        margin-top: ${pr => pr.boxWidth * 0.03}px;
        font-size: ${pr => pr.boxWidth * 0.04}px;
        line-height: 1.1;
        font-weight: 300;
    }
    .index-text-4 {
        font-size: ${pr => pr.boxWidth * 0.034}px;
        font-weight: 600;
    }
    .index-button {
        margin-top: ${pr => pr.boxWidth * 0.08}px;
        font-size: ${pr => pr.boxWidth * 0.035}px;
        font-weight: 100;
        background: #0066ff;
        border: none;
        border-radius: ${pr => pr.boxWidth * 0.01}px;
        padding: ${pr => pr.boxWidth * 0.018}px;
        color: white;
        cursor: pointer;
    }
    .live {
        margin-left: ${pr => pr.boxWidth * 0.03}px;
    }
    
    
    .carousel-word {
        height: ${pr => pr.boxWidth * 0.12}px;
        font-size: ${pr => pr.boxWidth * 0.035}px;
        overflow: hidden;
    }
    .carousel-word h1{
        font-family: 'Montserrat', 'Helvetica';
        font-weight: 300;
    }
    .change_inner {
        position: relative;
        animation: ${kf} 15s ease-in-out infinite;
    }
    .element {
        padding: 0;
        margin: 0;
        height: ${pr => pr.boxWidth * 0.12}px;
    }
`;
