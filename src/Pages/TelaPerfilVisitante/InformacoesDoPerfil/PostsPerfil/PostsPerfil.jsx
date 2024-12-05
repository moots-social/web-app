import { useParams } from 'react-router-dom';
import '../../TelaPerfilVisitante.css'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "../../../TelaPerfil/telaPerfil.css"
import api from '../../../../config/api';

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
            console.log(curtidos)
            const deuLike = curtidos.includes(idUser);
            return { ...post, deuLike };
          }));

          console.log(postsComLikeStatus)
          console.log(salvos)
          const postsComFoiSalvo = postsComLikeStatus.map((post) => {
            const foiSalvo = salvos.some((salvo) => String(salvo.postId) == String(post.postId));
            return { ...post, foiSalvo };
          });

          setPosts(postsComFoiSalvo);
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

    console.log(posts)
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
            </div>
          );
        })}
        <ToastContainer />
      </>
    );
}