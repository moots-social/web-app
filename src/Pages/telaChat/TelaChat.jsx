import "./telaChat.css";
import SideBar from "../../Components/SideBar/SideBar";
import imagemPerfil from "../../assets/img/imagemPerfil.png";

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
      </div>
    </div>
  );
}
