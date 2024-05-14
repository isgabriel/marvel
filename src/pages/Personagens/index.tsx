import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { PersonagensData } from "../../data/personagensData";

const Personagens = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    {PersonagensData.map((personagem, index) => (
                        <Card
                            key={index}
                            id={personagem.id}
                            imagem={personagem.imagem}
                            nome={personagem.nome}
                            resumo={personagem.resumo}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export { Personagens };
