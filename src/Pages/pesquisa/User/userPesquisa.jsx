import { useNavigate } from 'react-router-dom'
import perfil from '../../../assets/img/perfil.png'
import './usePesquisa.css'

export default function UserPesquisa({nome, foto, descricao, id, ...rest}) {

    const navigate = useNavigate()
    return (
        <main className='userPesquisaPrincipal' >
            <div className="perfilNome" onClick={() => navigate(`/perfil/${id}`)} >
                <img src={foto || perfil} />
                <p>{nome || "user"}</p>
            </div>

            <button className='botãoUserPesquisa' {...rest}>{descricao || "seguir"}</button>
        </main>
    )
}