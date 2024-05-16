import styled, { css } from "styled-components";

export const CarrosselContainer = styled.section`
    overflow: hidden;
    z-index: 5;

    min-height: 100vh;
    min-width: 100vw;

    background-color: #0007;

    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    @media (min-width: 769px) {
        min-width: 100vw;

        margin: 0 auto;
    }
`;
export const CarrosselMiniSection = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 8px;

    @media (min-width: 1000px) {
        position: relative;
        overflow: hidden;

        width: 80%;

        gap: 5%;
    }
`;

export const CarrosselItem = styled.div`
    display: none;

    max-width: 289px;

    &.ativo {
        display: block;
    }
`;

export const Setas = css`
    position: absolute;
    top: 40%;

    background-color: transparent;

    border: none;

    @media (min-width: 1000px) {
        position: fixed;
        top: 50%;
    }
`;

export const PrevArrow = styled.button`
    ${Setas}

    left: 5px;

    @media (min-width: 1000px) {
        left: 2%;
    }
`;

export const NextArrow = styled.button`
    ${Setas}

    right: 5px;

    @media (min-width: 1000px) {
        right: 2%;
    }
`;
