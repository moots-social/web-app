import './seguindoV.css';
import ListaSeguindoV from './ListaPessoasSeguindoV/ListaSeguindoV';
import BotoesSeguindoV from './BotoesSeguindoV/BotoesSeguindoV';
import IconeFechar from '../../assets/img/fechar.svg';
import { createContext, useState, useEffect } from 'react';
import api from '../../config/api';

export const AbrirModalSeguindoV = createContext(() => {
  let modal = document.querySelector(".containerSeguindoV");
  modal.style.display = "flex";
});

export const buscarSeguindosV = async (id, token) => {
  try {
    const req = await api.get(`/user/buscar-quem-segue/${id}`, {
      headers: { Authorization: token },
    });
    return req.data;
  } catch (e) {
    console.error("Erro ao buscar seguidos:", e);
    return []; 
  }
};

export const buscarSeguidoresV = async (id, token) => {
  try {
    const req = await api.get(`/user/buscar-seguidores/${id}`, {
      headers: { Authorization: token },
    });
    return req.data;
  } catch (e) {
    console.error("Erro ao buscar seguidores:", e);
    return []; 
  }
};

export default function SeguindoV() {
  const [mostrarLista, setMostrarLista] = useState('seguindoV');
  const [seguindos, setSeguindos] = useState([]);
  const [seguidores, setSeguidores] = useState([]);
  const [atualizarDados, setAtualizarDados] = useState(false);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const handleTrocarListaV = (tipo) => {
    setMostrarLista(tipo); // Atualiza o estado para 'seguindo' ou 'seguidores'
  };

  function FecharModalV() {
    let botaoFechar = document.querySelector(".menu");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerSeguindoV");
      modal.style.cssText = "display:none";
    });
  }

//   useEffect(() => {
//     let isMounted = true; // Flag para verificar se o componente está montado

//     const carregarDados = async () => {
//       try {
//         const meusSeguidos = await buscarSeguindosV(id, token);
//         const meusSeguidores = await buscarSeguidoresV(id, token);

//         if (meusSeguidos.length > 0) {
//           const seguidoresComSigo = meusSeguidores.map((seguidor) => {
//             const sigo = meusSeguidos.some(
//               (seguidorSeguindo) => seguidorSeguindo.id === seguidor.id
//             );
//             return { ...seguidor, sigo };
//           });

//           if (isMounted) {
//             setSeguidores(seguidoresComSigo);
//             setSeguindos(meusSeguidos);
//           }
//         } else {
//           const seguidoresComSigo = meusSeguidores.map((seguidor) => {
//             return { ...seguidor, sigo: false };
//           });
//           if (isMounted) {
//             setSeguidores(seguidoresComSigo);
//             setSeguindos(meusSeguidos);
//           }
//         } 
//       } catch (e) {
//         console.error("Erro ao carregar dados:", e);
//         if (isMounted) {
//           setSeguidores([]);
//           setSeguindos([]);
//         }
//       }
//     };

//     carregarDados();
//     return () => {
//       isMounted = false; 
//     };
//   }, [atualizarDados]);

//   const handleDeixarSeguirV = async(idUser) => {
//     const confirmar = window.confirm("Tem certeza que deseja parar de seguir esse usuário?");
//     if(confirmar) {
//       try {
//         await api.put("/user/seguir", {}, {
//           headers: {Authorization: token},
//           params: {id1: id, id2: idUser, follow: false}
//         });
//         setAtualizarDados(prev => !prev);
//       } catch (e) {
//         alert(e.response?.data?.message || "Erro ao tentar deixar de seguir.");
//       }
//     }
//   }

//   const handleSeguirDeVoltaV = async(idUser) => {
//     const confirmar = window.confirm("Tem certeza que deseja seguir esse usuario de volta?");
//     if(confirmar) {
//       try {
//         await api.put("/user/seguir", {}, {
//           headers: {Authorization: token},
//           params: {id1: id, id2: idUser, follow: true}
//         });
//         setAtualizarDados(prev => !prev);
//       } catch (e) {
//         alert(e.response?.data?.message || "Erro ao tentar seguir de volta.");
//       }
//     }
//   }

  return (
    <div className='containerSeguindoV'>
      <div className="menu" onClick={FecharModalV}>
        <img src={IconeFechar} className='iconeFecharSeguindoV' alt="Fechar" />
      </div>
      <div className='divBotoesSeguindoV'>
        <BotoesSeguindoV onTrocarLista={handleTrocarListaV} />
      </div>
      <div className='listaSeguindoV'>
      {mostrarLista === 'seguindoV' ? (
        Array.isArray(seguindos) && seguindos.length > 0 ? (
          seguindos.map((s) => (
            <ListaSeguindoV
              key={''} 
              id={'1'}
              descricao="deixar de seguir" 
              nome={'nome'} 
              tag={'nome'} 
              imagem={''} 
              onClick={() => handleDeixarSeguirV('')} 
            />
          ))
        ) : (
          <p>Você não segue ninguém</p>
        )
      ) : (
        Array.isArray(seguidores) && seguidores.length > 0 ? (
          seguidores.map((s) => (
            <ListaSeguindoV 
              key={''}
              id={''}
              descricao={s.sigo ? "deixar de seguir" : "seguir de volta"}
              nome={'nome'}
              tag={'tag'}
              imagem={''}
              onClick={() => {
                if(s.sigo){
                  handleDeixarSeguirV('')
                } else {
                  handleSeguirDeVoltaV('')
                }
              }}
            />
          ))
        ) : (
          <p>Você não tem seguidores</p>
        )
      )}
      </div>
    </div>
  );
}
