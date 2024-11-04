import '../../TelaPerfil.css'
import { useUsuarioContext } from '../../../../Context/useUsuarioContext';

export default function NomeETag(){
    const { usuario } = useUsuarioContext()

    return (
        <div className="containerNomeETag">
            <h2>{usuario.nomeCompleto}</h2>
            <span className='spanNome'>{usuario.tag}</span>
            <p className='welcome'>{usuario.descricao}</p>
        </div>
    )
}