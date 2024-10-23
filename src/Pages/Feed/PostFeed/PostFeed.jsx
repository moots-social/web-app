import PerfilFeed from "../../../assets/img/perfil.png";
import "../feed.css";
import { useContext } from "react"
import ModalNovoPost, { AbrirModal } from "../../../Components/ModalNovoPost/ModalNovoPost";
import {useUsuarioContext} from "../../../Context/useUsuarioContext";

export default function PostFeed() {
  
  const {usuario} =useUsuarioContext();
  return (
    <>
      <ModalNovoPost></ModalNovoPost>
      <div className="postFeedContainer" onClick={useContext(AbrirModal)}>
        <img className="pfpPostFeed" src={usuario.fotoPerfil}></img>
        <p className="textoPostFeed">
          O que você está pensando?
        </p>
      </div>
    </>
  );
}
