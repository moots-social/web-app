// import "../feed.css";
// import IconeLike from "../../../assets/img/iconeCoracao.svg";
// import IconeFavorito from "../../../assets/img/iconeEstrela.svg";
// import IconeComentario from "../../../assets/img/iconeComentarios.svg";
// import IconeCoracaoVermelho from "../../../assets/img/coracaoVermelho.png";
// import iconeEstrelaPreenchido from "../../../assets/img/iconeEstrelaPreenchida.svg";
// import { useUsuarioContext } from "../../../Context/useUsuarioContext";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import api from "../../../config/api";
// import ModalComentarios from "../../../Components/ModalComentarios/ModalComentarios";
// import { useModal } from "../../../Context/ModalContext";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

// export default function FeedConteudo() {
//   const { usuario } = useUsuarioContext();
//   const { abrirModal } = useModal(); 
//   const [posts, setPosts] = useState([]);

//   const token = localStorage.getItem("token");
//   const id = localStorage.getItem("id");

//   // Função para buscar os posts
//   const getPosts = async () => {
//     try {
//       const dados = await api.get(`/post/find-all`, {
//         headers: { authorization: `${token}` },
//       });

//       const req = await dados.data;
//       if (req) {
//         // Atualiza os posts com a informação de 'deuLike' e 'salvoNaColecao'
//         const postsComStatus = req.map(post => {
//           const deuLike = post.likeUsers.includes(id);
//           const salvoNaColecao = post.savedByUsers.includes(id); // Verifica se o post foi salvo
//           return { ...post, deuLike, salvoNaColecao };
//         });

//         setPosts(postsComStatus);
//         console.log(req);
//       }
//     } catch (error) {
//       window.alert(error.response.data.error);
//     }
//   };

//   // Função para curtir ou descurtir o post
//   const curtirPost = async (postId, deuLike) => {
//     try {
//       // Alterna o estado de like
//       const likeStatus = deuLike ? false : true; // Se já deu like, vamos remover o like, caso contrário vamos dar o like

//       // Envia a requisição para curtir ou descurtir o post
//       const dados = await api.put(
//         `/post/dar-like`,
//         {},
//         {
//           headers: { authorization: `${token}` },
//           params: {
//             postId: postId,
//             like: likeStatus,
//           },
//         }
//       );

//       const req = await dados.data;
//       if (req) {
//         setPosts((prevPosts) =>
//           prevPosts.map((post) =>
//             post.id === postId
//               ? { ...post, contadorLike: req.contadorLike, deuLike: likeStatus }
//               : post
//           )
//         );
//       }
//     } catch (error) {
//       console.log(error.response.data.error);
//     }
//   };

//   // Função para salvar o post na coleção
//   const salvarPostColecao = async (postId) => {
//     try {
//       const dados = await api.post(
//         `/post/salvar-post-colecao`,
//         {},
//         {
//           headers: { authorization: `${token}` },
//           params: {
//             postId: postId,
//           },
//         }
//       );

//       // Atualiza o estado para refletir que o post foi salvo na coleção
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId
//             ? { ...post, salvoNaColecao: true } // Atualiza o estado para 'salvo'
//             : post
//         )
//       );

//       toast.success("Post salvo na coleção");
//     } catch (error) {
//       console.log(error.response.data.error);
//       toast.error("Erro ao salvar post na coleção");
//     }
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <div className="conteudoFeedF">
//       <ModalComentarios></ModalComentarios>
//       {posts?.map((e, index) => {
//         return (
//           <div className="perfilFeedContainerF" key={index}>
//             <div className="paiPfpFeedF">
//               <Link to="/perfil/:id">
//                 <img src={e.fotoPerfil} alt="" className="pfpfeedF" />
//               </Link>
//               <div className="perfilInfoF">
//                 <Link to="/perfil/:id">
//                   <p className="nomePerfilFeedF">{e.nomeCompleto}</p>
//                   <p className="arrobaFeedF">{e.tag}</p>
//                 </Link>
//               </div>
//             </div>
//             <div className="textoDescricaoF">
//               <p>{e.texto}</p>
//             </div>
//             {Array.isArray(e.listImagens) && e.listImagens.length > 0 && (
//               <div className="containerImagemFeedF">
//                 {e.listImagens.map((imagem, index) => (
//                   <img
//                     key={index}
//                     src={imagem}
//                     alt={`imagem-post-${index}`}
//                     className="imagemFeedF"
//                   />
//                 ))}
//               </div>
//             )}
//             <div className="reacoesF">
//               <div className="reactionsF">
//                 <div>
//                   <img
//                     className="iconesReacaoF"
//                     src={e.deuLike ? IconeCoracaoVermelho : IconeLike}
//                     onClick={() => curtirPost(e.id, e.deuLike)} // Altera o estado do like
//                     alt="Like"
//                   />
//                   <p className="contadorLikeF">{e.contadorLike}</p>
//                 </div>
//                 {/* Alteração para mostrar o ícone de estrela preenchido se o post estiver salvo */}
//                 <img
//                   className="iconesReacaoF"
//                   src={e.salvoNaColecao ? iconeEstrelaPreenchido : IconeFavorito} // Condicional para alterar o ícone
//                   onClick={() => salvarPostColecao(e.id)}
//                   alt="Favoritar"
//                 />
//               </div>
//               <div className="commentsF" onClick={() => abrirModal(e.id)}>
//                 <img className="iconesReacaoF" src={IconeComentario} alt="Comentários" />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <ToastContainer></ToastContainer>
//     </div>
//   );
// }


