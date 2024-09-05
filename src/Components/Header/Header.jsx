

import Moots from '../../assets/img/logo.png';
import './Header.css'
import ButtonL from './BotaoHeader/ButtonL'
import ButtonC from './BotaoHeader/buttonLogin';


function Header(){

    return(
        <header className='header'>
        <div className='Principal'>
          <div className='img'>
          <img src={Moots} className="logo" alt="logo" />
          </div>
          <div className='Botoes'>
            <ButtonL />
            <ButtonC className='C'/>

          </div>
      </div>
      </header>
    )
}


export default Header