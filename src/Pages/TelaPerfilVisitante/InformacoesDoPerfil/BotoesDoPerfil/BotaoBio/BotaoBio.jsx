import '../../../TelaPerfilVisitante.css'
import ImagemBotaoBio from '../../../../../assets/img/listaSeguir.png'
import { useContext } from 'react'
import { AbrirModalSeguindoV } from '../../../../../Components/SeguindoV/SeguindoV';


export default function BotaoBio(){

    return(
        <img src={ImagemBotaoBio} alt="" className='botaoBio botaoPerfil'  onClick={useContext(AbrirModalSeguindoV)} style={{cursor: "pointer"}}/>
    )
}