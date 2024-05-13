import Americanas from "../../public/assets/icones/americanas.svg";
import Amazon from "../../public/assets/icones/amazon.svg";

import ThorVikings from "../../public/assets/imagens/thor-vikings.svg";
import SurfistaPrateado from "../../public/assets/imagens/surfista-prateado.svg";
import Wolverine from "../../public/assets/imagens/wolverine.svg";

const HqsData = [
    {
        id: 1,
        nome: "Thor: Vikings",
        resumo: "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
        imagem: ThorVikings,
        plataforma: [Americanas, Amazon],
        estrelas: 5,
    },
    {
        id: 2,
        nome: "Surfista Prateado",
        resumo: "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
        imagem: SurfistaPrateado,
        plataforma: [Americanas, Amazon],
        estrelas: 5,
    },
    {
        id: 3,
        nome: "Wolverine",
        resumo: "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
        imagem: Wolverine,
        plataforma: [Americanas, Amazon],
        estrelas: 5,
    },
];

export { HqsData };
