import "./bottomBar.css";
import home from "../../assets/img/iconeHome.png";
import mensagem from "../../assets/img/iconeMensagens.png";
import novoPost from "../../assets/img/iconeNovoPost.png";
import pesquisa from "../../assets/img/iconePesquisa.png";
import { Link } from "react-router-dom";
import coracao from "../../assets/img/iconeEstrela.svg";


import {useUsuarioContext} from "../../Context/useUsuarioContext"



export default function BottomBar() {

  const { usuario } = useUsuarioContext();

  return (
      <div className="containerBottomBar">

        <Link to='/feed'>
        <img src={home} alt="Home"></img>
        </Link>        
        <Link to='/salvos'>
        <img src={coracao} alt="Novo Post" className="salvoBottom"></img>
        </Link>
        <img src={pesquisa} className="iconePesquisa" alt="Pesquisa"></img>
        <img src={usuario.fotoPerfil} alt="Perfil" className="pfpBottombar"></img>
      </div>
  );
}
