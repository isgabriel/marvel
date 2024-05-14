import { Route, Routes } from "react-router-dom";

import { Personagens } from "../pages/Personagens";
import { Filmes } from "../pages/Filmes";
import { HQs } from "../pages/HQs";
import { Login } from "../pages/Login";

import { PublicasRotas } from "./publicas.routes";
import { ProtegidasRotas } from "./protegidas.routes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtegidasRotas />}>
                <Route path="/personagens" element={<Personagens />} />
                <Route path="/filmes" element={<Filmes />} />
                <Route path="/hqs" element={<HQs />} />
            </Route>

            <Route element={<PublicasRotas />}>
                <Route path="/" element={<Login />} />
            </Route>
        </Routes>
    );
};

export { AppRoutes };
