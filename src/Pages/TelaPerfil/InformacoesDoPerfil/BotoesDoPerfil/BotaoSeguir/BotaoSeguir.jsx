import '../../../TelaPerfil.css'
import ImagemConfig from '../../../../../assets/img/configuracoes.svg'
import { useNavigate } from 'react-router-dom'

export default function BotaoSeguir(){
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/configPerfil');
      };
      
    return(
        <img src={ImagemConfig} alt="" className='botaoSeguir botaoPerfil' onClick={handleClick} style={{cursor: 'pointer'}}/>
    )
}