import styled from "styled-components";

export const LoginContainer = styled.section`
    position: relative;
    z-index: 7;

    min-height: 70vh;
    width: 100%;

    color: var(--cinza);

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        > div {
            width: 100%;
        }
    }

    h1 {
        color: var(--vermelho);

        font-family: "Axiforma Bold";
        font-size: 1.35rem;
        text-align: center;
        margin-top: 15px;
    }

    h2 {
        color: var(--cinza);

        font-family: "Axiforma Thin";
        font-size: 1.25rem;

        margin: 35px 0 10px 0;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 13px;
        width: 100%;

        button {
            margin-top: 17px;

            border-radius: 100px;

            padding: 8px 0;
            margin-bottom: 25px;

            background-color: var(--vermelho);
            color: var(--branco);

            font-size: 1.5625rem;
            font-family: "Axiforma Medium";

            &:hover {
                transition: 0.5s;

                background-color: var(--vermelhoEscuro);
            }
        }
    }

    input {
        padding: 9px 28px;

        border-radius: 100px;
        border: none;

        outline: none;

        width: 100%;
        min-width: 100%;

        &:focus {
            border: 1px solid var(--vermelho);
        }
        &::placeholder {
            color: var(--cinzaClaro);

            font-family: "Axiforma Light";
        }
    }
    @media (min-width: 769px) {
        h1 {
            font-size: 30px;
        }
        h2 {
            margin-top: 55px;
        }

        input {
            padding: 22px 28px;
        }
    }
`;
export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const DivSalvarLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 95%;
    margin: 0 auto;

    input {
        display: none;
    }

    input + label:before {
        content: "";
        width: 18px;
        height: 18px;

        border: 1px solid var(--vermelho);
        border-radius: 4px;

        background-color: var(--branco);

        display: inline-block;
        vertical-align: sub;

        margin-right: 4px;
    }

    input:checked + label:before {
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");

        background-position: center;
    }

    > label,
    a {
        font-size: 0.9375rem;
        font-family: "Axiforma Medium";

        color: var(--cinza);

        cursor: pointer;
    }

    a {
        display: flex;
        flex-direction: column;

        &:hover {
            color: var(--vermelho);

            transition: 0.5s;
        }

        span {
            width: 100%;
            height: 1px;
            background-color: var(--vermelho);
        }
    }
`;

export const Cadastrar = styled.p`
    font-family: "Axiforma Medium";
    font-size: 1rem;

    color: var(--cinza);
    a {
        color: var(--vermelho);

        &:hover {
            transition: 0.5s;

            color: var(--vermelhoEscuro);
            text-decoration: underline;
        }
    }
`;
