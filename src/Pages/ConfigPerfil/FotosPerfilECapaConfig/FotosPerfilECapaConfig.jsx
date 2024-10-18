import FotoPerfil from '../../../assets/img/user.png'
import FotoCapa from '../../../assets/img/userCapa.png'
import '../configPerfil.css'

export default function fotosPerfilECapaConfig() {
    return(
        <div className="fotosPerfilECapaConfig">
            <input type='file' />
            
            <img src={FotoCapa} alt="" className='imgCapaConfig'/>


            <img src={FotoPerfil} alt="" className='imgPerfilConfig'/>
        </div>
    )
}