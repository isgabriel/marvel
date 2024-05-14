import { Header } from "../../components/Header";

import { PersonagensData } from "../../data/personagensData";

import { Carrossel } from "../../components/Carrossel";

const Personagens = () => {
    return (
        <>
            <Header />
            <main>
                <Carrossel
                    data={PersonagensData}
                    propsVariaveis={["Aparições:", "Avaliações dos Fãs"]}
                />
            </main>
        </>
    );
};

export { Personagens };
