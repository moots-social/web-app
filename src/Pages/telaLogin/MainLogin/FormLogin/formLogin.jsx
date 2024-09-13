import '../../telaLogin.css'
import '../../../../App.css'
import { Link } from 'react-router-dom'
export default function FormLogin() {
    return(
        <>
            <div className="containerLogin">
                <div className="containerTitulo">
                    <h2>Faça seu login</h2>
                </div>
                <div className="containerInputs">
                    <div className="containerEmailEsenha">
                        <label htmlFor="emailUser">Email</label>
                        <input type="email" name="emailUser" id="emailUser"/>
                    </div>
                    <div className="containerEmailEsenha">
                        <label htmlFor="senhaUser">Senha</label>
                        <input type="password" name="senhaUser" id="senhaUser" />
                    </div>
                </div>
                <div className="senhaEsquecida ">
                    <p><span>Esqueceu a senha</span></p>
                    <hr /> 
                    <p>Não tem uma conta? <Link to='/telaCadastro'><span className='spanLogin'>Cadastre-se</span></Link></p>
                </div>
                <div className="containerBtn">
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}