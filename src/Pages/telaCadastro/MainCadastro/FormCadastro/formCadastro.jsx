import "../../telaCadastro.css";
import "../../../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import  api  from "../../../../config/api.js"; 
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";

export default function FormCadastro() {


    const [newUser, setNewUser] = useState({
      nomeCompleto: "",
      email: "",
      senha: "",
      tag: "",
      roles: ["USER"]
    });
    

    const navigate = useNavigate();

    const postNewUser = async (e) => {
      e.preventDefault();

           
           if (newUser.senha.length < 8) {
            toast.error("A senha deve ter no mínimo 8 caracteres.");
            return; 
        }
      
      try {
        const dado = await api.post("/user/criar", newUser);  
        const res = await dado.data;

        if (res) {
          toast.success("Pessoa cadastrada com sucesso.");
          setTimeout(() => {
            navigate('/telaLogin');
        }, 1500);

        }

      } catch (error) {
        toast.error("falha ao cadastrar usuário")
        // alert(error.response.data.error)
      }
    };

  return (
    <>
      <div className="containerCadastro">
        <div className="containerTitulo">
          <h2>Faça parte da Moots</h2>
        </div>
        <form className="containerInputs" method="post" onSubmit={(e) => postNewUser(e)} id="cadastro">
          <div className="containerDadosCadastro">
            <label htmlFor="nomeUser">Nome completo</label>
            <input type="text" name="nomeUser" id="nomeUser" onChange={(e) => setNewUser({...newUser, nomeCompleto: e.target.value })}/>
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="emailCadastro">Email</label>
            <input type="email" name="emailCadastro"  id="emailCadastro" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}/>
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="senhaCadastro">Senha</label>
            <input type="password" name="senhaCadastro" id="senhaCadastro" onChange={(e) => setNewUser({ ...newUser, senha: e.target.value })}/>
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="tagUser">Tag do usuario</label>
            <input type="text" name="tagUser" id="tagUser" onChange={(e) => setNewUser({ ...newUser, tag: e.target.value })} />
          </div>
        
        </form>
        <div className="senhaEsquecida ">
          <p>
            Já tem uma conta?{" "}
            <Link to="/telaLogin">
              <span className="spanCadastro"> Faça o login </span>
            </Link>
          </p>
        </div>
        <div className="containerBtn">
          <button type="submit" form="cadastro" value="submit">Cadastre-se</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

