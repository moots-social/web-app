import './seguindoV.css';
import ListaSeguindoV from './ListaPessoasSeguindoV/ListaSeguindoV';
import BotoesSeguindoV from './BotoesSeguindoV/BotoesSeguindoV';
import IconeFechar from '../../assets/img/fechar.svg';
import { createContext, useState, useEffect } from 'react';
import api from '../../config/api';
import { useParams } from 'react-router-dom';

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
  const idUserr = localStorage.getItem("id");
  const {id} = useParams()

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

  useEffect(() => {
    let isMounted = true; 
  
    const carregarDados = async () => {
      try {
        const seguindosDele = await buscarSeguindosV(id, token);
        const seguidoresDele = await buscarSeguidoresV(id, token);
  
        const meusSeguindos = await buscarSeguidoresV(idUserr, token);
        const meusSeguidores = await buscarSeguindosV(idUserr, token)
  
        if (seguindosDele.length > 0 && meusSeguindos.length > 0) {
          const seguindosComSigo = seguindosDele.map((seguidor) => {
            const sigo = meusSeguindos.some(
              (seguidorSeguindo) => seguidorSeguindo.id == seguidor.id
            );
            return { ...seguidor, sigo };
          });
  
          if (isMounted) {
            setSeguindos(seguindosComSigo);
          }
  
        } else {
          const seguindosComSigo = seguindosDele.map((seguidor) => {
            return { ...seguidor, sigo: false };
          });
  
          if (isMounted) {
            setSeguindos(seguindosComSigo);
          }
        }
  
        if (seguidoresDele.length > 0 && meusSeguidores.length > 0) {
          const seguidoresComSigo = seguidoresDele.map((seguidores) => {
            const sigo = meusSeguidores.some(
              (seguidoresSeguindo) => seguidoresSeguindo.id == seguidores.id
            );
            return { ...seguidores, sigo };
          });
  
          if (isMounted) {
            setSeguidores(seguidoresComSigo);
          }
  
        } else {
          const seguidoresComSigo = seguidoresDele.map((seguidor) => {
            return { ...seguidor, sigo: false };
          });
  
          if (isMounted) {
            setSeguidores(seguidoresComSigo);
          }
        }
      } catch (e) {
        console.error("Erro ao carregar dados:", e);
        if (isMounted) {
          setSeguidores([]);
          setSeguindos([]);
        }
      }
    };
  
    carregarDados();
    
    return () => {
      isMounted = false; 
    };
  }, [atualizarDados]); 
  

  const handleDeixarSeguirV = async(idUser) => {
    const confirmar = window.confirm("Tem certeza que deseja parar de seguir esse usuário?");
    if(confirmar) {
      try {
        await api.put("/user/seguir", {}, {
          headers: {Authorization: token},
          params: {id1: idUserr, id2: idUser, follow: false}
        });
        setAtualizarDados(prev => !prev);
      } catch (e) {
        alert(e.response?.data?.message || "Erro ao tentar deixar de seguir.");
      }
    }
  }

  const handleSeguirDeVoltaV = async(idUser) => {
    const confirmar = window.confirm("Tem certeza que deseja seguir esse usuario de volta?");
    if(confirmar) {
      try {
        await api.put("/user/seguir", {}, {
          headers: {Authorization: token},
          params: {id1: idUserr, id2: idUser, follow: true}
        });
        setAtualizarDados(prev => !prev);
      } catch (e) {
        alert(e.response?.data?.message || "Erro ao tentar seguir de volta.");
      }
    }
  }
  
  return (
    <div className='containerSeguindoV'>
      <div className="menu" onClick={FecharModalV}>
        <img src={IconeFechar} className='iconeFecharSeguindoV' alt="Fechar" />
      </div>
      <div className='divBotoesSeguindoV'>
        <BotoesSeguindoV onTrocarListaV={handleTrocarListaV} />
      </div>
      <div className='listaSeguindoV'>
      {mostrarLista === 'seguindoV' ? (
        Array.isArray(seguindos) && seguindos.length > 0 ? (
          seguindos.map((s) => (
            <ListaSeguindoV
              key={s.id} 
              id={s.id}
              descricao={
                s.id == idUserr 
                  ? "Seu perfil"  // Se for o próprio usuário, exibe uma mensagem diferente
                  : s.sigo 
                  ? "deixar de seguir" 
                  : "seguir"
              }
              nome={s.nomeCompleto} 
              tag={s.tag} 
              imagem={s.fotoPerfil} 
              onClick={() => {
                // Verifica se o id da pessoa é igual ao do usuário logado
                if (s.id !== idUserr) {
                  if (s.sigo) {
                    handleDeixarSeguirV(s.id);
                  } else {
                    handleSeguirDeVoltaV(s.id);
                  }
                }
              }}

            />
          ))
        ) : (
          <p>Este usuario não segue ninguém</p>
        )
      ) : (
        Array.isArray(seguidores) && seguidores.length > 0 ? (
          seguidores.map((s) => (
            <ListaSeguindoV 
              key={s.id}
              id={s.id}
              descricao={
                s.id == idUserr 
                  ? "seu perfil"  // Se for o próprio usuário, exibe uma mensagem diferente
                  : s.sigo 
                  ? "deixar de seguir" 
                  : "seguir de volta"
              }
              nome={s.nomeCompleto}
              tag={s.tag}
              imagem={s.fotoPerfil}
              onClick={() => {
                // Verifica se o id da pessoa é igual ao do usuário logado
                if (s.id !== idUserr) {
                  if (s.sigo) {
                    handleDeixarSeguirV(s.id);
                  } else {
                    handleSeguirDeVoltaV(s.id);
                  }
                }
              }}
            />
          ))
        ) : (
          <p>Este usuario não tem seguidores</p>
        )
      )}
      </div>
    </div>
  );
}
