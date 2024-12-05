import { useParams } from 'react-router-dom';
import '../../TelaPerfilVisitante.css'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "../../../TelaPerfil/telaPerfil.css"
import api from '../../../../config/api';
import coracao from '../../../../assets/img/iconeCoracao.svg';
import coracaoPreenchido from '../../../../assets/img/iconeEstrelaPreenchida.svg';
import estrela  from '../../../../assets/img/iconeEstrela.svg';


export default function PostsPerfilVisitante(){
    const [usuario, setUsuario] = useState()
    const [posts, setPosts] = useState([]);
    const [expandedPosts, setExpandedPosts] = useState({}); // Estado para controlar quais posts estão expandidos
  
    const token = localStorage.getItem("token");
    const {id} = useParams()
  
    const getPosts = async () => {
      try {
        const dados = await api.get(`/search/post/${id}`, { headers: { authorization: `${token}` } });
        const req = await dados.data;
        if (req) {

          setPosts(req);
        }
      } catch (error) {
        console.log(error);
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
                    onClick={() => curtirPost(post.id, post.deuLike)} 
                    alt="Like"
                  />
                  <p className="contadorLikeF"></p>
                </div>
                <img
                  className="iconesReacaoF"
                    src={estrela}
                  alt="Favoritar"
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

