import '../../telaPerfil.css'
import FotoPerfil from "../../../../assets/img/user.png"
import FotoCapa from "../../../../assets/img/userCapa.png"

export default function FotosPerfilECapa() {


    return (
        <div className="fotosPerfilECapa">
            <img src={FotoCapa} alt="" className="imgCapa" />
            <img src={FotoPerfil} alt="" className="imgPerfil" />
        </div>
    )
}