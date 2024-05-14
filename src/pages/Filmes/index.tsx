import { Carrossel } from "../../components/Carrossel";
import { Header } from "../../components/Header";
import { FilmesData } from "../../data/filmesData";

const Filmes = () => {
    return (
        <>
            <Header />
            <main>
                <Carrossel data={FilmesData} />
            </main>
        </>
    );
};

export { Filmes };
