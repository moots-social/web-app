import "./telaChat.css";
import SideBar from "../../Components/SideBar/SideBar";
import imagemPerfil from "../../assets/img/imagemPerfil.png";
import gabriel from "../../assets/img/chatGabriel.png";
import emerson from "../../assets/img/chatEmerson.png";
import julia from "../../assets/img/chatJulia.png";
import livia from "../../assets/img/chatLivia.png";
import caua from "../../assets/img/chatCaua.png";
import joao from "../../assets/img/chatJoao.png";
import '../../Components/SideBar/sidebar.css'

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
        <div className="containerMensagemTodas">
          <div className="containermensagensAtivas">
            <div className="imagemPerfilAtivo">
              <img src={gabriel} alt="" />
            </div>
            <div className="nomePerfilMensagem">
              <div className="nomePerfil">
                <p>Gabriel Anjos</p>
              </div>
              <div className="mensagemRecente">
                <p>enviou um anexo . 6h</p>
              </div>
            </div>
          </div>
          <div className="containermensagensAtivas">
            <div className="imagemPerfilAtivo">
              <img src={emerson} alt="" />
            </div>
            <div className="nomePerfilMensagem">
              <div className="nomePerfil">
                <p>Emerson Vieira</p>
              </div>
              <div className="mensagemRecente">
                <p>enviou um anexo . 6h</p>
              </div>
            </div>
          </div>
          <div className="containermensagensAtivas">
            <div className="imagemPerfilAtivo">
              <img src={julia} alt="" />
            </div>
            <div className="nomePerfilMensagem">
              <div className="nomePerfil">
                <p>Julia Freitas</p>
              </div>
              <div className="mensagemRecente">
                <p>Léo, e meus cinco reais?. 9h</p>
              </div>
            </div>
          </div>
          <div className="containermensagensAtivas">
            <div className="imagemPerfilAtivo">
              <img src={livia} alt="" />
            </div>
            <div className="nomePerfilMensagem">
              <div className="nomePerfil">
                <p>Livia Bello</p>
              </div>
              <div className="mensagemRecente">
                <p>enviou um anexo . 12h</p>
              </div>
            </div>
          </div>
          <div className="containermensagensAtivas">
            <div className="imagemPerfilAtivo">
              <img src={caua} alt="" />
            </div>
            <div className="nomePerfilMensagem">
              <div className="nomePerfil">
                <p>Cauã Abreu</p>
              </div>
              <div className="mensagemRecente">
                <p>enviou uma mensagem . 14h</p>
              </div>
            </div>
          </div>
          <div className="containermensagensAtivas">
            <div className="imagemPerfilAtivo">
              <img src={joao} alt="" />
            </div>
            <div className="nomePerfilMensagem">
              <div className="nomePerfil">
                <p>João Paulo</p>
              </div>
              <div className="mensagemRecente">
                <p>enviou uma mensagem . 16h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mensagemAtual">
        <div className="imagemMensagemAtual">
          <img src={gabriel} alt="" />
        </div>
        <div className="containerMensagemAtual">
          <div className="nomeMensagemAtual">
            <p>Gabriel Anjos</p>
          </div>
          <div className="tagUsuarioMensagemAtual">
            <p>@gabrielAnjinho</p>
          </div>
        </div>
      </div>
    </div>
  );
}
