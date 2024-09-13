import '../telaCadastro.css'

import ImagemDevices from "./ImagemDevices/imagemDevices"
import FormCadastro from "./FormCadastro/formCadastro"

export default function MainCadastro(){
    return(
        <main className='mainCadastro'>
            <ImagemDevices></ImagemDevices>
            <FormCadastro></FormCadastro>
        </main>
    )
}