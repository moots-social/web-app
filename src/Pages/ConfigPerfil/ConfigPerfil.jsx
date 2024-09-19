import FotosPerfilECapaConfig from "./FotosPerfilECapaConfig/FotosPerfilECapaConfig";
import ConfigAbaixoDaCapa from "./ConfigAbaixoDaCapa/ConfigAbaixoDaCapa";
import '../../App.css'

export default function ConfigPerfil() {
    return (
        <main className="mainConfig bg">
            <div>
                <FotosPerfilECapaConfig></FotosPerfilECapaConfig>
                <ConfigAbaixoDaCapa></ConfigAbaixoDaCapa>
            </div>
        </main>
    )
}