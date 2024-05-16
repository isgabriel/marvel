import { useState } from "react";
import { iCard } from "../../interfaces/card.interface";
import Modal from "../Modal";
import { CardContainer, CardConteudo } from "./styles";

const Card = ({
    nome,
    resumo,
    imagem,
    filmes,
    plataforma,
    estrelas,
    propsVariaveis,
}: iCard) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <CardContainer>
                <img src={imagem} alt={`imagem de ${nome}`} />
                <CardConteudo>
                    <h3>{nome}</h3>
                    <p>{resumo}</p>
                    <button onClick={handleOpenModal}>Ver detalhes</button>
                </CardConteudo>
            </CardContainer>
            <Modal
                taAberto={isModalOpen}
                onClose={handleCloseModal}
                card={{
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
