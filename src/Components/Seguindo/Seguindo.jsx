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

    const buscarSeguindos = async () => {
      try {
        const req = await api.get(`/user/buscar-quem-segue/${id}`, {
          headers: { Authorization: token },
        });
        return req.data;
      } catch (e) {
        console.log(e);
      }
    };

    const buscarSeguidores = async () => {
      try {
        const req = await api.get(`/user/buscar-seguidores/${id}`, {
          headers: { Authorization: token },
        });
        return req.data;
      } catch (e) {
        console.log(e);
      }
    };

    const carregarDados = async () => {
      const meusSeguidos = await buscarSeguindos();
      const meusSeguidores = await buscarSeguidores();

      const seguidoresComSigo = meusSeguidores.map((seguidor) => {
        const sigo = meusSeguidos.some(
          (seguidorSeguindo) => seguidorSeguindo.id === seguidor.id
        );
        return { ...seguidor, sigo };
      });

      if (isMounted) { // Verifica se o componente ainda está montado
        setSeguidores(seguidoresComSigo);
        setSeguindos(meusSeguidos);
      }
    };

    carregarDados();
    return () => {
      isMounted = false; // Marca como desmontado quando o componente for desmontado
    };
  }, [atualizarDados]);

  const handleDeixarSeguir = async(idUser) => {
    const confirmar = window.confirm("Tem certeza que deseja parar de seguir esse usuário?");
    if(confirmar){
      try {
        const req = await api.put("/user/seguir", {}, {
          headers: {Authorization: token},
          params: {id1: id, id2: idUser, follow: false}
        })
        
        setAtualizarDados(prev => !prev);
      } catch (e) {
        alert(e.response.data.message)
      }  
    } else {
      return
    }
  }

  const handleSeguirDeVolta = async(idUser) => {
    const confirmar = window.confirm("Tem certeza que deseja seguir esse usuario de volta?");
    if(confirmar){
      try {
        const req = await api.put("/user/seguir", {}, {
          headers: {Authorization: token},
          params: {id1: id, id2: idUser, follow: true}
        })
        
        setAtualizarDados(prev => !prev);
      } catch (e) {
        alert(e.response.data.message)
      }  
    } else {
      return
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
        seguindos.length > 0 ? (
          seguindos.map((s) => (
            <ListaSeguindo 
              key={s.id} 
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
        seguidores.length > 0 ? (
          seguidores.map((s) => (
            <ListaSeguindo 
              key={s.id}
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
