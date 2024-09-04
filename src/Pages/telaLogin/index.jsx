{/* trocar todos os 'a' pra 'Link' */}

import Header from '../../Components/Header/Header';
import MainLogin from './MainLogin/mainLogin'
import HeaderLogin from './HeaderLogin/HeaderLogin'

import './style.css';

// import {Link} from "react-router-dom"

export default function telaLogin(){
    return(
        <>
            <HeaderLogin></HeaderLogin>
            <MainLogin></MainLogin>
        </>
    )
}