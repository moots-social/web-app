import Sidebar from '../../Components/SideBar/SideBar'
import SinoNotificacao from './SinoNotificacao/SinoNotificacao'
import PostFeed from './PostFeed/PostFeed'
import ConteudoFeed from './ConteudoFeed/ConteudoFeed'
import BottomBar from '../../Components/BottomBar/BottomBar'
import './feed.css'

export default function Feed({estilo}) {

    return (
        <div className='feed bg'>
            <Sidebar></Sidebar>
            <div className='containerFeed'>
                <SinoNotificacao></SinoNotificacao>
                <PostFeed></PostFeed>
                <ConteudoFeed></ConteudoFeed>
                <ConteudoFeed></ConteudoFeed>
            </div>
            <BottomBar></BottomBar>
        </div>
    )
}