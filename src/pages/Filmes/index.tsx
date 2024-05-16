import { useState } from "react";
import { Carrossel } from "../../components/Carrossel";
import { Header } from "../../components/Header";
import { FilmesData } from "../../data/filmesData";
import { Filtro } from "./Filtro";
import { Background } from "../../components/Background";

const Filmes = () => {
    const [filtro, setFiltro] = useState("padrao");

    let filmesOrdenados;

    const ordenarPorLancamento = () => {
        return [...FilmesData].sort(
            (a, b) => b.anoLancamento - a.anoLancamento
        );
    };

    const ordenarPorCronologia = () => {
        return [...FilmesData].sort(
            (a, b) => a.ordemCronologica - b.ordemCronologica
        );
    };

    const mudaFiltro = (filtroSelecionado: string) => {
        setFiltro(filtroSelecionado);
    };

    switch (filtro) {
        case "lancamento":
            filmesOrdenados = ordenarPorLancamento();
            break;
        case "cronologia":
            filmesOrdenados = ordenarPorCronologia();
            break;
        default:
            filmesOrdenados = FilmesData;
            break;
    }

    return (
        <>
            <Header />

            <main>
                <Filtro filtro={filtro} onFiltroChange={mudaFiltro} />

                <Carrossel
                    data={filmesOrdenados}
                    propsVariaveis={["Disponível em streaming:", "Crítica"]}
                />
                <Background />
            </main>
        </>
    );
};

export { Filmes };
