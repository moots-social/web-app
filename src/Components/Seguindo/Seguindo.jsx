import './seguindo.css'
import ListaSeguindo from './ListaPessoasSeguindo/ListaSeguindo'
import BotoesSeguindo from './BotoesSeguindoSeguidores/BotoesSeguindo'

export default function Seguindo(){
    return(
        <div className='containerSeguindo'>
            <div className='divBotoesSeguindo'>
                <BotoesSeguindo/>
            </div>
            <div className='listaSeguindo'>
                <ListaSeguindo/>
                <ListaSeguindo/>
                <ListaSeguindo/>
                <ListaSeguindo/>
            </div>
        </div>
    )
}