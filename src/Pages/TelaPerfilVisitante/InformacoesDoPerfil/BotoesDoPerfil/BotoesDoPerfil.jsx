import '../../TelaPerfilVisitante.css'
import BotaoSeguir from './BotaoSeguir/BotaoSeguir'
import BotaoCurso from './BotaoCurso/BotaoCurso'
import BotaoBio from './BotaoBio/BotaoBio'

export default function BotoesDoPerfilVisitante({curso}) {
    return (
        <div className='botoesPerfil'>
            <BotaoSeguir></BotaoSeguir>
            <BotaoCurso curso={curso}></BotaoCurso>
            {/* <BotaoBio></BotaoBio> */}
        </div>
    )
}   