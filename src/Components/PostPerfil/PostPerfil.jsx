import "./PostPerfil.css"
import { useUsuarioContext } from "../../Context/useUsuarioContext"; 
import { useState, useEffect } from "react";
import api from "../../config/api";

export default function PostPerfil() {

  const { usuario } = useUsuarioContext();
  const [posts, setPosts] = useState([])

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id")


  const getPosts = async () => {

    try {
      const dados = await api.get(`/search/post/${id}`, {headers: {authorization: `${token}`}})

      const req = await dados.data;
      if (req) {
        setPosts(req);
      } 
      } catch(error){
          window.alert(error.response.data.error)
      }

    }  

    useEffect(()=>{
      getPosts()
  }, [])

  return (
    <>
      {posts.map((post, index) => {
        return(
          <div className="conteudoFeedPerfil" key={index}>
              <div className="perfilFeedContainer">
                <div>
                  <img className="pfpFeed" src={usuario.fotoPerfil}></img>
                </div>
                <div className="perfilInfo">
                  <p className="nomePerfilFeed">{usuario.nomeCompleto}</p>
                  <p className="arrobaFeed">{usuario.tag}</p>
                </div>
              </div>
                <p className="textoDescricao">{post.texto}</p>
              <div className="containerImagemFeedPerfil">
                <img className="imagemFeed" src={post.listImagens[0]}></img>
              </div>
          </div>
        );
      })}
    </>
  );
}