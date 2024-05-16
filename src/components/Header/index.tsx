/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import {
    HeaderContainer,
    Logo,
    MenuIcone,
    NavLink,
    NavbarContainer,
    NavbarContainerDesktop,
    UsuarioDiv,
} from "./styles";

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [_selecionado, setSelecionado] = useState("");

    const { logout, modalAberto } = useUser();

    const location = useLocation();

    const cliqueMenuHamburguer = () => {
        setMenuAberto(!menuAberto);
    };

    const cliqueNavItem = (item: string) => {
        setSelecionado(item);

        setMenuAberto(false);
    };

    return (
        <>
            <HeaderContainer className={modalAberto ? "modal" : ""}>
                <div className="headerFechado">
                    <Link to="/personagens">
                        <Logo src="/assets/logo/logo.svg" alt="Logo" />
                    </Link>
                    <MenuIcone onClick={cliqueMenuHamburguer}>
                        {menuAberto ? <FiX /> : <FiMenu />}
                    </MenuIcone>
                </div>
                {menuAberto && (
                    <NavbarContainer>
                        <UsuarioDiv>
                            <img
                                src="/assets/icones/usuario.svg"
                                alt="foto do usuário"
                            />
                            <button onClick={logout}>Sair</button>
                        </UsuarioDiv>
                        <NavLink
                            to="/personagens"
                            className={
                                location.pathname === "/personagens"
                                    ? "selecionado"
                                    : ""
                            }
                            onClick={() => cliqueNavItem("personagens")}
                        >
                            Personagens
                        </NavLink>
                        <NavLink
                            to="/filmes"
                            className={
                                location.pathname === "/filmes"
                                    ? "selecionado"
                                    : ""
                            }
                            onClick={() => cliqueNavItem("filmes")}
                        >
                            Filmes
                        </NavLink>
                        <NavLink
                            to="/hqs"
                            className={
                                location.pathname === "/hqs"
                                    ? "selecionado"
                                    : ""
                            }
                            onClick={() => cliqueNavItem("hqs")}
                        >
                            HQs
                        </NavLink>
                    </NavbarContainer>
                )}
                <NavbarContainerDesktop>
                    <NavLink
                        to="/personagens"
                        className={
                            location.pathname === "/personagens"
                                ? "selecionado"
                                : ""
                        }
                        onClick={() => cliqueNavItem("personagens")}
                    >
                        Personagens
                    </NavLink>
                    <NavLink
                        to="/filmes"
                        className={
                            location.pathname === "/filmes" ? "selecionado" : ""
                        }
                        onClick={() => cliqueNavItem("filmes")}
                    >
                        Filmes
                    </NavLink>
                    <NavLink
                        to="/hqs"
                        className={
                            location.pathname === "/hqs" ? "selecionado" : ""
                        }
                        onClick={() => cliqueNavItem("hqs")}
                    >
                        HQs
                    </NavLink>
                    <UsuarioDiv>
                        <img
                            src="/assets/icones/usuario.svg"
                            alt="foto do usuário"
                        />
                        <button onClick={logout}>Sair</button>
                    </UsuarioDiv>
                </NavbarContainerDesktop>
            </HeaderContainer>
        </>
    );
};

export { Header };
