import { Link } from 'react-router-dom'
import './button.css'

function ButtonC(){
    return(
        <div>
             <Link to='/telaLogin'>
        <button className="btn">
            Iniciar Sessão
        </button>
        </Link>
        </div>

    )

}

export default ButtonC