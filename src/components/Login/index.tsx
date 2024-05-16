import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { Cadastrar, DivInputs, DivSalvarLogin, LoginContainer } from "./styles";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [salvarLogin, setSalvarLogin] = useState(false);

    const { login } = useUser();

    const navigate = useNavigate();

    const fazLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (salvarLogin) {
            localStorage.setItem("@Marvel:USUARIO", usuario);
        }

        login();
        navigate("/personagens");
    };

    return (
        <LoginContainer>
            <div>
                <h1>Bem-vindo(a) de volta!</h1>

                <div>
                    <h2>Acesse sua conta:</h2>
                    <form onSubmit={fazLogin}>
                        <DivInputs>
                            <input
                                placeholder="Usuário"
                                type="text"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />

                            <input
                                placeholder="Senha"
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </DivInputs>

                        <DivSalvarLogin>
                            <input
                                type="checkbox"
                                checked={salvarLogin}
                                onChange={(e) =>
                                    setSalvarLogin(e.target.checked)
                                }
                                id="salvar"
                            />
                            <label htmlFor="salvar">Salvar login</label>

                            <a href="#">
                                <p>Esqueci a senha</p>
                                <span></span>
                            </a>
                        </DivSalvarLogin>
                        <button type="submit">Entrar</button>
                    </form>
                    <Cadastrar>
                        Ainda não tem o login? <a href="#">Cadastre-se</a>
                    </Cadastrar>
                </div>
            </div>
        </LoginContainer>
    );
};

export { Login };
