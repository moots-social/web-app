import PerfilFeed from '../../../assets/img/perfil.png'
import '../feed.css'
import { useUsuarioContext } from '../../../Context/useUsuarioContext'

export default function FeedPerfil(){

    const { usuario } = useUsuarioContext();
    return(
        <div className='perfilFeedContainer'>
            <div>
                <img className='pfpFeed' src={usuario.fotoPerfil}></img>
            </div>
            <div className='perfilInfo'>
                <p className='nomePerfilFeed'>{usuario.nomeCompleto}</p>
                <p className='arrobaFeed'>@{usuario.tag}</p>
            </div>
        </div>
    )
}