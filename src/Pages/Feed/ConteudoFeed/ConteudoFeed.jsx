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
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers : {
            autorization: `${token}`
            }
        }
    }catch(error){

    }

    const [postContent, setPostContent] = useState('')

    useEffect(() => { 
        axios.get(search.).then((response) => {
            const dados = response.data;
            setPersonagens(dados)
        }).catch((error) => {
            console.log(error)
        })
    },[]);

    
  const { usuario } = useUsuarioContext();
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
       


       {postContent?.map((e, index) => {
                return(
                    <>
                        <div className="perfilFeedContainer">
                            <div>
                                <img src={e.listImagens} alt="" className="pfpfeed"/>
                            </div>
                            <div className="perfilInfo">
                                <p className="nomePerfilFeed">{e.nome}</p>
                                <p className="arrobaFeed">@{e.tag}</p>
                            </div>
                        </div>
                        <p className="textoDescricao">{e.conteudo}</p>
                        <div className="containerImagemFeed">
                            <img src={e} alt="" className="imagemFeed"/>
                        </div>
                    </>
                )
        })}
            
    </div>
  );
}
