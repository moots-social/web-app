import FotosPerfilECapa from "./FotosPerfilECapa/FotosPerfilECapa"
import NomeETag from "./NomeETag/NomeETag"
import BotoesDoPerfil from "./BotoesDoPerfil/BotoesDoPerfil"
import PostsPerfil from "./PostsPerfil/PostsPerfil"
import Seguindo from "../../../Components/Seguindo/Seguindo"


export default function InformacoesDoPerfil() {
    return (<>
        <Seguindo></Seguindo>

        <div className="visualizacaoDoPerfil">
            <FotosPerfilECapa></FotosPerfilECapa>
            <div className="informacoesAbaixoDaCapa">
                <NomeETag></NomeETag>
                <BotoesDoPerfil></BotoesDoPerfil>
                <PostsPerfil></PostsPerfil>
            </div>
        </div>
        </>
    )
}