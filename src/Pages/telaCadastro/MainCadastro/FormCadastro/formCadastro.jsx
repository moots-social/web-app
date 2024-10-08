import "../../telaCadastro.css";
import "../../../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  api  from "../../../../config/api.js"; 
import axios from "axios";

export default function FormCadastro() {


  // const user = localStorage.getItem('authenticated');
    
    // useEffect(() => {
    //     if(user === 'true'){
    //         navigate('/telaLogin')
    //     }
    // })


    const [newUser, setNewUser] = useState({
      nomeCompleto: "",
      email: "",
      senha: "",
      tag: "",
      roles: ["ADMIN"]
    });

    const navigate = useNavigate();

    const postNewUser = async (e) => {
      e.preventDefault();
      
      try {
        const dado = await api.post("/user/criar", newUser);  
        const res = await dado.data.json();

        if (res) {
          alert("Pessoa cadastrada com sucesso.");
        } else {
          alert("Falha ao cadastrar pessoa.");
        }

          
       //navigate("/telaLogin");

      } catch (error) {
        alert(error.message);
        console.error(error);
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
            <input type="email" name="emailCadastro" id="emailCadastro" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}/>
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="senhaCadastro">Senha</label>
            <input type="password" name="senhaCadastro" id="senhaCadastro" onChange={(e) => setNewUser({ ...newUser, senha: e.target.value })}/>
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="tagUser">Tag do usuario</label>
            <input type="text" name="tagUser" id="tagUser" onChange={(e) => setNewUser({ ...newUser, tag: e.target.value })} />
          </div>
          {/* <div className="containerDadosCadastro">
            <label htmlFor="tagUser">Role</label>
            <input type="text" name="tagUser" id="tagUser" onChange={(e) => setNewUser({ ...newUser, roles: [e.target.value] })} />
          </div> */}
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
    </>
  );
}
