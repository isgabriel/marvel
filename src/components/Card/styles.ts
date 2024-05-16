import styled from "styled-components";

export const CardContainer = styled.article`
    position: relative;
`;

export const CardConteudo = styled.div`
    position: absolute;
    bottom: 4px;

    border-radius: 30px;

    padding: 28px 20px;

    height: 234px;

    display: flex;
    flex-direction: column;

    background: var(--vermelhoGradiente);
    color: var(--branco);

    letter-spacing: 0.7px;
    line-height: 20px;

    > h3 {
        font-size: 1.25rem;
        font-family: "Axiforma Bold";
    }
    > p {
        margin-top: 8px;

        font-size: 0.625rem;
        font-family: "Axiforma Thin";
    }
    > button {
        background-color: transparent;
        color: var(--branco);

        font-size: 1.25rem;
        font-family: "Axiforma Thin";

        position: absolute;
        bottom: 16px;
        left: 25%;

        &:hover {
            color: var(--cinzaClaro);

            transform: scale(1.05);
            transition: 0.5s;
        }
    }
`;
