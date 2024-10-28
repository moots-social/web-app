import '../../TelaPerfilVisitante.css'
import BotaoSeguir from './BotaoSeguir/BotaoSeguir'
import BotaoCurso from './BotaoCurso/BotaoCurso'
import BotaoBio from './BotaoBio/BotaoBio'

export default function BotoesDoPerfil() {
    return (
        <div className='botoesPerfil'>
            <BotaoSeguir></BotaoSeguir>
            <BotaoCurso></BotaoCurso>
            <BotaoBio></BotaoBio>
        </div>
    )
}   