import '../../TelaPerfil.css'
import BotaoSeguir from './BotaoSeguir/BotaoSeguir'
import BotaoCurso from './BotaoCurso/BotaoCurso'
import BotaoBio from './BotaoBio/BotaoBio'
import Seguindo from '../../../../Components/Seguindo/Seguindo'

export default function BotoesDoPerfil() {

    return (
        <>  
            <Seguindo></Seguindo>

            <div className='botoesPerfil'>
                <BotaoSeguir></BotaoSeguir>
                <BotaoCurso></BotaoCurso>
                <BotaoBio></BotaoBio>
            </div>
        </>
    )
}   