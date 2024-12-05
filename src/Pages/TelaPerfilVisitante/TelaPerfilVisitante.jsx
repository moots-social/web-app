import SideBar from "../../Components/SideBar/SideBar"
import './telaPerfilVisitante.css'
import '../../App.css'
import InformacoesDoPerfil from "./InformacoesDoPerfil/InformacoesDoPerfil"
import BottomBar from "../../Components/BottomBar/BottomBar"
import InformacoesDoPerfilVisitante from "./InformacoesDoPerfil/InformacoesDoPerfil"

export default function TelaPerfilVisitante() {

    return (
        <>
        <main className="bg mainPerfil">    
            <SideBar></SideBar>
            <InformacoesDoPerfilVisitante></InformacoesDoPerfilVisitante>
        </main>
        <BottomBar></BottomBar>
        </>

    )
}

