import Moots from "../../assets/img/logo.png";
import "./Header.css";
import ButtonSobre from "./BotaoHeader/ButtonSobre";
import ButtonLogin from "./BotaoHeader/buttonLogin";

function Header() {
  return (
    <header>
      <div className="headerPrincipal">
        <div className="logoContainer">
          <img src={Moots} className="logo" alt="logo" />
        </div>
        <div className="Botoes">
          <ButtonSobre />
          <ButtonLogin className="C" />
        </div>
      </div>
    </header>
  );
}

export default Header;
