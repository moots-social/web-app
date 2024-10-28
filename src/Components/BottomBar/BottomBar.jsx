import "./bottomBar.css";
import home from "../../assets/img/iconeHome.png";
import mensagem from "../../assets/img/iconeMensagens.png";
import novoPost from "../../assets/img/iconeNovoPost.png";
import pesquisa from "../../assets/img/iconePesquisa.png";


import {useUsuarioContext} from "../../Context/useUsuarioContext"



export default function BottomBar() {

  const { usuario } = useUsuarioContext();

  return (
      <div className="containerBottomBar">
        <img src={home} alt="Home"></img>
        <img src={mensagem} alt="Mensagem"></img>
        <img src={novoPost} alt="Novo Post"></img>
        <img src={pesquisa} className="iconePesquisa" alt="Pesquisa"></img>
        <img src={usuario.fotoPerfil} alt="Perfil" className="pfpBottombar"></img>
      </div>
  );
}
