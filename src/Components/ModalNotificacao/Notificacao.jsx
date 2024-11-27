
// import "./ModalNotificacao.css";
// import Balao from "./Balao/Balao"
// import { useState, useEffect } from "react";
// import api from "../../config/api";

// export default function Notificacao () {

//     const token = localStorage.getItem("token");
//     const id = localStorage.getItem("id");
//     const [notificacao, setNotificacao] = useState([]); // Inicialize com um array vazio

//     const GetNotificacoes = async () => {
//         try {
//             const dados = await api.get(`/notification/${id}`, {
//                 headers: { authorization: `${token}` },
//             });

//             const req = await dados.data;

//             setNotificacao(req);
//             console.log(req);
//         } catch (error) {
//             window.alert(error);
//         }
//     };

//     useEffect(() => {
//         GetNotificacoes();
//     }, []);

//     return (
//         <div className="containerPaiNotificacao">
//             <div className="modalNotificacao bg">
//                 {notificacao.length > 0 ? (
//                     notificacao.map((e, index) => { // Adicionei index para garantir uma chave única
//                         return (
//                             <div className="mainDivNotificacao">
//                                 <h2 className="tituloModal">{e.evento}</h2>
//                                 <h2 className="tituloModal">{e.dataCriacao}</h2>
//                                 <h2 className="tituloModal">{e.userId}</h2>
//                                 <h2 className="tituloModal">{e.userTag}</h2>
//                                 <img src={e.fotoPerfil} alt="" />
//                             </div>
//                             <Balao />
//                         );
//                     })
//                 ) : (
//                     <p>Você não possui notificações.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

import "./ModalNotificacao.css";
import Balao from "./Balao/Balao";
import { useState, useEffect } from "react";
import api from "../../config/api";

export default function Notificacao() {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const [notificacao, setNotificacao] = useState([]); // Inicialize com um array vazio

    const GetNotificacoes = async () => {
        try {
            const dados = await api.get(`/notification/${id}`, {
                headers: { authorization: `${token}` },
            });

            const req = await dados.data;

            setNotificacao(req);
            console.log(req);
        } catch (error) {
            window.alert(error);
        }
    };

    useEffect(() => {
        GetNotificacoes();
    }, []);

    return (
        <div className="containerPaiNotificacao">
            <div className="modalNotificacao bg">
                {notificacao.length > 0 ? (
                    notificacao.map((e, index) => { // Adicionei index para garantir uma chave única
                        return (
                            <div key={index} className="mainDivNotificacao">  {/* Chave única para cada elemento */}
                                <h2 className="tituloModal">{e.evento}</h2>
                                <h2 className="tituloModal">{e.dataCriacao}</h2>
                                <h2 className="tituloModal">{e.userId}</h2>
                                <h2 className="tituloModal">{e.userTag}</h2>
                                <img src={e.fotoPerfil} alt="" />
                                <Balao /> {/* Coloquei o Balao dentro do bloco de cada iteração */}
                            </div>
                        );
                    })
                ) : (
                    <p>Você não possui notificações.</p>
                )}
            </div>
        </div>
    );
}
