import Pfp from '../../../assets/img/chatGabriel.png'
import './listaSeguindo.css'

export default function listaSeguindo({descricao, nome, tag, imagem, ...rest}) {
    return (
        <div className="containerListaSeguindo">
            <div className='perfilTelaSeguindo'>
                <img src={imagem || Pfp} width={60} height={60} style={{borderRadius: "30px"}}/>
                <div className='infoPerfilSeguindo'>
                    <p className='nomePerfilTelaSeguindo'>{nome || "gabriel"}</p>
                    <p className='arrobaPerfilTelaSeguindo'>{tag || "gabriel"}</p>
                </div>
            </div>
            <div className='divBotaoSeguindo'>
                <button className='botaoListaSeguindo' {...rest}>{descricao}</button>
            </div>
        </div>
    )
}