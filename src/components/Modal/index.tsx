import { FaRegTimesCircle } from "react-icons/fa";
import Estrelas from "./Estrelas";
import {
    ListaAparicoes,
    ModalContainer,
    ModalConteudo,
    ModalFechar,
    ModalImagem,
    ModalTextos,
    TituloAparicoes,
    TituloModal,
    SubtituloModal,
    DescricaoModal,
    TituloStreaming,
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
                        <ModalTextos>
                            <TituloModal>{card.nome}</TituloModal>

                            {card.propsVariaveis[1] === "Crítica" && (
                                <DescricaoModal>{card.resumo}</DescricaoModal>
                            )}
                            {card.propsVariaveis[0] === "Aparições:" && (
                                <div>
                                    <TituloAparicoes>
                                        {card.propsVariaveis[0]}
                                    </TituloAparicoes>
                                    <ul>
                                        {card.filmes.map((filme, index) => (
                                            <ListaAparicoes key={index}>
                                                {filme}
                                            </ListaAparicoes>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {card.propsVariaveis[0] !== "Aparições:" && (
                                <div>
                                    <TituloStreaming>
                                        {card.propsVariaveis[0]}
                                    </TituloStreaming>
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
                                <SubtituloModal>
                                    {card.propsVariaveis[1]}
                                </SubtituloModal>
                                <Estrelas valorEstrelas={card.estrelas} />
                            </div>
                            <ModalFechar onClick={fechaModal}>
                                <FaRegTimesCircle />
                            </ModalFechar>
                        </ModalTextos>
                    </ModalConteudo>
                </ModalContainer>
            )}
        </>
    );
};

export default Modal;
