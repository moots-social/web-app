import "../feed.css";
import IconeLike from "../../../assets/img/Heart.png";
import IconeDislike from "../../../assets/img/deslike.png";
import IconeFavorito from "../../../assets/img/star.svg";
import IconeComentario from "../../../assets/img/Comentário.png";
import { useUsuarioContext } from "../../../Context/useUsuarioContext";
import ImagemFeed from "../../../assets/img/post.png";
import { useState,useEffect } from "react";
import api from '../../../config/api'

export default function FeedConteudo() {
   
    
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
        console.log(req)
      } 
      } catch(error){
          window.alert(error.response.data.error)
      }

    }
    
    useEffect(()=>{
      getPosts()
  }, [])
 
  return (
    <div className="conteudoFeed">
      {/* <div className="perfilFeedContainer">
        <div>
          <img className="pfpFeed" src={usuario.fotoPerfil}></img>
        </div>
        <div className="perfilInfo">
          <p className="nomePerfilFeed">{usuario.nomeCompleto}</p>
          <p className="arrobaFeed">@{usuario.tag}</p>
        </div>
      </div>
      <p className="textoDescricao">
        Gostaríamos de expressar nossa sincera gratidão à equipe pela calorosa
        recepção durante nossa visita técnica. Foi uma experiência extremamente
        valiosa para todos nós.
      </p>
      <div className="containerImagemFeed">
        <img className="imagemFeed" src={ImagemFeed}></img>
        <div className="reacoes">
          <div className="reactions">
            <img className="iconesReacao" src={IconeLike}></img>
            <img className="iconesReacao" src={IconeDislike}></img>
            <img className="iconesReacao" src={IconeFavorito}></img>
          </div>
          <div className="comments">
            <img className="iconesReacao" src={IconeComentario}></img>
          </div>
        </div>
      </div> */}
       


       {posts?.map((e, index) => {
                return(
                    <>
                        <div className="perfilFeedContainer" key={index}>
                            <div>
                                <img src={e.fotoPerfil} alt="" className="pfpfeed"/>
                            </div>
                            <div className="perfilInfo">
                                <p className="nomePerfilFeed">{e.nomeCompleto}</p>
                                <p className="arrobaFeed">@{e.tag}</p>
                            </div>
                        </div>
                        <p className="textoDescricao">{e.conteudo}</p>
                        <div className="containerImagemFeed">
                            <img src={e.listImagens[0]} alt="" className="imagemFeed"/>
                        </div>
                    </>
                )
        })}
            
    </div>
  );
}
