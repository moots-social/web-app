
import '../BotaoHeader/button.css';
import { Link } from 'react-router-dom';

function ButtonS(){
    return(
        <div className='containerSaibaMais'>
            <Link to=''>
        <button className="saiba btn">
            Saiba Mais
        </button>
        </Link>
        </div>

    )

}

export default ButtonS