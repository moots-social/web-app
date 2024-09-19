import "./telaChat.css";
import SideBarChat from "./SideBarChat/SideBarChat";
import '../../Components/SideBar/sidebar.css'
import PerfisChatEsquerda from"./PerfisChatEsquerda/PerfisChatEsquerda";
import PerfilAtivoChatDireita from "./PerfilAtivoChatDireita/PerfilAtivoChatDireita";

export default function telaChat() {
  return (
    <div className="divTelaChat bg">
      <SideBarChat></SideBarChat>
      <PerfisChatEsquerda></PerfisChatEsquerda>
      <PerfilAtivoChatDireita></PerfilAtivoChatDireita>
    </div>
  );
}
