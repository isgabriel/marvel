import styled, { keyframes } from "styled-components";

export const fadeInLeft = keyframes`
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  `;

export const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(50%);
}
to {
  opacity: 1;
  transform: translateY(0%);
}
`;

export const Container = styled.main`
    > section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        min-height: 100vh;

        @media (min-width: 769px) {
            padding-left: 15%;
        }
    }
`;

export const LogoContainer = styled.div`
    flex: 1;

    animation: ${fadeInUp} 2s ease forwards;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 5;

    @media (min-width: 769px) {
        animation: ${fadeInLeft} 2s ease forwards;
    }
`;

export const Logo = styled.img`
    width: 70%;
    max-width: 400px;
`;
