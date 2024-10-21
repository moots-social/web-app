import "./sidebar.css";
import { Link } from "react-router-dom";
import pesquisa from "../../assets/img/iconePesquisa.png";
import home from "../../assets/img/iconeHome.png";
import mensagem from "../../assets/img/iconeMensagens.png";
import novoPost from "../../assets/img/iconeNovoPost.png";
import coracao from "../../assets/img/iconeCoracao.png";
import FotoPerfil from "../../assets/img/user.png"
import "../../Pages/telaChat/telaChat.css";
import "../../Pages/Salvos/Salvos.css";
import { useUsuarioContext } from "../../Context/useUsuarioContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import api from "../../config/api";

export default function SideBar() {

  const [user, setUser] = useState({id: '',fotoPerfil: '', fotoCapa: '', nomeCompleto: '', tag: ''})

  const token = localStorage.getItem('token');

  const id = localStorage.getItem('id');

  const { setUsuario } = useUsuarioContext();

  const handleSubmit = async () => {
      try {
          const dado = await api.get(`/user/buscar/${id}`, {headers: {authorization: `${token}`}});

          const req = await dado.data;
          if (req) {
              setUser({...user, id: req.id, fotoCapa: req.fotoCapa, fotoPerfil: req.fotoPerfil, nomeCompleto: req.nomeCompleto, tag: req.tag});
              setUsuario(req);
          } 
          } catch(error){
              window.alert(error.response.data.error)
          }

      }  
      
  useEffect(()=>{
      handleSubmit()
      console.log(user)
  }, [])

  return (
    <div className="sideBar teste">
      <div className="containerTopo">
        <div className="containerInput">
          <input className="pesquisa" type="text" name="" id="" />
        </div>
        <div className="containerIcone pesquisaIcone">
          <div className="icone">
            <img src={pesquisa} alt="icone-home" />
          </div>
        </div>
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
        <Link to="/telaChat">
          <div className="containerIcone">
            <div className="icone">
              <img src={mensagem} alt="icone-mensagem" />
            </div>
            <div className="tituloIcone">
              <p>Mensagens</p>
            </div>
          </div>
        </Link>
        <div className="containerIcone">
          <div className="icone">
            <img src={novoPost} alt="icone-novo-post"/>
          </div>
          <div className="tituloIcone">
            <p>Novo Post</p>
          </div>
        </div>
        <Link to="/salvos">
          <div className="containerIcone">
            <div className="icone">
              <img src={coracao} alt="icone coracao   " />
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
            <img src={FotoPerfil} alt="" className="sidebarPfp"/>
          </div>
          <div className="nomeUsuario">
            <p>{user.nomeCompleto}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
