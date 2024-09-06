{/* trocar todos os 'a' pra 'Link' */}

import Header from '../../Components/Header/Header';
import MainCadastro from './MainCadastro/mainCadastro'
import HeaderCadastro from './HeaderCadaastro/headerCadastro'

import './style.css';

// import {Link} from "react-router-dom"

export default function telaCadastro(){
    return(
        <>
            <HeaderCadastro></HeaderCadastro>
            <MainCadastro></MainCadastro>
        </>
    )
}