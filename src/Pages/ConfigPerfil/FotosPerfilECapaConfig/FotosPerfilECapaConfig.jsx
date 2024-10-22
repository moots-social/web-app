import FotoPerfil from '../../../assets/img/user.png'
import FotoCapa from '../../../assets/img/userCapa.png'
import iconeImagemPost1 from '../../../assets/img/iconeImagemPost.png'
import '../configPerfil.css'

export default function fotosPerfilECapaConfig() {
    return (
        <div className="fotosPerfilECapaConfig">

            <img src={FotoCapa} alt="" className='imgCapaConfig' />

            <div className='testeste'>
                <img src={FotoPerfil} alt="" className='imgPerfilConfig' />
                <label for="file-upload" class="custom-file-upload">
                    <img src={iconeImagemPost1}></img>
                    <input id='file-upload' type='file' className='testeinput' />
                </label>
            </div>
        </div>
    )
}