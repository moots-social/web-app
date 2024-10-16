import { useContext } from 'react';
import '../../TelaPerfil.css'

export default function NomeETag(props){
    const { usuario } = useUsuarioContext
    console.log(usuario)

    return (
        <div className="containerNomeETag">
            <h2>{usuario.nomeCompleto}</h2>
            <span>{usuario.tag}</span>
            <p>Seja bem vindo(a) ao meu perfil</p>
        </div>
    )
}