import SideBar from "../../Components/SideBar/SideBar"
import './telaPerfil.css'
import '../../App.css'
import InformacoesDoPerfil from "./InformacoesDoPerfil/InformacoesDoPerfil"
import BottomBar from "../../Components/BottomBar/BottomBar"

export default function TelaPerfil() {
    return (
        <>
        <main className="bg mainPerfil">    
            <SideBar></SideBar>
            <InformacoesDoPerfil></InformacoesDoPerfil>
        </main>
        <BottomBar></BottomBar>
        </>

    )
}