// import "../feed.css";
// import IconeLike from "../../../assets/img/iconeCoracao.svg";
// import IconeFavorito from "../../../assets/img/iconeEstrela.svg";
// import IconeComentario from "../../../assets/img/iconeComentarios.svg";
// import IconeCoracaoVermelho from "../../../assets/img/coracaoVermelho.png";
// import iconeEstrelaPreenchido from "../../../assets/img/iconeEstrelaPreenchida.svg";
// import { useUsuarioContext } from "../../../Context/useUsuarioContext";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import api from "../../../config/api";
// import ModalComentarios from "../../../Components/ModalComentarios/ModalComentarios";
// import { useModal } from "../../../Context/ModalContext";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

// export default function FeedConteudo() {
//   const { usuario } = useUsuarioContext();
//   const { abrirModal } = useModal(); 
//   const [posts, setPosts] = useState([]);

//   const token = localStorage.getItem("token");
//   const id = localStorage.getItem("id");

//   // Função para buscar os posts
//   const getPosts = async () => {
//     try {
//       const dados = await api.get(`/post/find-all`, {
//         headers: { authorization: `${token}` },
//       });

//       const req = await dados.data;
//       if (req) {
//         // Atualiza os posts com a informação de 'deuLike'
//         const postsComLikeStatus = req.map(post => {
//           // Verifica se o usuário já curtiu o post
//           const deuLike = post.likeUsers.includes(id);
//           return { ...post, deuLike };
//         });

//         setPosts(postsComLikeStatus);
//         console.log(req);
//       }
//     } catch (error) {
//       window.alert(error.response.data.error);
//     }
//   };

//   // Função para curtir ou descurtir o post
//   const curtirPost = async (postId, deuLike) => {
//     try {
//       // Alterna o estado de like
//       const likeStatus = deuLike ? false : true; // Se já deu like, vamos remover o like, caso contrário vamos dar o like

//       // Envia a requisição para curtir ou descurtir o post
//       const dados = await api.put(
//         `/post/dar-like`,
//         {},
//         {
//           headers: { authorization: `${token}` },
//           params: {
//             postId: postId,
//             like: likeStatus,
//           },
//         }
//       );

//       const req = await dados.data;
//       if (req) {
//         setPosts((prevPosts) =>
//           prevPosts.map((post) =>
//             post.id === postId
//               ? { ...post, contadorLike: req.contadorLike, deuLike: likeStatus }
//               : post
//           )
//         );
//       }
//     } catch (error) {
//       console.log(error.response.data.error);
//     }
//   };

//   const salvarPostColecao = async (postId) => {
//     try {
//       const dados = await api.post(
//         `/post/salvar-post-colecao`,
//         {},
//         {
//           headers: { authorization: `${token}` },
//           params: {
//             postId: postId,
//           },
//         }
//       );

