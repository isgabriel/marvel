import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Header = () => {
    const { logout } = useUser();
    return (
        <header>
            <p>Header</p>
            <nav>
                <div>
                    <Link to="/personagens">Perosnagens</Link>
                    <Link to="/filmes">Filmes</Link>
                    <Link to="/hqs">HQs</Link>
                </div>
                <button onClick={logout}>Sair</button>
            </nav>
        </header>
    );
};

export { Header };
