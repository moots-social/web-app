import '../../telaPerfilVisitante.css'
import { useUsuarioContext } from "../../../../Context/useUsuarioContext";


export default function FotosPerfilECapaVisitante({fotoCapa, fotoPerfil}) {

    return (
        <div className="fotosPerfilECapa">
            <img src={fotoCapa} alt="" className="imgCapa" />
            <img src={fotoPerfil} alt="" className="imgPerfil" />
        </div>
    )
}