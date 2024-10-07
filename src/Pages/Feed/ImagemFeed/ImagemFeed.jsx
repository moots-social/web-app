import ImagemFeed from '../../../assets/img/post.png'
import '../feed.css'

export default function FeedImagem(){
    return(
        <div className='containerImagemFeed'>
            <img className='imagemFeed' src={ImagemFeed}></img>
        </div>
    )
}