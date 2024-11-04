import "../feed.css";
import IconeLike from "../../../assets/img/iconeCoracao.svg";
import IconeDislike from "../../../assets/img/iconeDeslike.svg";
import IconeFavorito from "../../../assets/img/iconeEstrela.svg";
import IconeComentario from "../../../assets/img/iconeComentarios.svg";
import { useUsuarioContext } from "../../../Context/useUsuarioContext";
import ImagemFeed from "../../../assets/img/post.png";
import { useState, useEffect } from "react";
import api from "../../../config/api";

export default function FeedConteudo() {
  const { usuario } = useUsuarioContext();
  const [posts, setPosts] = useState([]);

  // var postId;

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const getPosts = async () => {
    try {
      const dados = await api.get(`/search/post/${id}`, {
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

  const curtirPost = async (e) => {
    const {postId} = e;

    try {
      const dados = await api.put(`/post/dar-like`, {}, {
        headers: { authorization: `${token}` },
        params: {
          postId: postId,
          like: true
        }
      });
      
      const req = await dados.data;
      if(req) {
        console.log(req);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  }  

  useEffect(() => { 
    getPosts();
  }, []);

  return (
    <div className="conteudoFeed">
      {posts?.map((e, index) => {

        return (
          <>
            <div className="perfilFeedContainer" key={index}>
              <div className="paiPfpFeed">
                <img src={e.fotoPerfil} alt="" className="pfpfeed" />
                <div className="perfilInfo">
                  <p className="nomePerfilFeed">{e.nomeCompleto}</p>
                  <p className="arrobaFeed">@{e.tag}</p>
                </div>
              </div>
              <div className="textoDescricao">
                <p>{e.texto}</p>
              </div>
              <div className="containerImagemFeed">
                <img src={e.listImagens[0]} alt="" className="imagemFeed" />
              </div>
              <div className="reacoes">
                <div className="reactions">
                  <img className="iconesReacao" src={IconeLike} onClick={() => {
                    curtirPost(e)}}></img>
                  <img className="iconesReacao" src={IconeDislike}></img>
                  <img className="iconesReacao" src={IconeFavorito}></img>
                </div>
                <div className="comments">
                  <img className="iconesReacao" src={IconeComentario}></img>
                </div>
              </div>
            </div>
          </>
        );
      })}

    </div>
  );
}  
