const Filtro = ({
    filtro,
    onFiltroChange,
}: {
    filtro: string;
    onFiltroChange: (filtro: string) => void;
}) => {
    return (
        <div>
            <label htmlFor="filtro">Filtrar por:</label>
            <select
                id="filtro"
                value={filtro}
                onChange={(e) => onFiltroChange(e.target.value)}
            >
                <option value="padrao">Padrão</option>
                <option value="lancamento">Lançamento</option>
                <option value="cronologia">Cronologia</option>
            </select>
            <label htmlFor="filtro">
                <img
                    src="/assets/icones/seta-abaixo.svg"
                    alt="icone de seta abaixo"
                />
            </label>
        </div>
    );
};
export { Filtro };
