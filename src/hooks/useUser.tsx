import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUser = () => {
    const contexto = useContext(UserContext);
    if (!contexto) {
        throw new Error("useUser precisa ser usado com o UserProvider");
    }
    return contexto;
};
