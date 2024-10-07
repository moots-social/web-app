import Notificacao from '../../../assets/img/notificacao.png'
import '../feed.css'

export default function SinoNotificacao(){
    return(
        <>
            <div className='containerNotificacao'>
                <img src={Notificacao} className='imagemSinoNotificacao'></img>
            </div>
        </>
    )
}