import '../telaCadastro.css'
import logo from '../../../assets/img/Logo.png'
import logoSemTexto from '../../../assets/img/iconeLogoSemTexto.png'

export default function HeaderCadastro(){
    return(
        <header className='headerCadastro'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="logoSemTexto">
                <img src={logoSemTexto} alt="" />
            </div>
        </header>
    )
}