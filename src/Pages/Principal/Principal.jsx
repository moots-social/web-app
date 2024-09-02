import image from '../imagens/image.png'
import './Principal.css'
import ButtonS from '../../components/ButtonS'

function Principal(){
    return(
        <div className="MainContainer">
            <div className='LadoUM'>
                <h2>Moots</h2>
                <h1>O que é?</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <div className='SaibaBo'>
                <ButtonS/>
                </div>
            </div>
            <div>
                <img src={image} className='imagem' />
            </div>
        </div>
    )
}

export default Principal