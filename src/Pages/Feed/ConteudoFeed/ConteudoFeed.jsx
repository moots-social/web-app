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

  const token = localStorage.getItem("token");

  const [heartColor, setHeartColor] = useState(IconeLike);


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
      // Alterna o like (deuLike) e faz o request
      const likeStatus = deuLike ? false : true; // Alterna entre true e false
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

      // Atualiza o contador de likes
      if (req) {
        console.log(req.contadorLike);
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? { ...post, contadorLike: req.contadorLike, deuLike: likeStatus }
              : post
          )
        );
      }

      if (likeStatus == true) {
        setHeartColor(IconeCoracaoVermelho);
      } else {
        setHeartColor(IconeLike);
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
      {posts?.map((e, index) => {
        return (
          <div className="perfilFeedContainerF" key={index}>
            <div className="paiPfpFeedF">
              <Link to="/perfil/:id">
                <img src={e.fotoPerfil} alt="" className="pfpfeedF" />
              </Link>
              <div className="perfilInfoF">
                <Link to="/perfil/:id">
                  <p className="nomePerfilFeedF">{e.nomeCompleto}</p>
                  <p className="arrobaFeedF">{e.tag}</p>
                </Link>
              </div>
            </div>
            <div className="textoDescricaoF">
              <p>{e.texto}</p>
            </div>
            <div className="containerImagemFeedF">
              <img src={e.listImagens[0]} alt="" className="imagemFeedF" />
            </div>
            <div className="reacoesF">
              <div className="reactionsF">
                <div>
                  <img
                    className="iconesReacaoF"
                    src={heartColor}
                    onClick={() => curtirPost(e.id, e.deuLike, e.contadorLike)}
                  ></img>
                  <p className="contadorLikeF">{e.contadorLike}</p>
                </div>  
                <img className="iconesReacaoF" src={iconeEstrelaPreenchido}></img>
              </div>
              <div className="commentsF">
                <img className="iconesReacaoF" src={IconeComentario}></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
