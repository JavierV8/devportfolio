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


export const IndexStyle = styled.div`
    margin: auto;
    max-width: 1200px;
    width: 80%;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    .index-face-box {
        flex: 1;
    }
    .index-text-box {
        flex: 1;
    }
    .index-text-1 {
        margin-top: ${pr => pr.boxWidth * 0.05}px;
        font-size: ${pr => pr.boxWidth * 0.05}px;
    }
    .index-text-2 {
        margin-top: ${pr => pr.boxWidth * 0.01}px;
        font-size: ${pr => pr.boxWidth * 0.14}px;
        font-weight: bold;
        height: ${pr => pr.boxWidth * 0.15}px;
    }
    .index-text-3 {
        margin-top: ${pr => pr.boxWidth * 0.03}px;
        font-size: ${pr => pr.boxWidth * 0.045}px;
        line-height: 1.1;
    }
    .index-text-4 {
        font-size: ${pr => pr.boxWidth * 0.035}px;
        font-weight: bold;
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
    }
    
    
    .carousel-word {
        height: ${pr => pr.boxWidth * 0.12}px;
        font-size: ${pr => pr.boxWidth * 0.04}px;
        overflow: hidden;
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
