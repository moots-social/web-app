import PerfilFeed from '../../../assets/img/perfil.png'
import '../feed.css'

export default function FeedPerfil(){
    return(
        <div className='postFeedContainer'>
            <img className='pfpPostFeed' src={PerfilFeed}></img>
            <p className='textoPostFeed'>O que você está pensando?</p>
        </div>
    )
}