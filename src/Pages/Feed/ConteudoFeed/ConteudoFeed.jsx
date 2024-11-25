

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
import ModalComentarios from "../../../Components/ModalComentarios/ModalComentarios";
import { AbrirModalComent } from "../../../Components/ModalComentarios/ModalComentarios";
import { useContext } from "react";

export default function FeedConteudo() {
  const { usuario } = useUsuarioContext();
  const [posts, setPosts] = useState([]);
  // const [expandedPosts, setExpandedPosts] = useState({});

  // const toggleTexto = (index) => {
  //   setExpandedPosts((prevState) => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));
  // };

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  // Função para buscar os posts
  const getPosts = async () => {
    try {
      const dados = await api.get(`/post/find-all`, {
        headers: { authorization: `${token}` },
      });

      const req = await dados.data;
      if (req) {
        // Atualiza os posts com a informação de 'deuLike'
        const postsComLikeStatus = req.map(post => {
          // Verifica se o usuário já curtiu o post
          const deuLike = post.likeUsers.includes(id);
          return { ...post, deuLike };
        });

        setPosts(postsComLikeStatus);
        console.log(req);
      }
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };

  // Função para curtir ou descurtir o post
  const curtirPost = async (postId, deuLike) => {
    try {
      // Alterna o estado de like
      const likeStatus = deuLike ? false : true; // Se já deu like, vamos remover o like, caso contrário vamos dar o like

      // Envia a requisição para curtir ou descurtir o post
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

      window.alert("Post salvo na coleção");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };


  const julio = useContext(AbrirModalComent)

  const livia = async (idPost) => {
    julio(idPost)
  }
  

  useEffect(() => {
    getPosts();
  }, []);

  // return (
    
  //   <div className="conteudoFeedF">
  //     {posts?.map((post, index) => {
  //       const textoLimitado = post.texto.length > 100 ? post.texto.slice(0, 100) : post.texto;
  //       const mostrarCompleto = expandedPosts[index];

  //       return (
  //         <div className="perfilFeedContainerF" key={index}>
  //           <div className="paiPfpFeedF">
  //             <Link to="/perfil/:id">
  //               <img src={post.fotoPerfil} alt="" className="pfpfeedF" />
  //             </Link>
  //             <div className="perfilInfoF">
  //               <Link to="/perfil/:id">
  //                 <p className="nomePerfilFeedF">{post.nomeCompleto}</p>
  //                 <p className="arrobaFeedF">{post.tag}</p>
  //               </Link>
  //             </div>
  //           </div>
  //           <div className="textoDescricaoF">
  //             <p className="textoDescricao">
  //               {mostrarCompleto ? post.texto : textoLimitado}
  //               {post.texto.length > 100 && (
  //                 <span
  //                   className="lerMais"
  //                   onClick={() => toggleTexto(index)}
  //                   style={{ cursor: "pointer", color: "#c4c4c4" }}
  //                 >
  //                   {mostrarCompleto ? " Ler Menos" : "... Ler Mais"}
  //                 </span>
  //               )}
  //             </p>
  //           </div>
  //           <div className="containerImagemFeedF">
  //             <img src={post.listImagens[0]} alt="" className="imagemFeedF" />
  //           </div>
  //           <div className="reacoesF">
  //             <div className="reactionsF">
  //               <div>
  //                 <img
  //                   className="iconesReacaoF"
  //                   src={e.deuLike ? IconeCoracaoVermelho : IconeLike}
  //                   onClick={() => curtirPost(e.id, e.deuLike)} // Altera o estado do like
  //                   alt="Like"
  //                 />
  //                 <p className="contadorLikeF">{e.contadorLike}</p>
  //               </div>
  //               <img
  //                 className="iconesReacaoF"
  //                 src={iconeEstrelaPreenchido}
  //                 onClick={() => salvarPostColecao(e.id)}
  //                 alt="Favoritar"
  //               />
  //             </div>
  //             <div className="commentsF" onClick={livia}>
  //               <img className="iconesReacaoF" src={IconeComentario} alt="Comentários" />
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="conteudoFeedF">
      <ModalComentarios></ModalComentarios>
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
                    src={e.deuLike ? IconeCoracaoVermelho : IconeLike}
                    onClick={() => curtirPost(e.id, e.deuLike)} // Altera o estado do like
                    alt="Like"
                  />
                  <p className="contadorLikeF">{e.contadorLike}</p>
                </div>
                <img
                  className="iconesReacaoF"
                  src={iconeEstrelaPreenchido}
                  onClick={() => salvarPostColecao(e.id)}
                  alt="Favoritar"
                />
              </div>
              <div className="commentsF" onClick={()=>livia(e.id)}>
                <img className="iconesReacaoF" src={IconeComentario} alt="Comentários" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

