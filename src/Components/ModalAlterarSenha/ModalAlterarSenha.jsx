import "./modalAlterarSenha.css";
import BotaoEnviarLink from "./BotaoEnviarLink/BotaoEnviarLink";
import iconeEsqueci from "../../assets/img/iconeEsqueciSenha2.png";

export default function modalEsqueciSenha() {
  return (
    <div className="containerModalEsqueci">
      <div className="modalEsqueci bg">
        <div className="imagemEsqueci">
          <img src={iconeEsqueci} alt=""></img>
        </div>
        <div className="tituloTextoSenha">
          <div className="tituloSenha">
            <h2>Dificuldades para entrar?</h2>
          </div>
          <div className="textoEsqueci">
            <p>
              Digite sua sua senha atual para alterar.
            </p>
          </div>
        </div>
        <div className="inputSenhaAlterar">
          <input
            className="inputAtual"
            type="password"
            placeholder="Senha atual"
          ></input>
          <input
            className="inputNovaSenha"
            type="password"
            placeholder="Digite sua nova senha:"
          ></input>
          <input
            className="inputConfirmarNovaSenha"
            type="password"
            placeholder="Confirmar sua nova senha:"
          ></input>
        </div>
        <BotaoEnviarLink></BotaoEnviarLink>
      </div>
    </div>
  );
}
