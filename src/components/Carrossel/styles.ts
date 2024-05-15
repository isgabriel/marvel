import styled, { css } from "styled-components";

export const CarrosselContainer = styled.section`
    position: relative;
    overflow: hidden;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;

    transition: transform 0.5s ease;

    @media (min-width: 769px) {
        width: 80%;
        margin: 0 auto;
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
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s;
`;

export const PrevArrow = styled.button`
    ${Setas}
    left: 10px;
`;

export const NextArrow = styled.button`
    ${Setas}
    right: 10px;
`;
