import '../../../TelaPerfilVisitante.css'
import ImagemSeguir from '../../../../../assets/img/imagemSeguir.png'   
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUsuarioContext } from '../../../../../Context/useUsuarioContext'
import { buscarSeguindos } from '../../../../../Components/Seguindo/Seguindo'
import api from '../../../../../config/api'

export default function BotaoSeguir() {
    const {id} = useParams()
    const {usuario} = useUsuarioContext()
    const idParam = String(id); // Convertendo id para string
    const usuarioId = String(usuario.id); // Convertendo usuario.id para string

    const token = localStorage.getItem("token")
    const [sigo, setSigo] = useState()
    const [atualizarDados, setAtualizarDados] = useState(false);

    useEffect(() => {
        const getSeguidores = async() => {
            try {
                const seguindos = await buscarSeguindos(usuarioId, token)
                
                // Verificando se o usuário está sendo seguido
                const seguindo = seguindos.some((s) => s.userId == idParam);
                
                setSigo(seguindo); // Atualiza o estado com a informação correta
                console.log(seguindo)
            } catch (e) {
                setSigo(false);
            }
        }

        getSeguidores()
    }, [atualizarDados, idParam, usuarioId]) // Dependência do idParam e usuarioId

    const seguir = async() => {
        const confirmar = window.confirm("Tem certeza que deseja seguir esse usuario?");
        if(confirmar) {
          try {
            await api.put("/user/seguir", {}, {
              headers: {Authorization: token},
              params: {id1: usuarioId, id2: idParam, follow: true}
            });
            setAtualizarDados(prev => !prev); // Atualiza os dados
          } catch (e) {
            alert(e.response?.data?.message || "Erro ao tentar seguir.");
          }
        }
    }

    const deixarSeguir = async() => {
        const confirmar = window.confirm("Tem certeza que deseja parar de seguir esse usuário?");
        if(confirmar) {
          try {
            await api.put("/user/seguir", {}, {
              headers: {Authorization: token},
              params: {id1: usuarioId, id2: idParam, follow: false}
            });
            setAtualizarDados(prev => !prev); // Atualiza os dados
          } catch (e) {
            alert(e.response?.data?.message || "Erro ao tentar deixar de seguir.");
          }
        }
    }

    return(
        <>
            {sigo ? (
                <button onClick={() => deixarSeguir()}>deixar de seguir</button>
            ) : (
                <img src={ImagemSeguir} alt="" className='botaoSeguir botaoPerfil' style={{cursor: 'pointer'}} onClick={() => seguir()}/>
            )}
        </>
    )
}
