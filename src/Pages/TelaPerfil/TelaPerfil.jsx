import SideBar from "../../Components/SideBar/SideBar"
import './telaPerfil.css'
import '../../App.css'
import InformacoesDoPerfil from "./InformacoesDoPerfil/InformacoesDoPerfil"
import BottomBar from "../../Components/BottomBar/BottomBar"
import { useParams } from "react-router-dom"
import api from "../../config/api"
import { useState } from "react"
import { useUsuarioContext }  from "../../Context/useUsuarioContext"

export default function TelaPerfil() {

    const [user, setUser] = useState[{fotoPerfil, fotoCapa, nomeCompleto, tag}]

    const token = localStorage.getItem('token');

    const { id } = useParams();

    const { setUsuario } = useUsuarioContext();

    const handleSubmit = async () => {

        try {
            const dado = await api.get(`/buscar/${id}`, {headers: {authorization: `bearer ${token}`}});

            const req = await dado.data;

            if (req) {
                setUser({...user, fotoCapa: req.fotoCapa, fotoPerfil: req.fotoPerfil, nomeCompleto: req.nomeCompleto, tag: req.tag});
                setUsuario("oi");
            } 
            } catch(error){
                window.alert(error)
            }

        } 

        handleSubmit();
        return (
            <>
            <main className="bg mainPerfil">    
                <SideBar></SideBar>
                <InformacoesDoPerfil fotoPerfil={user.fotoPerfil} fotoCapa={user.fotoCapa} nomeCompleto={user.nomeCompleto} tag={user.tag} ></InformacoesDoPerfil>
            </main>
            <BottomBar></BottomBar>
            </>
    
        )
    }

