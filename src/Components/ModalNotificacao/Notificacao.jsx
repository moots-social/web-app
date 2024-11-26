import "./ModalNotificacao.css";
import Balao from "./Balao/Balao"



export default function Notificacao (){
        return(
            <div className="containerPaiNotificacao">
                <div className="modalNotificacao bg">
                <div className="mainDivNotificacao"> 
                    <h2 className="tituloModal">Suas notificações</h2></div>
                    <Balao />
                </div>
            </div>
        )

}