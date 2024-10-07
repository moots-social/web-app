import PerfilFeed from '../../../assets/img/perfil.png'
import '../feed.css'

export default function FeedPerfil(){
    return(
        <div className='perfilFeedContainer'>
            <div>
                <img className='pfpFeed' src={PerfilFeed}></img>
            </div>
            <div className='perfilInfo'>
                <p className='nomePerfilFeed'>Leonardo</p>
                <p className='arrobaFeed'>@leonardo</p>
            </div>
        </div>
    )
}