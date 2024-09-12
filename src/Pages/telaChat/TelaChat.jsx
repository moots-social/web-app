import "./telaChat.css";
import SideBar from "../../Components/SideBar/SideBar";
import '../../Components/SideBar/sidebar.css'
import PerfisChatEsquerda from"./PerfisChatEsquerda/PerfisChatEsquerda";
import PerfilAtivoChatDireita from "./PerfilAtivoChatDireita/PerfilAtivoChatDireita";

export default function telaChat() {
  return (
    <div className="divTelaChat bg">
      <SideBar></SideBar>
      <PerfisChatEsquerda></PerfisChatEsquerda>
      <PerfilAtivoChatDireita></PerfilAtivoChatDireita>
    </div>
  );
}
