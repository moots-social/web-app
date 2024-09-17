import ImagemFeed from '../../../assets/img/post.png'
import './imagemFeed.css'

export default function FeedImage(){
    return(
        <div className='containerImagemFeed'>
            <img className='imagemFeed' src={ImagemFeed}></img>
        </div>
    )
}