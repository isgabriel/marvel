import { createContext, useEffect, useState } from "react";
import { tUserContext } from "./types";
import { iChildren } from "../../interfaces/children.interface";

const UserContext = createContext<tUserContext | undefined>(undefined);

const UserProvider = ({ children }: iChildren) => {
    const [ehAutenticado, setEhAutenticado] = useState(
        localStorage.getItem("@Marvel:USUARIO") ? true : false
    );

    useEffect(() => {
        const userAutoLogin = localStorage.getItem("@Marvel:USUARIO");
        if (userAutoLogin) {
            setEhAutenticado(true);
        }
    }, []);

    const login = () => {
        setEhAutenticado(true);
    };

    const logout = () => {
        localStorage.removeItem("@Marvel:USUARIO");
        setEhAutenticado(false);
    };

    return (
        <UserContext.Provider value={{ ehAutenticado, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
