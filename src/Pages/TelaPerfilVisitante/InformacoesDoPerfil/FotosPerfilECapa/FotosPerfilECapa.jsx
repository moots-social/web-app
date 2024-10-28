import '../../telaPerfilVisitante.css'
import { useUsuarioContext } from "../../../../Context/useUsuarioContext";


export default function FotosPerfilECapa() {

    const { usuario } = useUsuarioContext();
    return (
        <div className="fotosPerfilECapa">
            <img src={usuario.fotoCapa} alt="" className="imgCapa" />
            <img src={usuario.fotoPerfil} alt="" className="imgPerfil" />
        </div>
    )
}