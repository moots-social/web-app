import '../style.css'
import logo from '../../../assets/img/logo.svg';

export default function HeaderLogin(){
    return(
        <header className='headerLogin'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </header>
    )
}