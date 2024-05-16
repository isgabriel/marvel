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
    background-color: red;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalImagem = styled.img``;

export const ModalFechar = styled.button`
    width: 30px;
    height: 30px;

    background-color: transparent;
    color: white;

    border: none;
    border-radius: 5px;

    > svg {
        width: 100%;
        height: 100%;

        margin: 0;
    }
`;
