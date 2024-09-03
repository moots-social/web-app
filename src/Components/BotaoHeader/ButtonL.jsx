
import './button.css'
import '../BotaoHeader/button.css';
import { Link } from 'react-router-dom';

function ButtonL(){
    return(
        <div>
            <Link to='/telaLogin'>
        <button className="btn">
            Login
        </button>
        </Link>
        </div>

    )

}

export default ButtonL