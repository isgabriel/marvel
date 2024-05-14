import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const ProtegidasRotas = () => {
    const { ehAutenticado } = useUser();
    return ehAutenticado ? <Outlet /> : <Navigate to="/" />;
};

export { ProtegidasRotas };
