import styled from "styled-components";

export const FiltroContainer = styled.div`
    position: absolute;
    top: 80px;
    left: 20px;
    z-index: 3;

    > div {
        position: relative;

        select {
            border: 1px solid var(--vermelho);
            border-radius: 8px;

            position: relative;
            z-index: 2;

            background-color: transparent;
            color: var(--vermelho);

            appearance: none;
            outline: 0;

            padding: 12px 35px 12px 15px;

            font-size: 1rem;
            font-family: "Axiforma Bold";

            option {
                background-color: var(--preto);
            }
        }

        label {
            position: absolute;
            right: 15px;
            top: 25%;
            z-index: 1;
        }
    }

    &.none {
        z-index: 0;
    }

    @media (min-width: 769px) {
        top: 125px;
        padding-left: 12%;
    }
`;
