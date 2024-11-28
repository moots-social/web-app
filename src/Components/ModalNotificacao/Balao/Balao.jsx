import fechar from "../../../assets/img/letra-x.png";
import user from "../../../assets/img/User.png";
import "../Balao/balao.css";

export default function Balao() {
  return (
    <div className="balaoNotificacao">
      <div className="balao">
        <div className="botaoFechar">
          <img src={fechar} className="fecharX" />
        </div>
        <div className="imagemUser">
          <img src={user} className="fotoNotificacao" />
          <div className="textoUser">
            <h1 className="txtNotificacao">
              {" "}
              @Fulano de tal te mandou uma mensagem.{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
