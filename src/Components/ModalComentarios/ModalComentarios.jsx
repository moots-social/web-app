// import "./modalComentarios.css";
// import enviarComentario from "../../assets/img/iconeEnviar.png";
// import { createContext, useState } from "react";
// import api from "../../config/api";

// let idPost;

// const [comentarios, setComentarios] = useState([])

// const token = localStorage.getItem("token");

// export const AbrirModalComent = createContext((teste) => {
//   let modalC = document.querySelector(".total");
//   modalC.style.display = "flex";
//   idPost = teste; // Atribuindo o id do post para envio de comentário
// });

// export const GetComentarios = async (postId) => {
//   console.log("hahahaahahahahahhahahahahahahahahahahaha")
//   try {
//     const dados = await api.get(`/post/find-all`, {
//       headers: { authorization: `${token}` },
//     });

    

//     console.log(dados.data) 

//     const req = await dados.data;
//     if (req) {
//       setComentarios(dados.data)
//       console.log(req);
//       console.log(comentarios + "haha")
//     }
//   } catch (error) {
//     window.alert(error);
//   }
  
// };

// export default function ModalComentarios() {

//   const token = localStorage.getItem("token");
//   const id = localStorage.getItem("id");

//   function FecharModalC() {
//     let botaoFechar = document.querySelector(".menuC");
//     botaoFechar.addEventListener("click", () => {
//       let modal = document.querySelector(".containerTotal");
//       modal.style.cssText = "display:none";
//     });
//   }

//   const CriarComentario = async () =>{

//     let textoDoComentario = document.querySelector('.textoDoComentario').value
  
//     console.log(textoDoComentario)
  
//     console.log(idPost)
//     try {
//       const dados = await api.post(
//         `/comentario/criar/${idPost}`,
    
//         {
//           texto: textoDoComentario,
//           postId: idPost,
//         },
//         {
//           headers: { authorization: `${token}` }
//         }
//       );
//       console.log(dados.data);
//       console.log(idPost + textoDoComentario + "jifshiuhsrupted")
//       window.alert("comentario criado");
//     }catch(error){
//         console.log(error)
//     }
  
//   }

//   return (
//     <div className="total">



//       <div className=" containerTotal bg">

//         <div className="menuC" onClick={FecharModalC}>
//           <span className="barC"></span>
//           <span className="barC"></span>
//         </div>
//         <div className="balaoComentarios">
//           <div className="perfilComentario">
//             <div className="imagemPerfilComentario">
//               <img src="https://picsum.photos/id/1068/100/100" alt="imagem" />
//             </div>
//             <div className="nomeUsuarioComentario">
//               <span className="usernameComent">Livia</span>
//               <span className="tagComent">@Livia</span>   
//             </div>
//           </div>
//           <div className="divComentario">
//             <p className="comentario">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pbero nisi exercitationem aspernatur facere aperiam hkhijkdhwqjdhquehgwqjqgdqwdhjwbduiahjdkaishdklahsidsdhau</p>
//           </div>
//         </div>
//         <div className="balaoComentarios">
//           <div className="perfilComentario">
//             <div className="imagemPerfilComentario">
//               <img src="https://picsum.photos/id/1068/100/100" alt="imagem" />
//             </div>
//             <div className="nomeUsuarioComentario">
//               <span className="usernameComent">Livia</span>
//               <span className="tagComent">@Livia</span>  
//             </div>
//           </div>
//           <div className="divComentario">
//             <p className="comentario">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
//           </div>
//         </div>
//         <div className="novoComentario">
//             <input type="text" className="textoDoComentario" placeholder="Escreva um comentário..." />
//             <img src={enviarComentario} className="iconeEnviarC" alt="enviar" onClick={CriarComentario}></img>
//         </div>
//       </div>
//     </div>
//   );
// }
import "./modalComentarios.css";
import enviarComentario from "../../assets/img/iconeEnviar.png";
import { createContext, useState, useEffect } from "react";
import api from "../../config/api";

let idPost;

export const AbrirModalComent = createContext((teste) => {
  let modalC = document.querySelector(".total");
  modalC.style.display = "flex";
  idPost = teste; // Atribuindo o id do post para envio de comentário
  console.log(idPost)
});

let comentariosTeste;

export const GetComentarios = async (postId, setComentarios) => {
  try {
    const dados = await api.get(`/post/${postId}`, {
      headers: { authorization: `${localStorage.getItem("token")}` },
    });

    console.log(dados.data.comentarioList)

    // Atualiza os comentários no estado
    if (dados.data) {
      setComentarios(dados.data.comentarioList)
    }
  } catch (error) {
    window.alert(error);
  }
};

export default function ModalComentarios() {
  const [comentarios,   setComentarios] = useState([]);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (idPost) {
      GetComentarios(idPost, setComentarios);
    }
  }, [idPost]); // Recarrega os comentários toda vez que idPost mudar

  function FecharModalC() {
    let botaoFechar = document.querySelector(".menuC");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerTotal");
      modal.style.cssText = "display:none";
    });
  }

  const CriarComentario = async () => {
    let textoDoComentario = document.querySelector('.textoDoComentario').value;

    console.log(comentarios)
    try {
      const dados = await api.post(
        `/comentario/criar/${idPost}`,
        {
          texto: textoDoComentario,
          postId: idPost,
        },
        {
          headers: { authorization: `${token}` },
        }
      );
      console.log(dados.data);
      window.alert("Comentário criado");
      // Após criar o comentário, podemos atualizar a lista de comentários (opcional)
      GetComentarios(idPost, setComentarios);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="total">
      <div className="containerTotal bg">
        <div className="menuC" onClick={FecharModalC}>
          <span className="barC"></span>
          <span className="barC"></span>
        </div>

        {comentarios.length > 0 ? (
          comentarios.map((comentario) => (
            <div className="balaoComentarios" key={comentario.id}>
              <div className="perfilComentario">
                <div className="imagemPerfilComentario">
                  <img src="https://picsum.photos/id/1068/100/100" alt="imagem" />
                </div>
                <div className="nomeUsuarioComentario">
                  <span className="usernameComent">{comentario.nomeCompleto}</span>
                  <span className="tagComent">@{comentario.tag}</span>
                </div>
              </div>
              <div className="divComentario">
                <p className="comentario">{comentario.texto}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Carregando comentários...</p>
        )}

        <div className="novoComentario">
          <input type="text" className="textoDoComentario" placeholder="Escreva um comentário..." />
          <img
            src={enviarComentario}
            className="iconeEnviarC"
            alt="enviar"
            onClick={CriarComentario}
          />
        </div>
      </div>
    </div>
  );
}
