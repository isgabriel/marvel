import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { HqsData } from "../../data/hqsData";

const HQs = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    {HqsData.map((hq, index) => (
                        <Card
                            key={index}
                            id={hq.id}
                            imagem={hq.imagem}
                            nome={hq.nome}
                            resumo={hq.resumo}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export { HQs };
