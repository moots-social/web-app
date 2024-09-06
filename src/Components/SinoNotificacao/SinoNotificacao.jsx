import Notificacao from '../../assets/img/notificacao.png'
import './sinoNotificacao.css'

export default function SinoNotificacao(){
    return(
        <>
            <div className='containerNotificacao'>
                <img src={Notificacao}></img>
            </div>
        </>
    )
}