import Reacoes from '../../../Pages/Feed/Reacoes/Reacoes'
import FeedImagem from '../../../Pages/Feed/ImagemFeed/ImagemFeed'
import PerfilFeed from '../../../Pages/Feed/PerfilFeed/PerfilFeed'
import DescricaoFeed from '../../../Pages/Feed/DescriçãoFeed/DescricaoFeed'
import '../feed.css'

export default function FeedConteudo(){
    return(
        <div className='conteudoFeed'>
            <PerfilFeed></PerfilFeed>
            <DescricaoFeed></DescricaoFeed>
            <FeedImagem></FeedImagem>
            <Reacoes></Reacoes>
        </div>
    )
}