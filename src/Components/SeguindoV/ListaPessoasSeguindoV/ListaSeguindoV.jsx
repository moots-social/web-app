import { useNavigate } from 'react-router-dom'
import Pfp from '../../../assets/img/chatGabriel.png'
import './listaSeguindoV.css'

export default function listaSeguindoV({descricao, nome, tag, imagem, id, ...rest}) {
    const navigate = useNavigate()

    return (
        <div className="containerListaSeguindoV">
            <div className='perfilTelaSeguindoV' onClick={() => navigate(`/perfil/${id}`)}>
                <img src={imagem || Pfp} width={60} height={60} style={{borderRadius: "30px"}}/>
                <div className='infoPerfilSeguindoV'>
                    <p className='nomePerfilTelaSeguindoV'>{nome || "gabriel"}</p>
                    <p className='arrobaPerfilTelaSeguindoV'>{tag || "gabriel"}</p>
                </div>
            </div>
            <div className='divBotaoSeguindoV'>
                <button className='botaoListaSeguindoV' {...rest}>{descricao}</button>
            </div>
        </div>
    )
}