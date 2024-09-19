import "./sideBarChat.css";
import { Link } from "react-router-dom";
import pesquisaChat from "../../../assets/img/iconePesquisa.png";
import homeChat from "../../../assets/img/iconeHome.png";
import mensagemChat from "../../../assets/img/iconeMensagens.png";
import novoPostChat from "../../../assets/img/iconeNovoPost.png";
import coracaoChat from "../../../assets/img/iconeCoracao.png";
import perfilChat from "../../../assets/img/iconePerfil.png";


export default function SideBarChat() {
  return (
    <div className="sideBarChat">
      <div className="containerTopoChat">
        <div className="containerInputChat">
          <input className="pesquisaChat" type="text" name="" id="" />
        </div>
        <div className="containerIconeChat pesquisaIconeChat">
          <div className="iconeChat">
            <img src={pesquisaChat} alt="icone-home" />
          </div>
        </div>
        <Link to="/feed">
        <div className="containerIconeChat">
          <div className="iconeChat">
            <img src={homeChat} alt="icone-home" />
          </div>
          <div className="tituloIconeChat">
            <p>Página Inicial</p>
          </div>
        </div>
        </Link>
        <Link to="/telaChat">
          <div className="containerIconeChat">
            <div className="iconeChat">
              <img src={mensagemChat} alt="icone-mensagem" />
            </div>
            <div className="tituloIconeChat">
              <p>Mensagens</p>
            </div>
          </div>
        </Link>
        <div className="containerIconeChat">
          <div className="iconeChat">
            <img src={novoPostChat} alt="icone-novo-post    " />
          </div>
          <div className="tituloIconeChat">
            <p>Novo Post</p>
          </div>
        </div>
        <Link to="/salvos">
          <div className="containerIconeChat">
            <div className="iconeChat">
              <img src={coracaoChat} alt="icone coracao   " />
            </div>
            <div className="tituloIconeChat">
              <p>Coleções</p>
            </div>
          </div>
        </Link>
      </div>
      <Link to="/perfil">
        <div className="perfilChat">
          <div className="imagemPerfilChat">
            <img src={perfilChat} alt="" />
          </div>
          <div className="nomeUsuarioChat">
            <p>Nome do Usuário</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