//       toast.success("Post salvo na coleção");
//     } catch (error) {
//       console.log(error.response.data.error);
//       toast.error("Error ao salvar post na coleção");
//     }
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <div className="conteudoFeedF">
//       <ModalComentarios></ModalComentarios>
//       {posts?.map((e, index) => {
//         return (
//           <div className="perfilFeedContainerF" key={index}>
//             <div className="paiPfpFeedF">
//               <Link to="/perfil/:id">
//                 <img src={e.fotoPerfil} alt="" className="pfpfeedF" />
//               </Link>
//               <div className="perfilInfoF">
//                 <Link to="/perfil/:id">
//                   <p className="nomePerfilFeedF">{e.nomeCompleto}</p>
//                   <p className="arrobaFeedF">{e.tag}</p>
//                 </Link>
//               </div>
//             </div>
//             <div className="textoDescricaoF">
//               <p>{e.texto}</p>
//             </div>
//             {Array.isArray(e.listImagens) && e.listImagens.length > 0 && (
//               <div className="containerImagemFeedF">
//                 {e.listImagens.map((imagem, index) => (
//                   <img
//                     key={index}
//                     src={imagem}
//                     alt={`imagem-post-${index}`}
//                     className="imagemFeedF"
//                   />
//                 ))}
//               </div>
//             )}
//             <div className="reacoesF">
//               <div className="reactionsF">
//                 <div>
//                   <img
//                     className="iconesReacaoF"
//                     src={e.deuLike ? IconeCoracaoVermelho : IconeLike}
//                     onClick={() => curtirPost(e.id, e.deuLike)} // Altera o estado do like
//                     alt="Like"
//                   />
//                   <p className="contadorLikeF">{e.contadorLike}</p>
//                 </div>
//                 <img
//                   className="iconesReacaoF"
//                   src={iconeEstrelaPreenchido}
//                   onClick={() => salvarPostColecao(e.id)}
//                   alt="Favoritar"
//                 />
//               </div>
//               <div className="commentsF" onClick={() => abrirModal(e.id)}>
//                 <img className="iconesReacaoF" src={IconeComentario} alt="Comentários" />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <ToastContainer></ToastContainer>
//     </div>
//   );
// }

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
import { useModal } from "../../../Context/ModalContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loadingIcon from "../../../assets/img/loading.webp"; // Imagem de carregamento

export default function FeedConteudo() {
  const { usuario } = useUsuarioContext();
  const { abrirModal } = useModal(); 
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Novo estado para controlar o carregamento

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  // Função para buscar os posts
  const getPosts = async () => {
    setIsLoading(true); // Inicia o carregamento

    try {
      const dados = await api.get(`/post/find-all`, {
        headers: { authorization: `${token}` },
      });

      const req = dados.data;
      if (req) {
        // Atualiza os posts com a informação de 'deuLike'
        const postsComLikeStatus = req.map(post => {
          const deuLike = post.likeUsers.includes(id);
          return { ...post, deuLike };
        });

        setPosts(postsComLikeStatus);
        console.log(req);
      }
    } catch (error) {
      window.alert(error.response?.data?.error || "Erro ao carregar os posts");
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  };

  // Função para curtir ou descurtir o post
  const curtirPost = async (postId, deuLike) => {
    try {
      const likeStatus = deuLike ? false : true;
      const dados = await api.put(
        `/post/dar-like`,
        {},
        {
          headers: { authorization: `${token}` },
          params: { postId, like: likeStatus },
        }
      );

      const req = dados.data;
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
      console.log(error.response?.data?.error || "Erro ao curtir post");
    }
  };

  // Função para salvar o post na coleção
  const salvarPostColecao = async (postId) => {
    try {
      const dados = await api.post(
        `/post/salvar-post-colecao`,
        {},
        {
          headers: { authorization: `${token}` },
          params: { postId },
        }
      );

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, salvoNaColecao: true } 
            : post
        )
      );

      toast.success("Post salvo na coleção");
    } catch (error) {
      console.log(error.response?.data?.error || "Erro ao salvar post na coleção");
      toast.error("Erro ao salvar post na coleção");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="conteudoFeedF">
      <ModalComentarios />
      
      {/* Exibir o ícone de carregamento enquanto isLoading for true */}
      {isLoading ? (
        <div className="carregandoContainer">
          <img src={loadingIcon} alt="Carregando..." className="iconeCarregando" />
        </div>
      ) : (
        posts?.map((e, index) => (
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
            {Array.isArray(e.listImagens) && e.listImagens.length > 0 && (
              <div className="containerImagemFeedF">
                {e.listImagens.map((imagem, index) => (
                  <img key={index} src={imagem} alt={`imagem-post-${index}`} className="imagemFeedF" />
                ))}
              </div>
            )}
            <div className="reacoesF">
              <div className="reactionsF">
                <div>
                  <img
                    className="iconesReacaoF"
                    src={e.deuLike ? IconeCoracaoVermelho : IconeLike}
                    onClick={() => curtirPost(e.id, e.deuLike)} 
                    alt="Like"
                  />
                  <p className="contadorLikeF">{e.contadorLike}</p>
                </div>
                <img
                  className="iconesReacaoF"
                  src={e.salvoNaColecao ? iconeEstrelaPreenchido : IconeFavorito}
                  onClick={() => salvarPostColecao(e.id)}
                  alt="Favoritar"
                />
              </div>
              <div className="commentsF" onClick={() => abrirModal(e.id)}>
                <img className="iconesReacaoF" src={IconeComentario} alt="Comentários" />
              </div>
            </div>
          </div>
        ))
      )}
      
      <ToastContainer />
    </div>
  );
}
