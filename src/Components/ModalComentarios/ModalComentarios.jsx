import "./modalComentarios.css";
import enviarComentario from "../../assets/img/iconeEnviar.png";
import { createContext } from "react";
import api from "../../config/api";

let idPost;

export const AbrirModalComent = createContext((teste) => {
  let modalC = document.querySelector(".total");
  modalC.style.display = "flex";
  idPost = teste; // Atribuindo o id do post para envio de comentário
});


const token = localStorage.getItem("token");
const id = localStorage.getItem("id");

//Método para enviar comentário
const CriarComentario = async () =>{

  let textoDoComentario = document.querySelector('.textoDoComentario').value

  console.log(textoDoComentario)

  console.log(idPost)
  try {
    const dados = await api.post(
      `/comentario/criar/${idPost}`,
  
      {
        texto: textoDoComentario,
        postId: idPost,
      },
      {
        headers: { authorization: `${token}` }
      }
    );
    console.log(dados.data);
    console.log(idPost + textoDoComentario + "jifshiuhsrupted")
    window.alert("comentario criado");
  }catch(error){
      console.log(error)
  }

}

function FecharModalC() {
  let botaoFechar = document.querySelector(".menuC");
  botaoFechar.addEventListener("click", () => {
    let modal = document.querySelector(".containerTotal");
    modal.style.cssText = "display:none";
  });
}

export default function ModalComentarios() {
  return (
    <div className="total">


      <div className=" containerTotal bg">

        <div className="menuC" onClick={FecharModalC}>
          <span className="barC"></span>
          <span className="barC"></span>
        </div>
        <div className="balaoComentarios">
          <div className="perfilComentario">
            <div className="imagemPerfilComentario">
              <img src="https://picsum.photos/id/1068/100/100" alt="imagem" />
            </div>
            <div className="nomeUsuarioComentario">
              <span className="usernameComent">Livia</span>
              <span className="tagComent">@Livia</span>   
            </div>
          </div>
          <div className="divComentario">
            <p className="comentario">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pbero nisi exercitationem aspernatur facere aperiam hkhijkdhwqjdhquehgwqjqgdqwdhjwbduiahjdkaishdklahsidsdhau</p>
          </div>
        </div>
        <div className="balaoComentarios">
          <div className="perfilComentario">
            <div className="imagemPerfilComentario">
              <img src="https://picsum.photos/id/1068/100/100" alt="imagem" />
            </div>
            <div className="nomeUsuarioComentario">
              <span className="usernameComent">Livia</span>
              <span className="tagComent">@Livia</span>  
            </div>
          </div>
          <div className="divComentario">
            <p className="comentario">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          </div>
        </div>
        <div className="novoComentario">
            <input type="text" className="textoDoComentario" placeholder="Escreva um comentário..." />
            <img src={enviarComentario} className="iconeEnviarC" alt="enviar" onClick={CriarComentario}></img>
        </div>
      </div>
    </div>
  );
}
