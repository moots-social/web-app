import Sidebar from '../../Components/SideBar/SideBar'
import SinoNotificacao from '../../Components/Feed/SinoNotificacao/SinoNotificacao'
import PostFeed from '../../Components/Feed/PostFeed/PostFeed'
import ConteudoFeed from '../../Components/Feed/ConteudoFeed/ConteudoFeed'
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