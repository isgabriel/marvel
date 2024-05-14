import { FaRegTimesCircle } from "react-icons/fa";
import Estrelas from "./Estrelas";
import {
    ModalContainer,
    ModalConteudo,
    ModalFechar,
    ModalImagem,
} from "./styles";

interface ModalProps {
    taAberto: boolean;
    onClose: () => void;
    card: {
        nome: string;
        resumo: string;
        imagem: string;
        filmes: string[];
        plataforma: string[];
        estrelas: number;
        propsVariaveis: string[];
    };
}

const Modal = ({ taAberto, onClose, card }: ModalProps) => {
    if (!taAberto) return null;

    return (
        <ModalContainer onClick={onClose}>
            <ModalConteudo onClick={(e) => e.stopPropagation()}>
                <ModalImagem src={card.imagem} alt={`imagem de ${card.nome}`} />

                <h3>{card.nome}</h3>

                {card.propsVariaveis[1] === "Crítica" && <p>{card.resumo}</p>}
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

                {/* estrelas */}
                <div>
                    <h4>{card.propsVariaveis[1]}</h4>
                    <Estrelas valorEstrelas={card.estrelas} />
                </div>
                <ModalFechar onClick={onClose}>
                    <FaRegTimesCircle />
                </ModalFechar>
            </ModalConteudo>
        </ModalContainer>
    );
};

export default Modal;
