import FotoPerfil from '../../../assets/img/iconePerfil.png'
import FotoCapa from '../../../assets/img/imagemCapa.png'
import '../configPerfil.css'

export default function fotosPerfilECapaConfig() {
    return(
        <div className="fotosPerfilECapaConfig">
            <img src={FotoCapa} alt="" className='imgCapaConfig'/>
            <img src={FotoPerfil} alt="" className='imgPerfilConfig'/>
        </div>
    )
}