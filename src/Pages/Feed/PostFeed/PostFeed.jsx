import PerfilFeed from "../../../assets/img/perfil.png";
import "../feed.css";
import { useContext } from "react"
import ModalNovoPost, { AbrirModal } from "../../../Components/ModalNovoPost/ModalNovoPost";

export default function PostFeed() {
  
  return (
    <>
      <ModalNovoPost></ModalNovoPost>
      <div className="postFeedContainer" onClick={useContext(AbrirModal)}>
        <img className="pfpPostFeed" src={PerfilFeed}></img>
        <p className="textoPostFeed">
          O que você está pensando?
        </p>
      </div>
    </>
  );
}
