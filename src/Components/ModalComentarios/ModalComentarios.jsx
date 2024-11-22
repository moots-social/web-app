import "./modalComentarios.css";
import enviarComentario from "../../assets/img/iconeEnviar.png";
import { createContext } from "react";

export const AbrirModalComent = createContext((teste) => {
  let modalC = document.querySelector(".total");
  modalC.style.display = "flex";
  console.log(teste)
});
const token = localStorage.getItem("token");
const id = localStorage.getItem("id");

// Método para enviar comentário
// const CriarComentario = async () =>{
//   try {
//     const dados = await api.post(
//       `/comentario/criar/${}`,
//       {},
//       {
//         headers: { authorization: `${token}` },
//         params: {
//           postId: postId,
//         },
//       }
//     );

//     window.alert("comentario criado");
//   }catch(error){

//   }

// }


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
            <input type="text" placeholder="Escreva um comentário..." />
            <img src={enviarComentario} className="iconeEnviarC" alt="enviar"></img>
        </div>
      </div>
    </div>
  );
}
