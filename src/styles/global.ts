import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --vermelho: #FF0000;
    --branco: #FFFFFF;
    --cinza: #84848D;
    --cinzaClaro: #D1D1D6;
    --vermelhoGradiente: ;
    --pretoGradienteMobile: linear-gradient(
        to right,
        transparent 40%,
        #212121 74%,
        #000 100%
    );
    --pretoGradienteDesktop: linear-gradient(
            to right,
            transparent 5%,
            #212121 74%,
            #000 100%
        );

}

main {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    min-height: 100vh;
    padding: 0 20px;
    position: relative;
    z-index: 1;

    background-color: #000;

    @media (min-width: 769px) {
        align-items: flex-start;
        padding: 0;
    }

}

button{
    cursor:pointer
}
`;
