import Sidebar from '../../Components/SideBar/SideBar'
import SinoNotificacao from '../../Components/SinoNotificacao/sinoNOtificacao'
import './feed.css'

export default function Feed(){
    return(
        <div className='containerFeed bg'>
            <Sidebar></Sidebar>
            <SinoNotificacao></SinoNotificacao>
        </div>
    )
}