import "./modalNovoPost.css";
import perfil from "../../assets/img/imagemPerfil.png";
import imagemEnviar from "../../assets/img/iconeImagemPost.png";
import { createContext, useContext, useState } from "react";
import Feed from "../../Pages/Feed/Feed";


export let teste2 = createContext(false)

export const AbrirModal = createContext(() => {
  let modal = document.querySelector(".containerModalNovoPost");
  modal.style.display = "flex";
  teste2 = true
}); 


export default function ModalNovoPost() {
function FecharModal() {
    let botaoFechar = document.querySelector(".menu");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerModalNovoPost");
        modal.style.cssText = "display:none";
    });
  }

  return (
    <div className="containerModalNovoPost">
      <div className="modalNovoPost bg">
        <div className="menu" onClick={FecharModal}>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="tituloModalNovo">
          <h1>Nova Publicação</h1>
          <hr className="listraTitulo"></hr>
        </div>
        <div className="containerPerfilNovoPost">
          <div className="perfilNovoPost">
            <img src={perfil} alt="perfil"></img>
            <p>Leonardo</p>
          </div>
          <div className="textoNovoPost">
            <input
              type="text"
              placeholder="No que você esta pensando..."
            ></input>
            <img
              className="imagemEnviarPost"
              src={imagemEnviar}
              alt="enviarImagem"
            ></img>
          </div>
        </div>
        <div className="botaoPublicar">
          <button>Publicar</button>
        </div>
      </div>
    </div>
  );
}
