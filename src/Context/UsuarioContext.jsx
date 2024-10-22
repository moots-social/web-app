import { createContext, useState } from "react";

export const UsuarioContext = createContext();
                
export const ProviderUsuarioContext = ({ children }) => {
    const [usuario, setUsuario] = useState("")    

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}