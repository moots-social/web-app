
import MainLogin from './MainLogin/mainLogin'
import HeaderLogin from './HeaderLogin/HeaderLogin'

import './telaLogin.css';

// import {Link} from "react-router-dom"

export default function TelaLogin(){
    return(
        <div className='loginPai'>
            <HeaderLogin></HeaderLogin>
            <MainLogin></MainLogin>
        </div>
    )
}