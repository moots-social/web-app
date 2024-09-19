import Pfp from '../../../assets/img/chatGabriel.png'
import './listaSeguindo.css'

export default function listaSeguindo() {
    return (
        <div className="containerListaSeguindo">
            <div className='perfilTelaSeguindo'>
                <img src={Pfp}></img>
                <div className='infoPerfilSeguindo'>
                    <p className='nomePerfilTelaSeguindo'>Gabriel dos Anjos</p>
                    <p className='arrobaPerfilTelaSeguindo'>@gabrielAnjinho</p>
                </div>
            </div>
            <div className='divBotaoSeguindo'>
                <button className='botaoListaSeguindo'>Seguindo</button>
            </div>
        </div>
    )
}