// import "./ModalNotificacao.css";
// import Balao from "./Balao/Balao";
// import { useState, useEffect } from "react";
// import api from "../../config/api";
// import "./Balao/balao.css";
// import fechar from "../../assets/img/letra-x.png";
// import user from "../../assets/img/User.png";

// import { useModalNot } from "../../Context/modalContextNot";



// export default function Notificacao() {

//   const { isOpen, fecharModalNot } = useModalNot();


  
//   const token = localStorage.getItem("token");
//   const id = localStorage.getItem("id");
//   const [notificacao, setNotificacao] = useState([]); // Inicialize com um array vazio

//   const GetNotificacoes = async () => {
//     try {
//       const dados = await api.get(`/notification/${id}`, {
//         headers: { authorization: `${token}` },
//       });

//       const req = await dados.data;

//       setNotificacao(req);
//       console.log(req);
//     } catch (error) {
//       window.alert(error);
//     }
//   };

//   useEffect(() => {
//     GetNotificacoes();
//   }, [isOpen]);

//   if(!isOpen){
//     return null;
//   } else{
//     return (
//       <div className="containerPaiNotificacao">
//         <div className="modalNotificacao bg">
//         <div className="menun" onClick={fecharModalNot}>
//             <span className="barn"></span>
//             <span className="barn"></span>
//           </div>
//           {notificacao.length > 0 ? (
//             notificacao.map((e, index) => {
//               // Adicionei index para garantir uma chave única
//               return (
//                 <div key={index} className="mainDivNotificacao">
//                   {" "}
//                   <div className="balaoNotificacao">
//                     <div className="balao">
//                       <div className="botaoFechar">
//                         <img src={fechar} className="fecharX" />
//                       </div>
//                       <div className="imagemUser">
//                         <img src={e.fotoPerfil} className="fotoNotificacao" />
//                         <div className="textoUser">
//                           <h1 className="txtNotificacao">
//                             {e.userTag + " " + e.evento + " o seu post"}
//                           </h1>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p>Você não possui notificações.</p>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

import "./ModalNotificacao.css";
import Balao from "./Balao/Balao";
import { useState, useEffect } from "react";
import api from "../../config/api";
import "./Balao/balao.css";
import fechar from "../../assets/img/letra-x.png";
import user from "../../assets/img/User.png";
import { useModalNot } from "../../Context/modalContextNot"; // Verifique se o caminho está correto

export default function Notificacao() {
  const { isOpen, fecharModalNot } = useModalNot(); // Usando o contexto corretamente

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [notificacao, setNotificacao] = useState([]); // Inicialize com um array vazio
  console.log(id)
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
    if (isOpen) { // Carregar notificações somente se a modal estiver aberta
      GetNotificacoes();
    }
  }, [isOpen]);

  if (isOpen == false) {
    return null; // Se a modal não estiver aberta, não renderize nada
  } else {
    return (
      <div className="containerPaiNotificacao">
        <div className="modalNotificacao bg">
          <div className="menun" onClick={fecharModalNot}>
            <span className="barn"></span>
            <span className="barn"></span>
          </div>
          {notificacao.length > 0 ? (
            notificacao.map((e, index) => {
              return (
                <div key={index} className="mainDivNotificacao">
                  <div className="balaoNotificacao">
                    <div className="balao">
                      <div className="botaoFechar">
                        <img src={fechar} className="fecharX" />
                      </div>
                      <div className="imagemUser">
                        <img src={e.fotoPerfil} className="fotoNotificacao" />
                        <div className="textoUser">
                          <h1 className="txtNotificacao">
                            {e.userTag + " " + e.evento + " o seu post"}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
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
}

