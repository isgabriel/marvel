import { useUser } from "../../../hooks/useUser";
import { FiltroContainer } from "./styles";

const Filtro = ({
    filtro,
    onFiltroChange,
}: {
    filtro: string;
    onFiltroChange: (filtro: string) => void;
}) => {
    const { modalAberto } = useUser();
    return (
        <FiltroContainer className={modalAberto ? "none" : ""}>
            <div>
                <select
                    id="filtro"
                    value={filtro}
                    onChange={(e) => onFiltroChange(e.target.value)}
                >
                    <option value="padrao">Filtrar por</option>
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
        </FiltroContainer>
    );
};
export { Filtro };
