import { useEffect, useState } from "react";

import { Login } from "../../components/Login";
import { Background } from "../../components/Background";
import { Container, Logo, LogoContainer } from "./styles";

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Container>
            <section>
                <LogoContainer>
                    <Logo src="/assets/logo/logo.svg" alt="Logo" />
                </LogoContainer>
                {showLogin && <Login />}
            </section>
            <Background />
        </Container>
    );
};

export { Home };
