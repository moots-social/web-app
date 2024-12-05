import { useParams } from 'react-router-dom';
import '../../TelaPerfilVisitante.css'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "../../../TelaPerfil/telaPerfil.css"
import api from '../../../../config/api';
import coracao from '../../../../assets/img/iconeCoracao.svg';
import coracaoPreenchido from '../../../../assets/img/coracaoVermelho.png';
import estrelaPreenchido from '../../../../assets/img/iconeEstrelaPreenchida.svg';
import estrela  from '../../../../assets/img/iconeEstrela.svg';


export default function PostsPerfilVisitante(){
    const [usuario, setUsuario] = useState()
    const [posts, setPosts] = useState([]);
    const [expandedPosts, setExpandedPosts] = useState({}); // Estado para controlar quais posts estão expandidos
  
    const idUser = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const {id} = useParams()

    const getSalvos = async() => {
      try {
        const req = await api.get(`/user/colecao-salvos/${idUser}`, {
          headers: {Authorization: token}  
        })
  
        const dado = await req.data;
        return dado;
      } catch (e) {
        alert(e.request.data.error)
      }
    }

    const getCurtidos = async(idPost) => {
      try {
        const req = await api.get(`/post/likeUsers/${idPost}`, {headers: {Authorization: token}})
        const dado = await req.data

        return dado
      } catch (e) {
      }
    }

    const getPosts = async () => {
      try {
        const dados = await api.get(`/search/post/${id}`, { headers: { authorization: `${token}` } });
        const req = await dados.data;
        const salvos = await getSalvos();
        if (req) {
          // Usar Promise.all para aguardar todas as promessas do map
          const postsComLikeStatus = await Promise.all(req.map(async (post) => {
            const curtidos = await getCurtidos(String(post.postId));
            const deuLike = curtidos.includes(idUser);
            return { ...post, deuLike };
          }));
          const postsComFoiSalvo = postsComLikeStatus.map((post) => {
            const foiSalvo = salvos.some((salvo) => String(salvo.postId) == String(post.postId));
            return { ...post, foiSalvo };
          });
        
          setPosts(postsComFoiSalvo);
          setCurtiu(prev = !prev)
        }
      } catch (error) {
      }
    };
  
    useEffect(() => {
        const buscarUsuario = async() => {
            try {
                const req = await api.get(`/user/buscar/${id}`, {headers: {Authorization: token}})
                const dado = await req.data;
                
                setUsuario(dado)
            } catch (e) {
                console.log(e)
            }
        }

      buscarUsuario();
      getPosts();
    }, []);
    
    const toggleTexto = (index) => {
      // Alterna a expansão do post específico
      setExpandedPosts((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };

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
              String(post.postId) == String(postId)
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
          String(post.postId) == String(postId)
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
          String(post.postId) == String(postId)
            ? { ...post, foiSalvo: false }
            : post
        )
      );

      toast.success("Post excluido na coleção");
    } catch (error) {
      console.log(error.response.data.error);
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
              {post.listImagens && post.listImagens[0] && post.listImagens[0] !== "" ? (
                  <img className="imagemFeed" src={post.listImagens[0]} alt="Imagem do post" />
                ) : null}
                
              </div>
              <div className="reacoesF">
              <div className="reactionsF">
                <div>
                  <img
                    className="iconesReacaoF"
                    src={post.deuLike ? coracaoPreenchido : coracao}
                    onClick={() => curtirPost(String(post.postId), post.deuLike)} 
                    alt="Like"
                  />
                </div>
                <img
                  className="iconesReacaoF"
                  src={post.foiSalvo ? estrelaPreenchido : estrela}
                  alt="Favoritar"
                  onClick={() => {
                    if(post.foiSalvo){
                      excluirPostColecao(post.postId)
                    } else {
                      salvarPostColecao(post.postId)
                    }
                  }}
                />
              </div>

            </div>
            </div>
          );
        })}
        <ToastContainer />
      </>
    );
}

