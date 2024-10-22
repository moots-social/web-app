import '../../telaPerfil.css'
import FotoPerfil from "../../../../assets/img/user.png"
import FotoCapa from "../../../../assets/img/userCapa.png"
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