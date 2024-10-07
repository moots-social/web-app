import IconeLike from '../../../assets/img/Heart.png'
import IconeDislike from '../../../assets/img/deslike.png'
import IconeFavorito from '../../../assets/img/star.svg'
import IconeComentario from '../../../assets/img/Comentário.png'
import '../feed.css'

export default function Reacoes(){
    return(
        <div className='reacoes'>
            <div className='reactions'>
                <img className='iconesReacao' src={IconeLike}></img>
                <img className='iconesReacao' src={IconeDislike}></img>
                <img className='iconesReacao' src={IconeFavorito}></img>
            </div>
            <div className='comments'>
                <img className='iconesReacao' src={IconeComentario}></img>
            </div>
        </div>
    )
}