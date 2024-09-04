{/* trocar todos os 'a' pra 'Link' */}

import Header from '../../Components/Header/Header';
import MainLogin from './MainLogin/mainLogin'

import './TelaLogin.css'

// import {Link} from "react-router-dom"

export default function telaLogin(){
    return(
        <>
            <Header></Header>
            <MainLogin></MainLogin>
        </>
    )
}