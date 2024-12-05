import '../../../TelaPerfilVisitante.css'
import ImagemCursoDesenvolvimento from '../../../../../assets/img/imagemDesenvolvimento.png'
import ImagemCursoFic from '../../../../../assets/img/imagemFic.png'
import ImagemCursoMecanica from '../../../../../assets/img/imagemMecanica.png'
import ImagemCursoQualidade from '../../../../../assets/img/imagemQualidade.png'
import ImagemCursoRedes from '../../../../../assets/img/imagemRedes.png'
import ImagemSemCurso from '../../../../../assets/img/logoSemImagem.png'
import { useEffect, useState } from 'react'

export default function BotaoCurso({curso}){
    const [foto, setFoto] = useState()

    useEffect(() => {
        switch (curso){
            case 'REDES':
                setFoto(ImagemCursoRedes)
                break;
            case 'DESENVOLVIMENTO':
                setFoto(ImagemCursoDesenvolvimento)
                break;
            case 'FIC':
                setFoto(ImagemCursoFic)
                break;
            case 'MECANICA':
                setFoto(ImagemCursoMecanica)
                break;
            case 'QUALIDADE':
                setFoto(ImagemCursoQualidade)
                break;
            default:
                setFoto(ImagemSemCurso)
        }
    }, [curso])

    return(
        <img src={foto} alt=""className='botaoCurso botaoPerfil' />
    )
}