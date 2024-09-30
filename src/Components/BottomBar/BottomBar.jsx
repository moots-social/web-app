import "./bottomBar.css";
import home from "../../assets/img/iconeHome.png";
import mensagem from "../../assets/img/iconeMensagens.png";
import novoPost from "../../assets/img/iconeNovoPost.png";
import pesquisa from "../../assets/img/iconePesquisa.png";
import perfil from "../../assets/img/iconePerfil.png";


export default function BottomBar() {
  return (
      <div className="containerBottomBar">
        <img src={home} alt="Home"></img>
        <img src={mensagem} alt="Mensagem"></img>
        <img src={novoPost} alt="Novo Post"></img>
        <img src={pesquisa} className="iconePesquisa" alt="Pesquisa"></img>
        <img src={perfil} alt="Perfil"></img>
      </div>
  );
}
