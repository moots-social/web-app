import SideBar from "../../Components/SideBar/SideBar"
import './telaPerfil.css'
import '../../App.css'
import InformacoesDoPerfil from "./InformacoesDoPerfil/InformacoesDoPerfil"
import BottomBar from "../../Components/BottomBar/BottomBar"
import { useParams } from "react-router-dom"
import api from "../../config/api"
import { useEffect, useState } from "react"
import { useUsuarioContext }  from "../../Context/useUsuarioContext"
import Perfil from "../../assets/img/user.png"
export default function TelaPerfil() {

    const [user, setUser] = useState({fotoPerfil: Perfil, fotoCapa: '', nomeCompleto: '', tag: ''})

    const token = localStorage.getItem('token');

    const { id } = useParams();

    const { setUsuario } = useUsuarioContext();

    const handleSubmit = async () => {
        try {
            const dado = await api.get(`/user/buscar/${id}`, {headers: {authorization: `${token}`}});

            const req = await dado.data;
            if (req) {
                setUser({...user, fotoCapa: req.fotoCapa, fotoPerfil: req.fotoPerfil, nomeCompleto: req.nomeCompleto, tag: req.tag});
                setUsuario(req);
            } 
            } catch(error){
                window.alert(error.response.data.error)
            }

        }  
        
    useEffect(()=>{
        handleSubmit()
        console.log(user)
    }, [])

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

