import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { FilmesData } from "../../data/filmesData";

const Filmes = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    {FilmesData.map((filme, index) => (
                        <Card
                            key={index}
                            id={filme.id}
                            imagem={filme.imagem}
                            nome={filme.nome}
                            resumo={filme.resumo}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export { Filmes };
