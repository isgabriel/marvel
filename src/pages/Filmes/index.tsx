import { Carrossel } from "../../components/Carrossel";
import { Header } from "../../components/Header";
import { FilmesData } from "../../data/filmesData";

const Filmes = () => {
    return (
        <>
            <Header />
            <main>
                <Carrossel
                    data={FilmesData}
                    propsVariaveis={["Disponível em streaming:", "Crítica"]}
                />
            </main>
        </>
    );
};

export { Filmes };
