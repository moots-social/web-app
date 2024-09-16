import "../telaChat.css";
import gabriel from "../../../assets/img/chatGabriel.png";
import enviar from "../../../assets/img/iconeEnviar.png";

export default function PerfilAtivoChatDireita() {
  return (
    <div className="containerPerfilMensagemAtual">
      <div className="mensagemAtual">
        <div className="imagemMensagemAtual">
          <img src={gabriel} alt="" />
        </div>
        <div className="containerMensagemAtual">
          <div className="nomeMensagemAtual">
            <p>Gabriel Anjos</p>
          </div>
          <div className="tagUsuarioMensagemAtual">
            <p>@gabrielAnjinho</p>
          </div>
        </div>
      </div>
      <div className="containerMensagem">
        <div className="mensagemDigitada">
          <input type="message" placeholder="mensagem"></input>
        </div>
        <div className="botaoEnviar">
          <img src={enviar} alt=""></img>
        </div>
      </div>
    </div>
  );
}
