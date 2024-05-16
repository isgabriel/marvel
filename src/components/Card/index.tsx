import { iCard } from "../../interfaces/card.interface";
import Modal from "../Modal";
import { CardContainer, CardConteudo } from "./styles";
import { useUser } from "../../hooks/useUser";

const Card = ({
    id,
    nome,
    resumo,
    imagem,
    filmes,
    plataforma,
    estrelas,
    propsVariaveis,
}: iCard) => {
    const { abreModal } = useUser();

    return (
        <>
            <CardContainer>
                <img src={imagem} alt={`imagem de ${nome}`} />
                <CardConteudo>
                    <h3>{nome}</h3>
                    <p>{resumo}</p>
                    <button onClick={() => abreModal(id)}>Ver detalhes</button>
                </CardConteudo>
            </CardContainer>
            <Modal
                card={{
                    id,
                    nome,
                    resumo,
                    imagem,
                    filmes,
                    plataforma,
                    estrelas,
                    propsVariaveis,
                }}
            />
        </>
    );
};

export { Card };
