import "../../telaCadastro.css";
import "../../../../App.css";
import { Link } from "react-router-dom";
export default function FormCadastro() {
  return (
    <>
      <div className="containerCadastro">
        <div className="containerTitulo">
          <h2>Faça parte da Moots</h2>
        </div>
        <div className="containerInputs">
          <div className="containerDadosCadastro">
            <label htmlFor="nomeUser">Nome completo</label>
            <input type="text" name="nomeUser" id="nomeUser" />
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="emailCadastro">Email</label>
            <input type="email" name="emailCadastro" id="emailCadastro" />
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="senhaCadastro">Senha</label>
            <input type="password" name="senhaCadastro" id="senhaCadastro" />
          </div>
          <div className="containerDadosCadastro">
            <label htmlFor="tagUser">Tag do usuario</label>
            <input type="password" name="tagUser" id="tagUser" />
          </div>
        </div>
        <div className="senhaEsquecida ">
          <p>
            Já tem uma conta?{" "}
            <Link to="/telaLogin">
              <span className="spanCadastro"> Faça o login </span>
            </Link>
          </p>
        </div>
        <div className="containerBtn">
          <button>Cadastre-se</button>
        </div>
      </div>
    </>
  );
}
