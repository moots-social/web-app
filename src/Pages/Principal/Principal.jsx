
import image from '../../assets/img/imagemInicial.png';
import './principal.css'
import ButtonS from '../../Components/BotaoSaibaMais/ButtonS.jsx'
import Header from '../../Components/Header/Header.jsx'

function Principal(){
    return(
        <div className='DivPai'>
            <Header />
        <div className="mainContainer ">
            <div className='containerTxt'>
                <h2>Moots</h2>
                <div className='textos'>
                <h1>O que é?</h1>
                <p>Somos uma rede social estudantil desenvolvida por alunos do Senai Suiço-Brasileira.</p>
                </div>
                <div className='btnSaiba'>

                <ButtonS/>
                </div>
            </div>
            <div>
                <img src={image} className='imagem' />
            </div>
        </div>

        </div>
    )
}

export default Principal