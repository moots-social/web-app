

import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/img/iconeHome.png";
import notificacoes from "../../assets/img/notificacao.png";
import coracao from "../../assets/img/iconeEstrela.svg";
import pesquisa from "../../assets/img/iconePesquisa.png";
import "../../Pages/telaChat/telaChat.css";
import "../../Pages/Salvos/Salvos.css";
import { useUsuarioContext } from "../../Context/useUsuarioContext";
import { useEffect, useState } from "react";
import api from "../../config/api";
import ModalNot from "../ModalNotificacao/Notificacao";
import { useModalNot } from "../../Context/modalContextNot"; // Importando o hook corretamente


export default function SideBar() {
  const [pesquisar, setPesquisar] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const { usuario, setUsuario } = useUsuarioContext();
  
  const { abrirModalNot } = useModalNot(); // Obtendo a função de abrir o modal

  const handleSubmit = async () => {
    try {
      const dado = await api.get(`/user/buscar/${id}`, {
        headers: { authorization: `${token}` },
      });

      const req = await dado.data;
      if (req) {
        setUsuario(req);
      }
    } catch (error) {
      window.alert(error.response.data.error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [id]);

  const handlePesquisa = () => {
    navigate(`/pesquisa/${pesquisar}`)
  }

  return (
    <>
      <ModalNot></ModalNot>
      <div className="sideBar teste">
        <div className="containerTopo">

          {/* pesquisa */}
          <div className="containerInput">
            <input className="pesquisa" type="text"
              value={pesquisar} 
              onChange={(t) => setPesquisar(t.target.value)} 
              onKeyDown={(e) => {
                if(e.key === 'Enter'){
                  handlePesquisa()
                }
              }}
             />
               <span className="pesquisa-icone" onClick={handlePesquisa}>
                <img src={pesquisa} alt="icone-pesquisa" />
               </span>
          </div>
          <div className="containerIcone pesquisaIcone">
            <div className="icone">
              <img src={pesquisa} alt="icone-home" /> 
            </div>
          </div>
          {/* pesquisa */}

          <Link to="/feed">
            <div className="containerIcone">
              <div className="icone">
                <img src={home} alt="icone-home" />
              </div>
              <div className="tituloIcone">
                <p>Página Inicial</p>
              </div>
            </div>
          </Link>
          
          <div className="containerIcone">
            <div className="icone" onClick={abrirModalNot}>
              <img src={notificacoes} alt="icone-notificacao" />
            </div>
            <div className="tituloIcone">
              <p>Notificações</p>
            </div>
          </div>

          <Link to="/salvos">
            <div className="containerIcone">
              <div className="icone">
                <img src={coracao} alt="icone coracao" />
              </div>
              <div className="tituloIcone">
                <p>Coleções</p>
              </div>
            </div>
          </Link>
        </div>
        <Link to={`/perfil/${id}`}>
          <div className="perfil">
            <div className="imagemPerfil">
              <img src={usuario.fotoPerfil} alt="" className="sidebarPfp" />
            </div>
            <div className="nomeUsuario">
              <p>{usuario.nomeCompleto}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
