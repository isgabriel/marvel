import { Background } from "../../components/Background";
import { Carrossel } from "../../components/Carrossel";
import { Header } from "../../components/Header";
import { HqsData } from "../../data/hqsData";

const HQs = () => {
    return (
        <>
            <Header />
            <main>
                <Carrossel
                    data={HqsData}
                    propsVariaveis={["Disponível para compra:", "Crítica"]}
                />
                <Background />
            </main>
        </>
    );
};

export { HQs };
