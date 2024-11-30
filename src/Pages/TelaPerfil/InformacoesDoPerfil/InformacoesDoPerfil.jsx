import FotosPerfilECapa from "./FotosPerfilECapa/FotosPerfilECapa"
import NomeETag from "./NomeETag/NomeETag"
import BotoesDoPerfil from "./BotoesDoPerfil/BotoesDoPerfil"
import PostsPerfil from "../../../Components/PostPerfil/PostPerfil"
import Seguindo from "../../../Components/Seguindo/Seguindo"
import "../telaPerfil.css"



export default function InformacoesDoPerfil() {
    return (<>
        <Seguindo></Seguindo>
        <div className="visualizacaoDoPerfil">
            <FotosPerfilECapa></FotosPerfilECapa>
            <div className="informacoesAbaixoDaCapa">
                <NomeETag></NomeETag>
                <BotoesDoPerfil></BotoesDoPerfil>
                <div className="divPostPerfil">
                    <PostsPerfil/>
                </div>
            </div>
        </div>
        </>
    )
}