import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { LoginContainer } from "./styles";

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
            <section>
                <h1>Bem-vindo(a) de volta!</h1>

                <div>
                    <h2>Acesse sua conta:</h2>
                    <form onSubmit={fazLogin}>
                        <div>
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
                        </div>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={salvarLogin}
                                    onChange={(e) =>
                                        setSalvarLogin(e.target.checked)
                                    }
                                />
                                Salvar login
                            </label>

                            <a href="#">Esqueci a senha</a>
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                    <p>
                        Ainda não tem o login? <span>Cadastre-se</span>
                    </p>
                </div>
            </section>
        </LoginContainer>
    );
};

export { Login };
