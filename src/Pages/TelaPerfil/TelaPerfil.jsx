import SideBar from "../../Components/SideBar/SideBar"
import './telaPerfil.css'
import '../../App.css'
import InformacoesDoPerfil from "./InformacoesDoPerfil/InformacoesDoPerfil"
import BottomBar from "../../Components/BottomBar/BottomBar"
import { useUsuarioContext }  from "../../Context/useUsuarioContext"
import { useState, useEffect } from "react"
import api from "../../config/api"
import { useParams } from "react-router-dom"

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

