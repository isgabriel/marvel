import { Carrossel } from "../../components/Carrossel";
import { Header } from "../../components/Header";
import { HqsData } from "../../data/hqsData";

const HQs = () => {
    return (
        <>
            <Header />
            <main>
                <Carrossel data={HqsData} />
            </main>
        </>
    );
};

export { HQs };
