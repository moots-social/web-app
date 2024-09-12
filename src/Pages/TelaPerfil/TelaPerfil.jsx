import SideBar from "../../Components/SideBar/SideBar"
import './telaPerfil.css'
import '../../App.css'
import InformacoesDoPerfil from "./InformacoesDoPerfil/InformacoesDoPerfil"

export default function TelaPerfil() {
    return (
        <main className="bg mainPerfil">
            <SideBar></SideBar>
            <InformacoesDoPerfil></InformacoesDoPerfil>
        </main>
    )
}