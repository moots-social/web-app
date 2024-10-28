import '../../../TelaPerfil.css'
import ImagemBotaoBio from '../../../../../assets/img/botaoSeguindo.png'
import { useContext } from 'react'
import { AbrirModalSeguindo } from '../../../../../Components/Seguindo/Seguindo'

export default function BotaoBio(){
    return(
        <img src={ImagemBotaoBio} alt="" className='botaoBio botaoPerfil' onClick={useContext(AbrirModalSeguindo)}/>
    )
}