import SideBar from "../../Components/SideBar/SideBar";
import BottomBar from "../../Components/BottomBar/BottomBar"
import "./salvos.css";
import "../Principal/ResponsividadeInicialeSalvos/Responsividade.css"
import api from "../../config/api";
import { UsuarioContext } from "../../Context/UsuarioContext";
import { useEffect, useState } from "react";
import lixeira from "../../assets/img/lixeira.png";

function Salvos() {

  const [colecao, setColecao] = useState([])
  const token = localStorage.getItem("token");

  const userId = localStorage.getItem("id");
  const minhaColecao = async () => {
    try{
    const dados = await api.get(`user/colecao-salvos/${userId}`,
      { headers: { authorization: `${token}` } });
    
      const req = await dados.data;
      if (req) {
        console.log(req)
        setColecao(req);
      }

        if(dados){
          let nadaSalvo = document.querySelector('.divNadaSalvo')
          nadaSalvo.style.cssText = 'display:none';
          let divSalvos = document.querySelector('.divSalvos')
          divSalvos.style.cssText = 'display:block';
        }

    }catch(error){
      console.log(error)
    }

  

  }

  const excluirPostColecao = async (postId) => {
    try {
      const dados = await api.delete(`/user/${userId}/post/${postId}`,
        { headers: { authorization: `${token}`}});
    
      const req = await dados.data;
      if (req) {
        console.log(req);
        minhaColecao();
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  useEffect(() => {
    minhaColecao();
  }, []);
  


  return (
    <div className="bg pai">
      <SideBar />
      <div className="divMain">
        <div className="titulo">
          <div className="title">
            <h2 className="colecoes">Coleções</h2>
          </div>
        </div>
        <div className="divNadaSalvo">
          {" "}
          <h2 className="nadaSalvo">Você ainda não possui nada salvo.</h2>{" "}
        </div>
        <div className="divSalvos">
          {colecao.map((salvo) => {
            return(
              <div className="postSalvos">
                <p>{salvo.nomeCompleto}</p>
                <p>{salvo.tag}</p>
                <p>{salvo.texto}</p>
                <img src={salvo.listImagens[0]} alt={salvo.nome} />
                <img src={lixeira} onClick={() => excluirPostColecao(salvo.postId)} className="lixeira"/> 
              </div>
            )
          })}
        </div>
      </div>
      <div className="bar">
        <BottomBar />
      </div>
    </div>
  );
}

export default Salvos;
