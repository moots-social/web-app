{/* trocar todos os 'a' pra 'Link' */}

import './TelaLogin.css'
import mootsLogo from '../../assets/img/mootsLogo.png';
import devicesDemo from '../../assets/img/devicesDemo.png';
// import {Link} from "react-router-dom"

export default function telaLogin(){
    return(
        <div className='telaLogin'>
            <div className='divEsq'>
                <div className="logoDiv">
                    <img src={mootsLogo}></img>
                </div>
                <div className="imagensExemplo">
                <img src={devicesDemo}></img>
                </div>
            </div>
            <div className='divDir'>
                <div className='loginDiv'>
                    <div className='tituloLogin'>
                        <h1>Faça seu login</h1>
                    </div>
                    <div className='emailDiv'>
                        <p className='texto20px'>Email</p>
                        <input type="email" className='inputEmail'/>
                    </div>
                    <div className='senhaDiv'>
                        <p className='texto20px'>Senha</p>
                        <input type="password" className='inputSenha'/>
                    </div>
                    <div className='forgotPassword'>
                        <a className='link20px'>Esqueceu a senha?</a>
                    </div>
                    <div className='cadastroLink'>
                        <p className='texto20px'>Não tem uma conta?</p>
                        <a className='link20px'>cadastre-se</a>
                    </div>
                    <div className='botaoLogin'>
                        <a><button className='botaoLogin'>Login</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}