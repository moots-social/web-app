import "../feed.css";
import IconeLike from "../../../assets/img/iconeCoracao.svg";
import IconeFavorito from "../../../assets/img/iconeEstrela.svg";
import IconeComentario from "../../../assets/img/iconeComentarios.svg";
import IconeCoracaoVermelho from "../../../assets/img/coracaoVermelho.png";
import iconeEstrelaPreenchido from "../../../assets/img/iconeEstrelaPreenchida.svg";
import { useUsuarioContext } from "../../../Context/useUsuarioContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../config/api";

export default function FeedConteudo() {
  const { usuario } = useUsuarioContext();
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleTexto = (index) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const token = localStorage.getItem("token");

  // Função para buscar os posts
  const getPosts = async () => {
    try {
      const dados = await api.get(`/post/find-all`, {
        headers: { authorization: `${token}` },
      });

      const req = await dados.data;
      if (req) {
        setPosts(req);
        console.log(req);
      }
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };

  const curtirPost = async (postId, deuLike, contadorLike) => {
    try {
      const likeStatus = deuLike ? false : true;
      const dados = await api.put(
        `/post/dar-like`,
        {},
        {
          headers: { authorization: `${token}` },
          params: {
            postId: postId,
            like: likeStatus,
          },
        }
      );

      const req = await dados.data;

      if (req) {
        console.log(req);
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? { ...post, contadorLike: req.contadorLike, deuLike: likeStatus }
              : post
          )
        );
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const salvarPostColecao = async (postId) => {
    try {
      const dados = await api.post(
        `/post/salvar-post-colecao`,
        {},
        {
          headers: { authorization: `${token}` },
          params: {
            postId: postId,
          },
        }
      );

      const req = await dados.data;

      if (req) {
        console.log(req);
        window.alert("Post salvo na coleção");
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="conteudoFeedF">
      {posts?.map((post, index) => {
        const textoLimitado = post.texto.length > 100 ? post.texto.slice(0, 100) : post.texto;
        const mostrarCompleto = expandedPosts[index];

        return (
          <div className="perfilFeedContainerF" key={index}>
            <div className="paiPfpFeedF">
              <Link to="/perfil/:id">
                <img src={post.fotoPerfil} alt="" className="pfpfeedF" />
              </Link>
              <div className="perfilInfoF">
                <Link to="/perfil/:id">
                  <p className="nomePerfilFeedF">{post.nomeCompleto}</p>
                  <p className="arrobaFeedF">{post.tag}</p>
                </Link>
              </div>
            </div>
            <div className="textoDescricaoF">
              <p className="textoDescricao">
                {mostrarCompleto ? post.texto : textoLimitado}
                {post.texto.length > 100 && (
                  <span
                    className="lerMais"
                    onClick={() => toggleTexto(index)}
                    style={{ cursor: "pointer", color: "#c4c4c4" }}
                  >
                    {mostrarCompleto ? " Ler Menos" : "... Ler Mais"}
                  </span>
                )}
              </p>
            </div>
            <div className="containerImagemFeedF">
              <img src={post.listImagens[0]} alt="" className="imagemFeedF" />
            </div>
            <div className="reacoesF">
              <div className="reactionsF">
                <div>
                  <img
                    className="iconesReacaoF"
                    src={post.deuLike ? IconeCoracaoVermelho : IconeLike}
                    onClick={() => curtirPost(post.id, post.deuLike, post.contadorLike)}
                    alt="Curtir"
                  />
                  <p className="contadorLikeF">{post.contadorLike}</p>
                </div>
                <img
                  className="iconesReacaoF"
                  src={iconeEstrelaPreenchido}
                  onClick={() => salvarPostColecao(post.id)}
                  alt="Favorito"
                />
              </div>
              <div className="commentsF">
                <img className="iconesReacaoF" src={IconeComentario} alt="Comentários" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
