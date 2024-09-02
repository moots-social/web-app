import Moots from '../imagens/Moots.png'
import './Header.css'
import ButtonL from '../BotaoHeader/ButtonL'
import ButtonC from '../BotaoHeader/ButtonC'


function Header(){

    return(
        <header className='header'>
        <div className='Principal'>
          <div className='img'>
          <img src={Moots} className="logo" alt="logo" />
          </div>
          <div className='Botoes'>
            <ButtonL />
            <ButtonC />
          </div>
      </div>
      </header>
    )
}

export default Header