import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const PublicasRotas = () => {
    const { ehAutenticado } = useUser();
    return !ehAutenticado ? <Outlet /> : <Navigate to="/personagens" />;
};
export { PublicasRotas };
