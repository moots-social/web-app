import FotosPerfilECapa from "./FotosPerfilECapa/FotosPerfilECapa"
import NomeETag from "./NomeETag/NomeETag"
import BotoesDoPerfil from "./BotoesDoPerfil/BotoesDoPerfil"
import PostsPerfil from "./PostsPerfil/PostsPerfil"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../../config/api"
import BotoesDoPerfilVisitante from "./BotoesDoPerfil/BotoesDoPerfil"
import PostsPerfilVisitante from "./PostsPerfil/PostsPerfil"
import NomeETagVisitante from "./NomeETag/NomeETag"
import FotosPerfilECapaVisitante from "./FotosPerfilECapa/FotosPerfilECapa"

export default function InformacoesDoPerfilVisitante() {
    const [usuario, setUsuario] = useState()
    const {id} = useParams()
    const token = localStorage.getItem("token")

    useEffect(() => {
        const buscarUsuario = async() => {
            try {
                const req = await api.get(`/user/buscar/${id}`, {headers: {Authorization: token}})
                const dado = await req.data;
                
                console.log(dado)
                setUsuario(dado)
            } catch (e) {
                alert(e.response.data.erro)
            }
        }

        buscarUsuario()
    }, [])
    
    return (
        <div className="visualizacaoDoPerfil">
            {usuario ? (
                <>
                    <FotosPerfilECapaVisitante key={usuario.id} fotoPerfil={usuario.fotoPerfil} fotoCapa={usuario.fotoCapa}></FotosPerfilECapaVisitante>
                    <div className="informacoesAbaixoDaCapa">
                        <NomeETagVisitante key={usuario.id} nomeCompleto={usuario.nomeCompleto} descricao={usuario.descricao} tag={usuario.tag}></NomeETagVisitante>
                        <BotoesDoPerfilVisitante curso={usuario.curso}></BotoesDoPerfilVisitante>
                        <PostsPerfilVisitante></PostsPerfilVisitante>
                    </div>
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    )
    
}