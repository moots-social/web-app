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
        <div className="containerCursoEBio">
            <select id="cursos" onChange={handleChange}>
                <option value="REDES">REDES</option>
                <option value="DESENVOLVIMENTO">DESENVOLVIMENTO</option>
                <option value="FIC">FIC</option>
                <option value="MECANICA">MECANICA</option>
                <option value="QUALIDADE">QUALIDADE</option>
            </select>
            <h1>{valorSelecionado}</h1>
            <div className="escrevaBio">
                <textarea className='inputBio'></textarea>
            </div>
        </div>


    )
}
