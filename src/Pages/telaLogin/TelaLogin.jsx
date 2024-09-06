
import MainLogin from './MainLogin/mainLogin'
import HeaderLogin from './HeaderLogin/HeaderLogin'

import './telaLogin.css';

// import {Link} from "react-router-dom"

export default function TelaLogin(){
    return(
        <>
            <HeaderLogin></HeaderLogin>
            <MainLogin></MainLogin>
        </>
    )
}