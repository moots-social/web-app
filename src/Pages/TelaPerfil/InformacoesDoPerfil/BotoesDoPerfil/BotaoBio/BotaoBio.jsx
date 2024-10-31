import '../../../TelaPerfil.css'
import ImagemSeguidores from '../../../../../assets/img/seguidores.svg'
import { useContext } from 'react'
import { AbrirModalSeguindo } from '../../../../../Components/Seguindo/Seguindo'

export default function BotaoBio(){
    return(
        <img src={ImagemSeguidores} alt="" className='botaoBio botaoPerfil' onClick={useContext(AbrirModalSeguindo)}/>
    )
}