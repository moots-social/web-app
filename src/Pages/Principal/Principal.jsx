import mocaArvore from "../../assets/img/imagemInicial.png";
import "./principal.css";
import Header from "../../Components/Header/Header.jsx";
import BotaoSobre from "./BotaoAtivo/BotaoSobre.jsx";
import "../../Components/Responsividade/Responsividade.css";

function Principal() {
  return (
    <>
      <Header />
      <main className="mainPrincipal">
        <div className="containerTxt">
          <h2 className="hTitulo">Moots</h2>
          <div className="textos">
            <h1>O que é?</h1>
            <p className="paragrafoPaginaPrincipal">
              Somos uma rede social estudantil desenvolvida por alunos do Senai
              Suiço-Brasileira.
            </p>
            <div className="btnAtivo">
              <BotaoSobre />
            </div>
          </div>
        </div>
        <div>
          <img src={mocaArvore} className="imagemMocaArvore" />
        </div>
      </main>
    </>
  );
}

export default Principal;
