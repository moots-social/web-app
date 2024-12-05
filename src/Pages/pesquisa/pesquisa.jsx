import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SideBar from "../../Components/SideBar/SideBar"
import './pesquisa.css'; 
import api from "../../config/api";
import UserPesquisa from "./User/userPesquisa";
import { buscarSeguidores, buscarSeguindos } from "../../Components/Seguindo/Seguindo";
import "../../Pages/Feed/feed.css";
import IconeLike from "../../assets/img/iconeCoracao.svg";
import IconeFavorito from "../../assets/img/iconeEstrela.svg";
import IconeComentario from "../../assets/img/iconeComentarios.svg";
import IconeCoracaoVermelho from "../../assets/img/coracaoVermelho.png";
import iconeEstrelaPreenchido from "../../assets/img/iconeEstrelaPreenchida.svg";
import { toast } from 'react-toastify';


export default function Pesquisa(){
    const { conteudo } = useParams()
    const [posts, setPosts] = useState([]);
    const [ pessoas, setPessoas ] = useState([])
    const [ seguidores, setSeguidores ] = useState()
    const [atualizarDados, setAtualizarDados] = useState(false);
    const [valorBotao, setValorBotao] = useState('publicacoes')

    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    
    function mostrarBarraUser () {
        setValorBotao('usuarios')
        let barra = document.querySelector(".barraUser");
        barra.style.display = "block";
        let barraInversa = document.querySelector(".barraPub") 
        barraInversa.style.display = "none"
    }


    function mostrarBarraPub () {
        setValorBotao('publicacoes')
        let barra = document.querySelector(".barraPub");
        barra.style.display = "block";
        let barraInversa = document.querySelector(".barraUser") 
        barraInversa.style.display = "none"
    }

    const getPessoas = async() => {
        try {
            const req = await api.get("/search/user", {
                params: { query: conteudo },
                headers: { Authorization: token }
            });
    
            const dados = req.data;
            const meusSeguidos = await buscarSeguindos(id, token);
            if(meusSeguidos){
                const pessoasComSigo = dados.map((pessoa) => {
                    const sigo = meusSeguidos.some(
                        (seguidor) => seguidor.id == pessoa.userId
                    );
                    return { ...pessoa, sigo }; 
                });
                setPessoas(pessoasComSigo); 
            } else {
                const pessoasComSigo = dados.map((pessoa) => {
                    return { ...pessoa, sigo: false }; 
                });
                setPessoas(pessoasComSigo); 
            }
            console.log(pessoas)
        } catch (e) {
            alert(e.response.data.error);
        }
    };

    const getSalvos = async() => {
        try {
            const req = await api.get(`/user/colecao-salvos/${id}`, {
            headers: {Authorization: token}  
            })

            const dado = await req.data;
            return dado;
        } catch (e) {
            alert(e.request.data.error)
        }
    }
    
    const getPublicacoes = async() => {
        try {
            const dados = await api.get(`/search/post`, {
                params: {query: conteudo},
                headers: {Authorization: token}
            })

            const req = await dados.data
            const salvos = await getSalvos();
            if (req) {
                // Atualiza os posts com a informação de 'deuLike'
                const postsComLikeStatus = req.map(post => {
                  const deuLike = post.likeUsers.includes(id);
                  return { ...post, deuLike };
                });
        
              const postsComFoiSalvo = postsComLikeStatus.map((post) => {
                const foiSalvo = salvos.some((salvo) => salvo.postId === post.postId);
                return { ...post, foiSalvo };
              });
        
                setPosts(postsComFoiSalvo)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const salvarPostColecao = async (postId) => {
        try {
        const dados = await api.post(
            `/post/salvar-post-colecao`,
            {},
            {
            headers: { authorization: token },
            params: { postId },
            }
        );

        setPosts((prevPosts) =>
            prevPosts.map((post) =>
            post.postId === postId
                ? { ...post, foiSalvo: true } 
                : post
            )
        );
        
        toast.success("Post salvo na coleção");
        } catch (error) {
        console.log(error.response?.data?.error || "Erro ao salvar post na coleção");
        toast.error("Erro ao salvar post na coleção");
        }
    };

    const curtirPost = async (postId, deuLike) => {
        try {
          const likeStatus = deuLike ? false : true;
          const dados = await api.put(
            `/post/dar-like`,
            {},
            {
              headers: { authorization: `${token}` },
              params: { postId, like: likeStatus },
            }
          );
    
          const req = dados.data;
          if (req) {
            setPosts((prevPosts) =>
              prevPosts.map((post) =>
                post.id === postId
                  ? { ...post, contadorLike: req.contadorLike, deuLike: likeStatus }
                  : post
              )
            );
          }
        } catch (error) {
          console.log(error.response?.data?.error || "Erro ao curtir post");
        }
    };

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
    
      const handleSeguir = async(idUser) => {
        const confirmar = window.confirm("Tem certeza que deseja seguir esse usuario?");
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

    useEffect(() => {      
        getPessoas();
        getPublicacoes();
    }, [atualizarDados, conteudo])

    return(
        <main className="principalPesquisa">
            <div className="sideBarPesquisa">
              <SideBar />
            </div>

            <div className="conteudo">
                <div className="botoesPesquisa">
                    <div className="btnLeft">
                        <button className="btnPesquisa" onClick={mostrarBarraPub}>Publicações</button>
                        <div className="rainbowBar bg barraPub"></div>
                    </div>

                    <div className="btnRight">
                        <button className="btnPesquisa" onClick={mostrarBarraUser}>Usuarios</button>
                        <div className="rainbowBar bg barraUser" ></div>
                    </div>
                </div>

                <div className="postOrUser">
                    {valorBotao === 'publicacoes' ? (
                        posts.length > 0 ? (
                        posts?.map((e, index) => (
                            <div className="perfilFeedContainerF" key={index}>
                                <div className="paiPfpFeedF">
                                <Link to="/perfil/:id">
                                    <img src={e.fotoPerfil} alt="" className="pfpfeedF" />
                                </Link>
                                <div className="perfilInfoF">
                                    <Link to="/perfil/:id">
                                    <p className="nomePerfilFeedF">{e.nomeCompleto}</p>
                                    <p className="arrobaFeedF">{e.tag}</p>
                                    </Link>
                                </div>
                                </div>
                                <div className="textoDescricaoF">
                                <p>{e.texto}</p>
                                </div>
                                {Array.isArray(e.listImagens) && e.listImagens.length > 0 && (
                                <div className="containerImagemFeedF">
                                    {e.listImagens.map((imagem, index) => (
                                    <img key={index} src={imagem} alt={`imagem-post-${index}`} className="imagemFeedF" />
                                    ))}
                                </div>
                                )}
                                <div className="reacoesF">
                                <div className="reactionsF">
                                    <div>
                                    {/* <img
                                        className="iconesReacaoF"
                                        src={e.deuLike ? IconeCoracaoVermelho : IconeLike}
                                        onClick={() => curtirPost(e.postId, e.deuLike)} 
                                        alt="Like"
                                    />
                                    <p className="contadorLikeF">{e.contadorLike}</p> */}
                                    </div>
                                    <img
                                    className="iconesReacaoF"
                                    src={e.foiSalvo ? iconeEstrelaPreenchido : IconeFavorito}
                                    onClick={() => salvarPostColecao(e.postId)}
                                    alt="Favoritar"
                                    />
                                </div>
                                <div className="commentsF" onClick={() => abrirModal(e.postId)}>
                                    <img className="iconesReacaoF" src={IconeComentario} alt="Comentários" />
                                </div>
                                </div>
                            </div>
                            ))
                        ) : (
                            <p>Nenhum post encontrado</p>
                        )
                    ) : (
                        pessoas.length > 0 ? (
                            pessoas.map((pessoa) => {
                                let descricao = '';
                                if (pessoa.sigo) {
                                    descricao = "Deixar de seguir";
                                } else if (Array.isArray(seguidores) && seguidores.some(seguidor => seguidor.id === pessoa.userId)) {
                                    descricao = "Seguir de volta";
                                } else {
                                    descricao = "Seguir";
                                }
                        
                                return (
                                    <UserPesquisa
                                        descricao={descricao} // Passando a descrição baseada nas condições
                                        foto={pessoa.fotoPerfil}
                                        nome={pessoa.nomeCompleto}
                                        key={pessoa.userId}
                                        id={pessoa.userId}
                                        onClick={() => {
                                            if(pessoa.sigo){
                                                handleDeixarSeguir(pessoa.userId)
                                              } else {
                                                handleSeguir(pessoa.userId)
                                              }
                                        }}
                                    />
                                );
                            })
                        ) : (
                            <p>Nenhum usuário encontrado</p>
                        )
                    )}
                </div>
            </div>

        </main>
    )
}