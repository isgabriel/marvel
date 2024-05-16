import styled from "styled-components";

export const ModalContainer = styled.dialog`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalConteudo = styled.div`
    border-radius: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    max-height: 90vh;
    width: 289px;

    overflow-y: scroll;

    background: var(--vermelhoModalGradiente);
    color: var(--branco);

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    @media (min-width: 769px) {
        width: auto;

        overflow-y: hidden;

        display: flex;
        flex-direction: row;

        > img {
            min-width: 269px;
        }

        > div {
            width: 370px;

            gap: 15px;

            padding-left: 38px;
        }
    }
`;

export const ModalTextos = styled.div`
    position: relative;
    padding: 20px;
`;

export const ModalImagem = styled.img`
    min-width: 100%;
    max-height: 459px;
`;

export const TituloModal = styled.h3`
    font-family: "Axiforma Bold";
    font-size: 1.875rem;
`;

export const SubtituloModal = styled.h4`
    font-family: "Axiforma Light";
    font-size: 1.625rem;
`;

export const TituloAparicoes = styled.h4`
    font-family: "Axiforma Bold";
    font-size: 1.125rem;
`;

export const ListaAparicoes = styled.li`
    font-family: "Axiforma Thin";
    font-size: 1.125rem;
`;

export const DescricaoModal = styled.p`
    font-family: "Axiforma Thin";
    font-size: 0.75rem;

    letter-spacing: 0.5px;
    line-height: 20px;
`;

export const TituloStreaming = styled.h4`
    font-family: "Axiforma Regular";
    font-size: 0.75rem;

    letter-spacing: 1.2px;
`;

export const ModalFechar = styled.button`
    position: absolute;
    bottom: 25px;
    right: 32px;

    width: 30px;
    height: 30px;

    background-color: transparent;
    color: white;

    border: none;
    border-radius: 5px;

    &:hover {
        transform: scale(1.15);
        transition: 0.5s;
        color: var(--cinza);
    }

    > svg {
        width: 100%;
        height: 100%;

        margin: 0;
    }
`;
