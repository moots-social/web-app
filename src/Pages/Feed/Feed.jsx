import Sidebar from '../../Components/SideBar/SideBar'
import SinoNotificacao from '../../Components/SinoNotificacao/sinoNotificacao'
import Reacoes from '../../Components/Reacoes/Reacoes'
import './feed.css'

export default function Feed(){
    return(
        <div className='feed bg'>
            <Sidebar></Sidebar>
            <div className='containerFeed'>
                <SinoNotificacao></SinoNotificacao>
                <Reacoes></Reacoes> 
                <div className='conteudoFeed'>
                    
                </div>
            </div>
        </div>
    )
}