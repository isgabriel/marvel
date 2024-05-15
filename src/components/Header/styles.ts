import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    z-index: 9;

    width: 100%;

    background-color: #6f1315;

    .headerFechado {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 10px 20px;
    }
    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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

    background-color: #6f1315;

    @media (min-width: 769px) {
        display: none;
        flex-direction: row;
        align-items: center;
    }
`;
export const NavbarContainerDesktop = styled.nav`
    display: none;

    padding: 10px 20px;
    background-color: #6f1315;

    @media (min-width: 769px) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const NavLink = styled(Link)`
    color: #84848d;
    text-decoration: none;

    &.selecionado {
        color: #fff;
    }
`;
