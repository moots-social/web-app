import "./PostPerfil.css";
import { useUsuarioContext } from "../../Context/useUsuarioContext";
import { useState, useEffect } from "react";
import api from "../../config/api";

export default function PostPerfil() {
  const { usuario } = useUsuarioContext();
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState({}); // Estado para controlar quais posts estão expandidos

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const getPosts = async () => {
    try {
      const dados = await api.get(`/search/post/${id}`, { headers: { authorization: `${token}` } });
      const req = await dados.data;
      if (req) {
        setPosts(req);
      }
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const toggleTexto = (index) => {
    // Alterna a expansão do post específico
    setExpandedPosts((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


          const deletarPost = async (postId) => {
          try {
            await api.delete(`/post/deletar/${postId}`, {
              headers: { authorization: `Bearer ${token}` },
            });
            // Após a exclusão, removemos o post da lista de posts
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
            window.alert("Post deletado com sucesso");
            window.location.reload()
          } catch (error) {
            window.alert("Erro ao excluir o post: " + error.response?.data?.error || error.message);
          }
        };

  return (
    <>
      {posts.map((post, index) => {
        // Define o texto limitado a 100 caracteres
        const textoLimitado = post.texto.length > 100 ? post.texto.slice(0, 100) : post.texto;
        
        // Verifica se o post está expandido ou não
        const mostrarCompleto = expandedPosts[index];

        return (
          <div className="conteudoFeedPerfil" key={index}>
            <div className="perfilFeedContainer">
              <div>
                <img className="pfpFeed" src={usuario.fotoPerfil} alt="Foto de perfil" />
              </div>
              <div className="perfilInfo">
                <p className="nomePerfilFeed">{usuario.nomeCompleto}</p>
                <p className="arrobaFeed">{usuario.tag}</p>
              </div>
            </div>

            {/* Mostrar o texto completo ou limitado com base no estado */}
            <p className="textoDescricao">
              {mostrarCompleto ? post.texto : textoLimitado}
              {/* Adicionar o botão "Ler Mais" ou "Ler Menos" */}
              {post.texto.length > 100 && (
                <span className="lerMais" onClick={() => toggleTexto(index)} style={{cursor: 'pointer', color: '#c4c4c4'}}>
                  {mostrarCompleto ? " Ler Menos" : "... Ler Mais"}
                </span>
              )}
            </p>

            <div className="containerImagemFeedPerfil">
              <img className="imagemFeed" src={post.listImagens[0]} alt="Imagem do post" />
            </div>
            <button
              onClick={() => deletarPost(post.postId)}
              className="botaoExcluir"
              style={{ cursor: 'pointer', color: '#ff0000', background: 'none', border: 'none', padding: '5px' }}
            >
              Excluir
            </button>
          </div>
        );
      })}
    </>
  );
}
