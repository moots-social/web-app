import SideBar from "../../Components/SideBar/SideBar"
import './telaPerfil.css'
import '../../App.css'
import InformacoesDoPerfil from "./InformacoesDoPerfil/InformacoesDoPerfil"
import BottomBar from "../../Components/BottomBar/BottomBar"
import { useUsuarioContext } from "../../Context/useUsuarioContext"
import { useParams } from "react-router-dom"

export default function TelaPerfil() {
    const { usuario } = useUsuarioContext()
    const { id } = useParams()

    console.log(usuario)
    return (
        <>
        <main className="bg mainPerfil">    
            <SideBar></SideBar>
            {usuario.id == id ? (
                <InformacoesDoPerfil></InformacoesDoPerfil>
           ) : (
            <h1>É foda né</h1>
           )}
        </main>
        <BottomBar></BottomBar>
        </>
    )
}