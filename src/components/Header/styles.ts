import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    z-index: 9;

    width: 100%;

    background-color: var(--preto);

    box-shadow: 0 2px 4px 0 var(--vermelhoHeader);

    .headerFechado {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 10px 20px;
    }

    &.modal {
        position: static;
    }

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }
`;

export const Logo = styled.img`
    width: 35%;
    max-width: 400px;

    height: auto;
`;

export const MenuIcone = styled.div`
    font-size: 24px;

    color: #fff;

    cursor: pointer;

    display: flex;
    align-items: center;

    @media (min-width: 769px) {
        display: none;
    }

    &:hover {
        color: #ccc;
    }
`;

export const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 7px;

    padding: 10px 20px;

    background-color: var(--preto);

    @media (min-width: 769px) {
        display: none;
        flex-direction: row;
        align-items: center;
    }
`;
export const NavbarContainerDesktop = styled.nav`
    display: none;

    padding: 10px 20px;
    background-color: var(--preto);

    @media (min-width: 769px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        gap: 5%;

        min-width: 60%;
    }
`;

export const NavLink = styled(Link)`
    color: #84848d;

    text-decoration: none;

    font-family: "Axiforma Bold";
    font-size: 1rem;

    &.selecionado {
        color: var(--branco);
    }

    &:hover {
        color: var(--cinzaClaro);
        transition: 0.5s;
    }

    @media (min-width: 769px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1000px) {
        font-size: 1.875rem;
    }
`;

export const UsuarioDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    img {
        width: 55px;
    }

    button {
        font-family: "Axiforma Light";
        font-size: 1.25rem;

        background-color: transparent;
        color: var(--cinza);

        &:hover {
            color: var(--cinzaMedio);

            transition: 0.5s;
        }
    }

    @media (min-width: 769px) {
        flex-direction: row;
    }
`;
