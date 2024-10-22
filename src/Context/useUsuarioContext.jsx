import { useContext } from "react";
import { UsuarioContext } from "./UsuarioContext";

export function useUsuarioContext() {
    const context = useContext(UsuarioContext);

    if(!context){
        console.log("contexto não encontrado")
        return
    }

    return context  
}