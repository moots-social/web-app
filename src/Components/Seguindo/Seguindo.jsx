import './seguindo.css';
import ListaSeguindo from './ListaPessoasSeguindo/ListaSeguindo';
import BotoesSeguindo from './BotoesSeguindoSeguidores/BotoesSeguindo';
import IconeFechar from '../../assets/img/fechar.svg';
import { createContext, useState, useEffect } from 'react';
import api from '../../config/api';

export const AbrirModalSeguindo = createContext(() => {
  let modal = document.querySelector(".containerSeguindo");
  modal.style.display = "flex";
});

export const buscarSeguindos = async (id, token) => {
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

export const buscarSeguidores = async (id, token) => {
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

export default function Seguindo() {
  const [mostrarLista, setMostrarLista] = useState('seguindo');
  const [seguindos, setSeguindos] = useState([]);
  const [seguidores, setSeguidores] = useState([]);
  const [atualizarDados, setAtualizarDados] = useState(false);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const handleTrocarLista = (tipo) => {
    setMostrarLista(tipo); // Atualiza o estado para 'seguindo' ou 'seguidores'
  };

  function FecharModal() {
    let botaoFechar = document.querySelector(".menu");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerSeguindo");
      modal.style.cssText = "display:none";
    });
  }

  useEffect(() => {
    let isMounted = true; // Flag para verificar se o componente está montado

    const carregarDados = async () => {
      try {
        const meusSeguidos = await buscarSeguindos(id, token);
        const meusSeguidores = await buscarSeguidores(id, token);

        if (meusSeguidos.length > 0) {
          const seguidoresComSigo = meusSeguidores.map((seguidor) => {
            const sigo = meusSeguidos.some(
              (seguidorSeguindo) => seguidorSeguindo.id === seguidor.id
            );
            return { ...seguidor, sigo };
          });

          if (isMounted) {
            setSeguidores(seguidoresComSigo);
            setSeguindos(meusSeguidos);
          }
        } else {
          const seguidoresComSigo = meusSeguidores.map((seguidor) => {
            return { ...seguidor, sigo: false };
          });
          if (isMounted) {
            setSeguidores(seguidoresComSigo);
            setSeguindos(meusSeguidos);
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

  const handleDeixarSeguir = async(idUser) => {
    const confirmar = window.confirm("Tem certeza que deseja parar de seguir esse usuário?");
    if(confirmar) {
      try {
        await api.put("/user/seguir", {}, {
          headers: {Authorization: token},
          params: {id1: id, id2: idUser, follow: false}
        });
        setAtualizarDados(prev => !prev);
      } catch (e) {
        alert(e.response?.data?.message || "Erro ao tentar deixar de seguir.");
      }
    }
  }

  const handleSeguirDeVolta = async(idUser) => {
    const confirmar = window.confirm("Tem certeza que deseja seguir esse usuario de volta?");
    if(confirmar) {
      try {
        await api.put("/user/seguir", {}, {
          headers: {Authorization: token},
          params: {id1: id, id2: idUser, follow: true}
        });
        setAtualizarDados(prev => !prev);
      } catch (e) {
        alert(e.response?.data?.message || "Erro ao tentar seguir de volta.");
      }
    }
  }

  return (
    <div className='containerSeguindo'>
      <div className="menu" onClick={FecharModal}>
        <img src={IconeFechar} className='iconeFecharSeguindo' alt="Fechar" />
      </div>
      <div className='divBotoesSeguindo'>
        <BotoesSeguindo onTrocarLista={handleTrocarLista} />
      </div>
      <div className='listaSeguindo'>
      {mostrarLista === 'seguindo' ? (
        Array.isArray(seguindos) && seguindos.length > 0 ? (
          seguindos.map((s) => (
            <ListaSeguindo 
              key={s.id} 
              id={s.id}
              descricao="deixar de seguir" 
              nome={s.nomeCompleto} 
              tag={s.tag} 
              imagem={s.fotoPerfil} 
              onClick={() => handleDeixarSeguir(s.id)} 
            />
          ))
        ) : (
          <p>Você não segue ninguém</p>
        )
      ) : (
        Array.isArray(seguidores) && seguidores.length > 0 ? (
          seguidores.map((s) => (
            <ListaSeguindo 
              key={s.id}
              id={s.id}
              descricao={s.sigo ? "deixar de seguir" : "seguir de volta"}
              nome={s.nomeCompleto}
              tag={s.tag}
              imagem={s.fotoPerfil}
              onClick={() => {
                if(s.sigo){
                  handleDeixarSeguir(s.id)
                } else {
                  handleSeguirDeVolta(s.id)
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
