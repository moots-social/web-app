import '../configPerfil.css'
import { useState } from 'react'

export default function ConfigAbaixoDaCapa(){

    const [user, setUser] = useState({fotoPerfil: '', fotoCapa: '', curso: '', tag: ''})

    const[valorSelecionado, setValorSelecionado] = useState("");

    const handleChange = (event) => {
        const novoValor = event.target.value

        setValorSelecionado(novoValor)
        alert(novoValor)
    }

    return(
        <></>


    )
}
