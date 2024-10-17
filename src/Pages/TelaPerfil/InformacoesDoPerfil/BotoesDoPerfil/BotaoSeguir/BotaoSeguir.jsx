import '../../../TelaPerfil.css'
import ImagemSeguir from '../../../../../assets/img/imagemSeguir.png'
import { useNavigate } from 'react-router-dom'

export default function BotaoSeguir(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/configPerfil');
      };

    return(
        <img src={ImagemSeguir} alt="" className='botaoSeguir botaoPerfil' onClick={handleClick} style={{cursor: 'pointer'}}/>
    )
}