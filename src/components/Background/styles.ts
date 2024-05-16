import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

export const ImagemDireita = styled.div`
    animation: ${fadeIn} 4s ease forwards;

    position: absolute;
    top: 0;
    z-index: 1;

    float: right;
    min-width: 100%;
    max-width: 855px;
    height: 105vh;

    mask-image: var(--pretoGradienteMobile);

    > img {
        margin: 0;
        padding: 0;
        min-height: 100%;
    }

    @media (min-width: 769px) {
        min-width: auto;
        right: 0;
        background-size: cover;
        mask-image: var(--pretoGradienteDesktop);
    }
`;
