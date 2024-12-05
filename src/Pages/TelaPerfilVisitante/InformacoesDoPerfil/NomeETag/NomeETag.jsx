import '../../TelaPerfilVisitante.css'
import { useUsuarioContext } from '../../../../Context/useUsuarioContext';

export default function NomeETagVisitante({nomeCompleto, tag, descricao}){
    const { usuario } = useUsuarioContext()

    return (
        <div className="containerNomeETag">
            <h2>{nomeCompleto}</h2>
            <span>{tag}</span>
            <p className='welcome'>{descricao}</p>
        </div>
    )
}