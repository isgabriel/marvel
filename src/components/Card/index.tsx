import { useState } from "react";
import { iCard } from "../../interfaces/card.interface";
import Modal from "../Modal";

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
            <article>
                <img src={imagem} alt={`imagem de ${nome}`} />
                <div>
                    <h3>{nome}</h3>
                    <p>{resumo}</p>
                    <button onClick={handleOpenModal}>Ver detalhes</button>
                </div>
            </article>
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
