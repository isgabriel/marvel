/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "../Card";
import "./styles.ts";
import {
    CarrosselContainer,
    CarrosselItem,
    CarrosselMiniSection,
    NextArrow,
    PrevArrow,
} from "./styles.ts";

interface carrosselProps {
    data: any[];
    classname?: string;
    propsVariaveis: string[];
}
const Carrossel = ({ data, classname, propsVariaveis }: carrosselProps) => {
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
            <CarrosselMiniSection>
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
                            filmes={item.filmes}
                            plataforma={item.plataforma}
                            estrelas={item.estrelas}
                            propsVariaveis={propsVariaveis}
                        />
                    </CarrosselItem>
                ))}
                <PrevArrow className="prev" onClick={anteriorCard}>
                    <img
                        src="/assets/icones/seta-esquerda.svg"
                        alt="icone de seta apontando para esquerda"
                    />
                </PrevArrow>
                <NextArrow className="next" onClick={proximoCard}>
                    <img
                        src="/assets/icones/seta-direita.svg"
                        alt="icone de seta apontando para direita"
                    />
                </NextArrow>
            </CarrosselMiniSection>
        </CarrosselContainer>
    );
};

export { Carrossel };
