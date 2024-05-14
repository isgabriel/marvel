import { UserProvider } from "./UserContext";

interface iContextProviderProps {
    children: React.ReactNode;
}
const ContextProvider = ({ children }: iContextProviderProps) => {
    return <UserProvider>{children}</UserProvider>;
};

export { ContextProvider };
