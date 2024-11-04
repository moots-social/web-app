import FotosPerfilECapaConfig from "./FotosPerfilECapaConfig/FotosPerfilECapaConfig";
import ConfigAbaixoDaCapa from "./ConfigAbaixoDaCapa/ConfigAbaixoDaCapa";
import SideBar from "../../Components/SideBar/SideBar";
import '../../App.css'


export default function ConfigPerfil() {
    return (
        <main className="mainConfig bg">
            <div>
                <SideBar></SideBar>
                <FotosPerfilECapaConfig></FotosPerfilECapaConfig>
                <ConfigAbaixoDaCapa></ConfigAbaixoDaCapa>
            </div>
        </main>
    )
}