import { useUsuarioContext } from '../../../../Context/useUsuarioContext';
import '../../telaPerfil.css'

export default function FotosPerfilECapa() {
    
    const { usuario } = useUsuarioContext();

    return (
        <div className="fotosPerfilECapa">
            <img src={usuario.fotoPerfil} alt="" className="imgCapa" />
            <img src={usuario.fotoCapa} alt="" className="imgPerfil" />
        </div>
    )
}