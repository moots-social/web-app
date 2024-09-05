
import { Link } from 'react-router-dom'
import './button.css'

function buttonLogin(){
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


export default buttonLogin;