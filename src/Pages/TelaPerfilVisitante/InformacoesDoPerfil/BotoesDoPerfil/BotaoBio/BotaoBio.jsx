import '../../../TelaPerfilVisitante.css'
import ImagemBotaoBio from '../../../../../assets/img/BotaoSeguindo.png'

export default function BotaoBio(){

    return(
        <img src={ImagemBotaoBio} alt="" className='botaoBio botaoPerfil' style={{cursor: "pointer"}}/>
    )
}