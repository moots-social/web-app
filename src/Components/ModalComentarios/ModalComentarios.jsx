import { useState, useEffect } from "react";
import { useModal } from "../../Context/ModalContext"; // Usando o hook do contexto
import api from "../../config/api";
import enviarComentario from "../../assets/img/iconeEnviar.png";
import "./modalComentarios.css";

export default function ModalComentarios() {
  const { isOpen, idPost, fecharModal } = useModal();
  const [comentarios, setComentarios] = useState([]);
  const token = localStorage.getItem("token");

  // Função para buscar os comentários
  const GetComentarios = async (postId, setComentarios) => {
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
    }
  };

  // Quando o modal abrir, busca os comentários
  useEffect(() => {
    console.log('isOpen:', isOpen);
    console.log('idPost:', idPost);
    GetComentarios(idPost, setComentarios);
  }, [isOpen, idPost]); 

  // Função para criar um novo comentário
  const CriarComentario = async () => {
    const textoDoComentario = document.querySelector('.textoDoComentario').value;
    try {
      await api.post(
        `/comentario/criar/${idPost}`,
        { texto: textoDoComentario, postId: idPost },
        { headers: { authorization: `${token}` } }
      );
      window.alert("Comentário criado");
      GetComentarios(); // Atualiza os comentários após criar
    } catch (error) {
      console.log(error);
    }
  };

  if(!isOpen) { 
    return null;
  } else {
    return (
      <div className="total">
        <div className="containerTotal bg">
          <div className="menuC" onClick={fecharModal}>
            <span className="barC"></span>
            <span className="barC"></span>
          </div>
  
          {comentarios.length > 0 ? (
            comentarios.map((comentario) => (
              <div className="balaoComentarios" key={comentario.id}>
                <div className="perfilComentario">
                  <div className="imagemPerfilComentario">
                    <img src={comentario.fotoPerfil} alt="imagem" />
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
}
