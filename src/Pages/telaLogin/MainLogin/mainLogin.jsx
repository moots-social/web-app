import '../telaLogin.css'

import ImagemDevices from "./ImagemDevices/imagemDevices"
import FormLogin from "./FormLogin/formLogin"

export default function MainLogin(){
    return(
        <main className='mainLogin'>
            <ImagemDevices></ImagemDevices>
            <FormLogin></FormLogin>
        </main>
    )
}