/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "../Card";
import "./styles.ts";
import {
    CarrosselContainer,
    CarrosselItem,
    NextArrow,
    PrevArrow,
} from "./styles.ts";

interface carrosselProps {
    data: any[];
    classname?: string;
}
const Carrossel = ({ data, classname }: carrosselProps) => {
    const [indexAtual, setIndexAtual] = useState(0);

    const proximoCard = () => {
        setIndexAtual((indexAnterior) =>
            indexAnterior === data.length - 1 ? 0 : indexAnterior + 1
        );
    };

    const anteriorCard = () => {
        setIndexAtual((indexAnterior) =>
            indexAnterior === 0 ? data.length - 1 : indexAnterior - 1
        );
    };

    return (
        <CarrosselContainer>
            {[...data, ...data].map((item, index) => (
                <CarrosselItem
                    key={index}
                    className={`${classname} ${
                        index >= indexAtual && index < indexAtual + 3
                            ? "ativo"
                            : ""
                    }`}
                >
                    <Card
                        id={item.id}
                        imagem={item.imagem}
                        nome={item.nome}
                        resumo={item.resumo}
                    />
                </CarrosselItem>
            ))}
            <PrevArrow className="prev" onClick={anteriorCard}>
                <img src="/public/assets/icones/seta-esquerda.svg" alt="" />
            </PrevArrow>
            <NextArrow className="next" onClick={proximoCard}>
                <img src="/public/assets/icones/seta-direita.svg" alt="" />
            </NextArrow>
        </CarrosselContainer>
    );
};

export { Carrossel };
