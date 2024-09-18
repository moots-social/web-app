import Sidebar from '../../Components/SideBar/SideBar'
import SinoNotificacao from './SinoNotificacao/SinoNotificacao'
import PostFeed from './PostFeed/PostFeed'
import ConteudoFeed from './ConteudoFeed/ConteudoFeed'
import './feed.css'

export default function Feed(){
    return(
        <div className='feed bg'>
            <Sidebar></Sidebar>
            <div className='containerFeed'>
                <SinoNotificacao></SinoNotificacao>
                <PostFeed></PostFeed>
                <ConteudoFeed></ConteudoFeed>
            </div>
        </div>
    )
}