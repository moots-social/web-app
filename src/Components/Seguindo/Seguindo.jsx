import './seguindo.css'
import ListaSeguindo from './ListaPessoasSeguindo/ListaSeguindo'
import BotoesSeguindo from './BotoesSeguindoSeguidores/BotoesSeguindo'
import IconeFechar from '../../assets/img/fechar.svg'
import { createContext } from 'react'
import { iconClasses } from '@mui/material'


export const AbrirModalSeguindo = createContext(() => {
  let modal = document.querySelector(".containerSeguindo");
  modal.style.display = "flex";
});

export default function Seguindo() {

  function FecharModal() {
    let botaoFechar = document.querySelector(".menu");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerSeguindo");
      modal.style.cssText = "display:none";
    });
  }

  return (
    <div className='containerSeguindo'>
      <div className="menu" onClick={FecharModal}>
        <img src={IconeFechar} className='iconeFecharSeguindo'></img>
      </div>
      <div className='divBotoesSeguindo'>
        <BotoesSeguindo />
      </div>
      <div className='listaSeguindo'>
        <ListaSeguindo />
        <ListaSeguindo />
        <ListaSeguindo />
        <ListaSeguindo />
      </div>
    </div>
  )
}