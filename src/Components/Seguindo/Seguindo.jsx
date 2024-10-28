import './seguindo.css'
import ListaSeguindo from './ListaPessoasSeguindo/ListaSeguindo'
import BotoesSeguindo from './BotoesSeguindoSeguidores/BotoesSeguindo'
import { createContext } from 'react'


export const AbrirModalSeguindo = createContext(() => {
    let modal = document.querySelector(".containerSeguindo");
    modal.style.display = "flex";
  });

export default function Seguindo(){

    function FecharModal() {
        let botaoFechar = document.querySelector(".menu");
        botaoFechar.addEventListener("click", () => {
          let modal = document.querySelector(".containerModalNovoPost");
          modal.style.cssText = "display:none";
        });
      }
   
    return(
        <div className='containerSeguindo'>
            <div className="menu" onClick={FecharModal}>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
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