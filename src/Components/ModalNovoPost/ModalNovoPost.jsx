import "./modalNovoPost.css";
import perfil from "../../assets/img/imagemPerfil.png";
import imagemEnviar from "../../assets/img/iconeImagemPost.png";

export default function modalNovoPost() {
  return (
    <div className="containerModalNovoPost">
      <div className="modalNovoPost bg">
        <div className="tituloModalNovo">
          <h1>Nova Publicação</h1>
          <hr className="listraTitulo"></hr>
        </div>
        <div className="containerPerfilNovoPost">
          <div className="perfilNovoPost">
            <img src={perfil} alt="perfil"></img>
            <p>Leonardo</p>
          </div>
            <div className="textoNovoPost">
              <input
                type="text"
                placeholder="No que você esta pensando..."
              ></input>
              <img className="imagemEnviarPost"src={imagemEnviar} alt="enviarImagem"></img>
            </div>
        </div>
        <div className="botaoPublicar">
          <button>Publicar</button>
        </div>
      </div>
    </div>
  );
}
