import '../style.css'
import logo from '../../../assets/img/mootsLogo.png'

export default function HeaderLogin(){
    return(
        <header className='headerLogin'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}