
import MainCadastro from './MainCadastro/mainCadastro'
import HeaderCadastro from './HeaderCadaastro/headerCadastro'

import './telaCadastro.css';

// import {Link} from "react-router-dom"

export default function telaCadastro(){
    return(
        <div className='cadastroPai'>  
            <HeaderCadastro></HeaderCadastro>
            <MainCadastro></MainCadastro>
        </div>
    )
}