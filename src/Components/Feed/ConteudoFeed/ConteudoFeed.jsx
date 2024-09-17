import Reacoes from '../Reacoes/Reacoes'
import FeedImagem from '../ImagemFeed/ImagemFeed'
import PerfilFeed from '../PerfilFeed/PerfilFeed'
import DescricaoFeed from '../DescricaoFeed/DescricaoFeed'
import './conteudoFeed.css'

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