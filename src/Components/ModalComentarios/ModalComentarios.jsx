import "./modalComentarios.css";
import enviarComentario from "../../assets/img/iconeEnviar.png";

export default function ModalComentarios() {
  return (
    <div className="total">
      <div className=" containerTotal bg">
        <div className="balaoComentarios">
          <div className="perfilComentario">
            <div className="imagemPerfilComentario">
              <img src="https://picsum.photos/id/1068/100/100" alt="imagem" />
            </div>
            <div className="nomeUsuarioComentario">
              <p>Livia</p>
              <p>@Livia</p>  
            </div>
          </div>
          <div className="divComentario">
            <p className="comentario">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pbero nisi exercitationem aspernatur facere aperiam</p>
          </div>
        </div>
        <div className="balaoComentarios">
          <div className="perfilComentario">
            <div className="imagemPerfilComentario">
              <img src="https://picsum.photos/id/1068/100/100" alt="imagem" />
            </div>
            <div className="nomeUsuarioComentario">
              <p>Livia</p>
              <p>@Livia</p>  
            </div>
          </div>
          <div className="divComentario">
            <p className="comentario">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          </div>
        </div>
        <div className="novoComentarios">
            <input type="text" placeholder="Escreva um comentário..." />
            <img src={enviarComentario} className="iconeEnviarC" alt="enviar"></img>
        </div>
      </div>
    </div>
  );
}
