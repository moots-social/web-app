import SideBar from "../../Components/SideBar/SideBar";
import BottomBar from "../../Components/BottomBar/BottomBar"
import "./salvos.css";
import "../Principal/ResponsividadeInicialeSalvos/Responsividade.css"
import api from "../../config/api";
import { UsuarioContext } from "../../Context/UsuarioContext";
import { useEffect, useState } from "react";

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
          {/* {colecao.map((salvo) => (
            <div key={salvo.id} className="salvo">
              <img src={salvo.imagem} alt={salvo.nome} />
              <h3>{salvo.nome}</h3>
            </div>
          ))} */}
          {colecao.map((salvo) => {
            return(
              <div> 
                <p>{salvo.texto}</p>
                <img src={salvo.listImagens[0]} alt={salvo.nome} />
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
