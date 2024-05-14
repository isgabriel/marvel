import { iCard } from "../../interfaces/card.interface";

const Card = ({ nome, resumo, imagem }: iCard) => {
    return (
        <article>
            <img src={imagem} alt={`imagem de ${nome}`} />
            <div>
                <h3>{nome}</h3>
                <p>{resumo}</p>
                <button>Ver detalhes</button>
            </div>
        </article>
    );
};
export { Card };
