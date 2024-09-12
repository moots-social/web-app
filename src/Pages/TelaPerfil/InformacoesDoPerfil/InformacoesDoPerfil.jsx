import FotosPerfilECapa from "./FotosPerfilECapa/FotosPerfilECapa"
import NomeETag from "./NomeETag/NomeETag"
import BotoesDoPerfil from "./BotoesDoPerfil/BotoesDoPerfil"
import PostsPerfil from "./PostsPerfil/PostsPerfil"

export default function InformacoesDoPerfil() {
    return (
        <div className="visualizacaoDoPerfil">
            <FotosPerfilECapa></FotosPerfilECapa>
            <div className="informacoesAbaixoDaCapa">
                <NomeETag></NomeETag>
                <BotoesDoPerfil></BotoesDoPerfil>
                <PostsPerfil></PostsPerfil>
            </div>
        </div>
    )
}