import '../../telaLogin.css'
import '../../../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../../../config/api'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function FormLogin() {
    const [validar, setValidar] = useState({ email: '', senha: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const dado = await api.post('/login', {
                email: validar.email,
                senha: validar.senha
            });

            
            const req = await dado.data;
            if (req) {
                localStorage.setItem('token', req.token);
                localStorage.setItem('id', req.id);
                toast.success('Login realizado com sucesso')
                setTimeout(() => {
                    navigate('/feed');
                }, 1500);
    
                
            }
        } catch (error) {
            console.log(error);
            toast.error('Email ou senha incorretos. Tente novamente.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValidar(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className="containerLogin">
                <div className="containerTitulo">
                    <h2>Faça seu login</h2>
                </div>
                <form id='login' method='post' onSubmit={handleSubmit}>
                    <div className="containerInputs">
                        <div className="containerEmailEsenha">
                            <label htmlFor="emailUser">Email</label>
                            <input type="email" name="email" id="email" onChange={handleChange} />
                        </div>
                        <div className="containerEmailEsenha">
                            <label htmlFor="senhaUser">Senha</label>
                            <input type="password" name="senha" id="senha" onChange={handleChange} />
                        </div>
                    </div>
                </form>
                <div className="senhaEsquecida ">
                    <p><span>Esqueceu a senha</span></p>
                    <hr /> 
                    <p>Não tem uma conta? <Link to='/telaCadastro'><span className='spanLogin'>Cadastre-se</span></Link></p>
                </div>
                <div className="containerBtn">
                    <button type="submit" value="Submit" form="login">Login</button>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}


