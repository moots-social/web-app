import FotoPerfil from '../../../../assets/img/iconePerfil.png'
import FotoCapa from '../../../../assets/img/imagemCapa.png'
import '../../telaPerfil.css'

export default function fotosPerfilECapa() {
    return (
        <div className="fotosPerfilECapa">
            <img src={FotoCapa} alt="" className="imgCapa" />
            <img src={FotoPerfil} alt="" className="imgPerfil" />
        </div>
    )
}