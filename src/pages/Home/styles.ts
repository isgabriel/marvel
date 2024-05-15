import styled, { keyframes } from "styled-components";

export const fadeInLeft = keyframes`
    from {
      opacity: 0;
      transform: translateX(0%);
      
    }
    to {
      opacity: 1;
      transform: translateX(-25%);
      
      
    }
  `;

export const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(10%);
}
to {
  opacity: 1;
  transform: translateY(-35%);
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

    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${fadeInUp} 2s ease forwards;

    z-index: 5;

    @media (min-width: 769px) {
        animation: ${fadeInLeft} 2s ease forwards;

        justify-content: flex-end;
    }
`;

export const Logo = styled.img`
    width: 70%;
    max-width: 400px;
`;
