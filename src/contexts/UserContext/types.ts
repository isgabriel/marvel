type tUserContext = {
    ehAutenticado: boolean;
    login: () => void;
    logout: () => void;
    modalAberto: boolean;
    modalId: number | null;
    abreModal: (id: number) => void;
    fechaModal: () => void;
};
export type { tUserContext };
