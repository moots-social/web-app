
import "../feed.css";
import IconeLike from "../../../assets/img/iconeCoracao.svg";
import IconeFavorito from "../../../assets/img/iconeEstrela.svg";
import IconeComentario from "../../../assets/img/iconeComentarios.svg";
import IconeCoracaoVermelho from "../../../assets/img/coracaoVermelho.png";
import iconeEstrelaPreenchido from "../../../assets/img/iconeEstrelaPreenchida.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../config/api";
import ModalComentarios from "../../../Components/ModalComentarios/ModalComentarios";
import { useModal } from "../../../Context/ModalContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FeedConteudo() {
  const { abrirModal } = useModal(); 
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const getSalvos = async() => {
    try {
      const req = await api.get(`/user/colecao-salvos/${id}`, {
        headers: {Authorization: token}  
      })

      const dado = await req.data;
      return dado;
    } catch (e) {
      alert(e.request.data.error)
    }
  }

  // Função para buscar os posts
  const getPosts = async () => {
    setIsLoading(true); // Inicia o carregamento

    try {
      const dados = await api.get(`/post/find-all`, {
        headers: { authorization: `${token}` },
      });

      const req = await dados.data;
      const salvos = await getSalvos();

      if (req) {
        // Atualiza os posts com a informação de 'deuLike'
        const postsComLikeStatus = req.map(post => {
          const deuLike = post.likeUsers.includes(id);
          return { ...post, deuLike };
        });

      const postsComFoiSalvo = postsComLikeStatus.map((post) => {
        const foiSalvo = salvos.some((salvo) => salvo.postId === post.id);
        return { ...post, foiSalvo };
      });

        setPosts(postsComFoiSalvo)
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
            ? { ...post, foiSalvo: true } 
            : post
        )
      );
      
      toast.success("Post salvo na coleção");
    } catch (error) {
      console.log(error.response?.data?.error || "Erro ao salvar post na coleção");
      toast.error("Erro ao salvar post na coleção");
    }
  };

  const excluirPostColecao = async (postId) => {
    try {
      const dados = await api.delete(`/user/${id}/post/${postId}`, {
        headers: { authorization: `${token}` },
      });

      setPosts((prevPosts) => 
        prevPosts.map((post) => 
            post.id === postId
            ? { ...post, foiSalvo: false }
            : post
        )
      );

      toast.success("Post excluido na coleção");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts)
  return (
    <div className="conteudoFeedF">
      <ModalComentarios />
      
      
      {isLoading ? (
       <div className="loading-wrapper">
       <div className="post-placeholder">
         <div className="image-placeholder"></div>
         <div className="text-placeholder"></div>
         <div className="text-placeholder"></div>
       </div>
       <div className="post-placeholder">
         <div className="image-placeholder"></div>
         <div className="text-placeholder"></div>
         <div className="text-placeholder"></div>
       </div>
     </div>
      ) : (
        posts?.map((e, index) => (
          <div className="perfilFeedContainerF" key={index}>
            <div className="paiPfpFeedF">
              <Link to={`/perfil/${e.userId}`}>
                <img src={e.fotoPerfil} alt="" className="pfpfeedF" />
              </Link>
              <div className="perfilInfoF">
                <Link to={`/perfil/${e.userId}`}>
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
                  src={e.foiSalvo ? iconeEstrelaPreenchido : IconeFavorito}
                  onClick={() => {
                    if(e.foiSalvo){
                      excluirPostColecao(e.id)
                    } else {
                      salvarPostColecao(e.id)
                    }
                    }
                  }
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
