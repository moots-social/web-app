import '../configPerfil.css'
import { useState } from 'react'
        

export default function ConfigAbaixoDaCapa(){

    const[valorSelecionado, setValorSelecionado] = useState("");

    const handleChange = (event) => {
        setValorSelecionado(event.target.value)
        alert(valorSelecionado)
    }

    return(
        <div className="containerCursoEBio">
            <details>
                <summary>Escolha seu curso: </summary>
                <form>

                <input type='radio' id='check-mecanica' value="MECANICA" onChange={handleChange}/>
                <label htmlFor="check-mecanica">MECANICA</label>

                <input type='radio' id='check-desenvolvimento' value="DESENVOLVIMENTO" onChange={handleChange}/>
                <label htmlFor="check-desenvolvimento">DESENVOLVIMENTO</label>

                <input type='radio' id='check-redes' value="REDES" onChange={handleChange}/>
                <label htmlFor="check-redes">REDES</label>

                <input type='radio' id='check-fic' value="FIC" onChange={handleChange}/>
                <label htmlFor="check-fic">FIC</label>

                <input type='radio' id="check-qualidade" value="QUALIDADE" onChange={handleChange}/>
                <label htmlFor="check-qualidade">QUALIDADE</label>
                </form>


            </details>
            <div className="escrevaBio"></div>
        </div>


    )
}
