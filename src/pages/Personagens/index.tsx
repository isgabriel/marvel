import { Header } from "../../components/Header";

import { PersonagensData } from "../../data/personagensData";

import { Carrossel } from "../../components/Carrossel";
import { Background } from "../../components/Background";

const Personagens = () => {
    return (
        <>
            <Header />
            <main>
                <Carrossel
                    data={PersonagensData}
                    propsVariaveis={["Aparições:", "Avaliações dos Fãs"]}
                />
                <Background />
            </main>
        </>
    );
};

export { Personagens };
