import Moots from "../../assets/img/logo.png";
import "./Header.css";
import "../Responsividade/Responsividade.css"
import logoMobile from "../../assets/img/iconeHeaderMobile.png";
import ButtonLogin from "./BotaoHeader/buttonLogin";

function Header() {
  return (
    <header>
      <div className="headerPrincipal">
        <div className="logoContainer">
          <img src={Moots} className="logo" alt="logo" />
          <div className="containerLogoMobile">
            <img src={logoMobile} className='logoHeaderMobile'/>
          </div>
        </div>
        <div className="Botoes">
          <ButtonLogin />
        </div>
      </div>
    </header>
  );
}

export default Header;
