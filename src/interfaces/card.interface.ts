interface iCard {
    id: number;
    nome: string;
    resumo: string;
    filmes?: string[];
    imagem: string;
    plataforma?: string[];
    estrelas?: number;
}
export type { iCard };
