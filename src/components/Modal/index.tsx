import { FaRegTimesCircle } from "react-icons/fa";
import Estrelas from "./Estrelas";
import {
    ModalContainer,
    ModalConteudo,
    ModalFechar,
    ModalImagem,
} from "./styles";
import { useUser } from "../../hooks/useUser";

interface ModalProps {
    card: {
        id: number;
        nome: string;
        resumo: string;
        imagem: string;
        filmes: string[];
        plataforma: string[];
        estrelas: number;
        propsVariaveis: string[];
    };
}

const Modal = ({ card }: ModalProps) => {
    const { modalAberto, modalId, fechaModal } = useUser();

    return (
        <>
            {modalAberto && modalId === card.id && (
                <ModalContainer onClick={fechaModal}>
                    <ModalConteudo onClick={(e) => e.stopPropagation()}>
                        <ModalImagem
                            src={card.imagem}
                            alt={`imagem de ${card.nome}`}
                        />

                        <h3>{card.nome}</h3>

                        {card.propsVariaveis[1] === "Crítica" && (
                            <p>{card.resumo}</p>
                        )}
                        {card.propsVariaveis[0] === "Aparições:" && (
                            <div>
                                <h4>{card.propsVariaveis[0]}</h4>
                                <ul>
                                    {card.filmes.map((filme, index) => (
                                        <li key={index}>{filme}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {card.propsVariaveis[0] !== "Aparições:" && (
                            <div>
                                <p>{card.propsVariaveis[0]}</p>
                                {card.plataforma.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item}
                                        alt="ícone de plataforma que disponibiliza este item"
                                    />
                                ))}
                            </div>
                        )}

                        <div>
                            <h4>{card.propsVariaveis[1]}</h4>
                            <Estrelas valorEstrelas={card.estrelas} />
                        </div>
                        <ModalFechar onClick={fechaModal}>
                            <FaRegTimesCircle />
                        </ModalFechar>
                    </ModalConteudo>
                </ModalContainer>
            )}
        </>
    );
};

export default Modal;
