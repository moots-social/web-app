import '../../../TelaPerfil.css'
import ImagemEditar from '../../../../../assets/img/lapis.svg'
import { useNavigate } from 'react-router-dom'

export default function BotaoSeguir(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/configPerfil');
      };

    return(
        <img src={ImagemEditar} alt="" className='botaoSeguir botaoPerfil' onClick={handleClick} style={{cursor: 'pointer'}}/>
    )
}