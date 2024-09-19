import "./modalEsqueciSenha.css";
import iconeEsqueci from "../../assets/img/iconeEsqueciSenha.png";

export default function modalEsqueciSenha() {
  return (
    <div className="containerModalEsqueci bg">
      <div className="modalEsqueci">
        <img src={iconeEsqueci} alt=""></img>
        <div className="tituloTextoSenha">
          <div className="tituloSenha">
            <h2>Dificuldades para entrar?</h2>
          </div>
          <div className="textoEsqueci">
            <p>
              Insira seu email e enviaremos um link para você voltar a acessar
              sua conta no moots
            </p>
          </div>
        </div>
        <div className="inputSenhaEsqueci">
            <input className="inputEleMesmo" type="email" placeholder="Digite seu email" ></input>
        </div>
      </div>
    </div>
  );
}
