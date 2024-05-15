/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import {
    HeaderContainer,
    Logo,
    MenuIcon,
    NavLink,
    NavbarContainer,
    NavbarContainerDesktop,
} from "./styles";

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [selecionado, setSelecionado] = useState("");

    const { logout } = useUser();

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
            <HeaderContainer>
                <div className="firstLineContainer">
                    <Link to="/personagens">
                        <Logo src="/assets/logo/logo.svg" alt="Logo" />
                    </Link>
                    <MenuIcon onClick={cliqueMenuHamburguer}>
                        {menuAberto ? <FiX /> : <FiMenu />}
                    </MenuIcon>
                </div>
                {menuAberto && (
                    <NavbarContainer>
                        <div>
                            <img
                                src="/assets/icones/usuario.svg"
                                alt="foto do usuário"
                            />
                            <button onClick={logout}>Sair</button>
                        </div>
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
                    <div>
                        <img
                            src="/assets/icones/usuario.svg"
                            alt="foto do usuário"
                        />
                        <button onClick={logout}>Sair</button>
                    </div>
                </NavbarContainerDesktop>
            </HeaderContainer>
        </>
    );
};

export { Header };
