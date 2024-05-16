import Disney from "/assets/icones/disney.svg";

import HomemDeFerro from "/assets/imagens/homem-de-ferro.svg";
import HomemDeFerro2 from "/assets/imagens/homem-de-ferro-2.svg";
import Thor from "/assets/imagens/thor.svg";
import CapitaoAmerica from "/assets/imagens/capitao-america.svg";
import CapitaMarvel from "/assets/imagens/capita-marvel.svg";

const FilmesData = [
    {
        id: 1,
        nome: "Homem de Ferro",
        resumo: "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
        filmes: [],
        imagem: HomemDeFerro,
        plataforma: [Disney],
        estrelas: 3,
        anoLancamento: 2008,
        ordemCronologica: 3,
    },
    {
        id: 2,
        nome: "Homem de Ferro 2",
        resumo: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
        filmes: [],
        imagem: HomemDeFerro2,
        plataforma: [Disney],
        estrelas: 4,
        anoLancamento: 2010,
        ordemCronologica: 4,
    },
    {
        id: 3,
        nome: "Thor",
        resumo: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ",
        filmes: [],
        imagem: Thor,
        plataforma: [Disney],
        estrelas: 2,
        anoLancamento: 2011,
        ordemCronologica: 5,
    },
    {
        id: 4,
        nome: "Capitão América",
        resumo: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
        filmes: [],
        imagem: CapitaoAmerica,
        plataforma: [Disney],
        estrelas: 4,
        anoLancamento: 2011,
        ordemCronologica: 1,
    },
    {
        id: 5,
        nome: "Capitã Marvel",
        resumo: "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. ",
        filmes: [],
        imagem: CapitaMarvel,
        plataforma: [Disney],
        estrelas: 4,
        anoLancamento: 2019,
        ordemCronologica: 2,
    },
];

export { FilmesData };
