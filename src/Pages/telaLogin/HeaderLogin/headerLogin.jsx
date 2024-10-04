import '../telaLogin.css'

import logo from '../../../assets/img/logo.png';
import logoSemTexto from '../../../assets/img/iconeLogoSemTexto.png'

export default function HeaderLogin(){
    return(
        <header className='headerLogin'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="logoSemTexto">
                <img src={logoSemTexto} alt="" />
            </div>
        </header>
    )
}