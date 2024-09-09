import "./telaChat.css";
import SideBar from "../../Components/SideBar/SideBar";
import imagemPerfil from "../../assets/img/imagemPerfil.png";
import gabriel from "../../assets/img/chatGabriel.png";

export default function telaChat() {
  return (
    <div className="divTelaChat bg">
      <SideBar></SideBar>
      <div className="containerImagemChatNomeChat">
        <div className="imagemPerfilPrincipal">
          <img src={imagemPerfil} alt="" />
        </div>
        <div className="nomeMensagem">
          <h1>Mensagens</h1>
        </div>
        <div className="containermensagensAtivas">
          <div className="imagemPerfilAtivo">
            <img src={gabriel} alt="" />
          </div>
          <div className="nomePerfilMensagem">
            <div className="nomePerfil">
              <p>Gabriel Anjos</p>
            </div>
            <div className="mensagemAntiga">
              <p>enviou um anexo . 6h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
