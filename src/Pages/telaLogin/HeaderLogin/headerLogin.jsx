import '../telaLogin.css'

import logo from '../../../assets/img/logo.png';

export default function HeaderLogin(){
    return(
        <header className='headerLogin'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </header>
    )
}