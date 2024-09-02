import './sidebar.css'
import pesquisa from '../../assets/img/iconePesquisa.png';
import home from '../../assets/img/iconeHome.png';
import mensagem from '../../assets/img/iconeMensagens.png';
import novoPost from '../../assets/img/iconeNovoPost.png';
import coracao from '../../assets/img/iconeCoracao.png';
import perfil from '../../assets/img/iconePerfil.png';

export default function SideBar(){
    return(
        <div className="sideBar">
            <div className='containerTopo'>
                <div className='containerInput'>
                    <input className='pesquisa' type="text" name="" id="" />
                </div>
                <div className='containerIcone pesquisaIcone'>
                    <div className='icone'>
                        <img src={pesquisa} alt="icone-home" />
                    </div>
                </div>
                <div className='containerIcone'>
                    <div className='icone'>
                        <img src={home} alt="icone-home" />
                    </div>
                    <div className='tituloIcone'>
                        <p>Página Inicial</p>
                    </div>
                </div>
                <div className='containerIcone'>
                    <div className='icone'>
                        <img src={mensagem} alt="icone-mensagem" />
                    </div>
                    <div className='tituloIcone'>
                        <p>Mensagens</p>
                    </div>
                </div>
                <div className='containerIcone'>
                    <div className='icone'>
                        <img src={novoPost} alt="icone-novo-post    " />
                    </div>
                    <div className='tituloIcone'>
                        <p>Novo Post</p>
                    </div>
                </div>
                <div className='containerIcone'>
                    <div className='icone'>
                        <img src={coracao} alt="icone coracao   " />
                    </div>
                    <div className='tituloIcone'>
                        <p>Coleções</p>
                    </div>
                </div>
            </div>
            <div className="perfil">
                <div className='imagemPerfil'>
                    <img src={perfil} alt="" />
                </div>
                <div className='nomeUsuario'>
                    <p>Nome do Usuário</p>
                </div>
            </div>
        </div>
    );
}