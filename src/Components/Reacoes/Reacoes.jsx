import IconeLike from '../../assets/img/Heart.png'
import IconeDislike from '../../assets/img/deslike.png'
import IconeFavorito from '../../assets/img/star.svg'
import './reacoes.css'

export default function Reacoes(){
    return(
        <div className='reactions'>
            <img className='iconesReacao' src={IconeLike}></img>
            <img className='iconesReacao' src={IconeDislike}></img>
            <img className='iconesReacao' src={IconeFavorito}></img>
        </div>
    )
}