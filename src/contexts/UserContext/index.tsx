import { createContext, useEffect, useState } from "react";
import { tUserContext } from "./types";
import { iChildren } from "../../interfaces/children.interface";

const UserContext = createContext<tUserContext | undefined>(undefined);

const UserProvider = ({ children }: iChildren) => {
    const [ehAutenticado, setEhAutenticado] = useState(
        localStorage.getItem("@Marvel:USUARIO") ? true : false
    );
    const [modalAberto, setModalAberto] = useState(false);
    const [modalId, setModalId] = useState<number | null>(null);

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

    const abreModal = (id: number) => {
        setModalAberto(true);
        setModalId(id);
    };

    const fechaModal = () => {
        setModalAberto(false);
        setModalId(null);
    };

    return (
        <UserContext.Provider
            value={{
                ehAutenticado,
                login,
                logout,
                modalAberto,
                modalId,
                abreModal,
                fechaModal,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
