import HomemAranha from "/assets/imagens/homem-aranha.svg";
import Wanda from "/assets/imagens/wanda.svg";
import Thanos from "/assets/imagens/thanos.svg";
import Hulk from "/assets/imagens/hulk.svg";

const PersonagensData = [
    {
        id: 1,
        nome: "Homem-Aranha",
        resumo: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
        filmes: [
            "Capitão América: Guerra Civil",
            "Homem-Aranha: De Volta ao Lar",
            "Vingadores: Guerra Infinita",
            "Vingadores: Ultimato",
            "Homem-Aranha: Longe de Casa",
            "Homem-Aranha: Sem Volta para Casa",
        ],
        imagem: HomemAranha,
        plataforma: [],
        estrelas: 5,
    },
    {
        id: 2,
        nome: "Wanda Maximoff",
        resumo: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
        filmes: [
            "Vingadores: Era de Ultron",
            "Capitão América: Guerra Civil",
            "Vingadores: Guerra Infinita",
            "Vingadores: Ultimato",
            "WandaVision",
        ],
        imagem: Wanda,
        plataforma: [],
        estrelas: 4,
    },
    {
        id: 3,
        nome: "Thanos",
        resumo: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
        filmes: [
            "Vingadores",
            "Guardiões da Galáxia: vol. 1",
            "Vingadores: Guerra Infinita",
            "Vingadores: Ultimato",
        ],
        imagem: Thanos,
        plataforma: [],
        estrelas: 5,
    },
    {
        id: 4,
        nome: "Hulk",
        resumo: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
        filmes: [
            "Vingadores",
            "Vingadores: Era de Ultron",
            "Thor: Ragnarok",
            "Vingadores: Guerra Infinita",
            "Vingadores: Ultimato",
        ],
        imagem: Hulk,
        plataforma: [],
        estrelas: 4,
    },
];

export { PersonagensData };
