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


export const indexStylePotrait = styled.div`
        width: 100vh;
        height: 99vh;
        display: block
        top: 0;
        left: 0;
        border: 2px solid red;

        .index-face-box {
                width: 100vh;
                height: 100vh;
                opacity: 0.4;
        }
            .imageCara {
                margin-bottom: -5px;
                padding: 0;
        }
            .index-text-box {
                position: absolute;
                top: 0;
                transition: opacity 5000ms ease-out;
                transition-delay: 1000ms;
                padding-left: 5vw;
                opacity: ${pr=> (pr.isVisible ? 0 : 1)};
        }
    
        .index-text-1 {
                margin-top: 15vh;
                font-size:  8vw;
                font-weight: 300;
        }
        .index-text-2 {
                margin-top: 10vw;
                font-size: 13vw;
                font-weight: bold;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                height: 15vw;
        }
        .index-text-3 {
                width: 95vw;
                margin-top: 20vw;
                font-size: 6vw;
                line-height: 1.1;
                font-weight: 300;
        }
        .index-text-4 {
                font-size: 4vw;
                font-weight: 600;
        }
        .index-button {
                position: fixed;
                bottom: 5vh;
                font-size: 5vw;
                border-radius: 1.5vw;
                font-weight: 100;
                background: #0066ff;
                border: none;
                padding: 3vw;
                color: white;
                cursor: pointer;
        }
        .live {
                left: 40vw;
        }
        .carousel-word {
                height: 9vw;
                font-size: 4vw;
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
