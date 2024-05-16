import { createGlobalStyle } from "styled-components";
import FontBold from "../assets/fonts/AxiformaBold.otf";
import FontSemiBold from "../assets/fonts/AxiformaSemiBold.otf";
import FontMedium from "../assets/fonts/AxiformaMedium.otf";
import FontRegular from "../assets/fonts/AxiformaRegular.otf";
import FontLight from "../assets/fonts/AxiformaLight.otf";
import FontThin from "../assets/fonts/AxiformaThin.otf";
import FontMarvel from "../assets/fonts/MarvelRegular.ttf";

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    overflow:hidden;
}

:root{
    --vermelho: #FF0000;
    --vermelhoHeader: rgba(255, 0, 0,0.5);
    --vermelhoEscuro: #6a0000;
    --branco: #FFFFFF;
    --cinzaClaro: #D1D1D6;
    --cinzaMedio: #E5E5EA;
    --cinza: #84848D;
    --preto: #000000;
    --vermelhoGradiente: linear-gradient(
        rgba(255,0,0,1), rgba(255,0,0,0.3)
    );;
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
    cursor:pointer;
    border:none;
}

a{
    text-decoration:none
}

@font-face {
   font-family: 'Axiforma Bold';
   src: local('Axiforma Bold'), url(${FontBold}) format('OpenType');
   font-weight: 700;
}

 @font-face {
   font-family: 'Axiforma SemiBold';
   src: local('Axiforma SemiBold'),local('Axiforma-SemiBild'), url(${FontSemiBold}) format('OpenType');
   font-weight: 600;
}

 @font-face {
   font-family: 'Axiforma Medium';
   src: local('Axiforma Medium'), url(${FontMedium}) format('OpenType');
   font-weight: 500;
}

 @font-face {
   font-family: 'Axiforma Regular';
   src: local('Axiforma Regular'), url(${FontRegular}) format('OpenType');
   font-weight: 400;
}

 @font-face {
   font-family: 'Axiforma Light';
   src: local('Axiforma Light'), url(${FontLight}) format('OpenType');
   font-weight: 300;
}

 @font-face {
   font-family: 'Axiforma Thin';
   src: local('Axiforma Thin'), url(${FontThin}) format('OpenType');
   font-weight: 100;
}

 @font-face {
   font-family: 'Marvel' ;
   src: local('Marvel Regular'), url(${FontMarvel}) format('TrueType');
}
`;
