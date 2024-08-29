import './sidebar.css'
import pesquisa from '../../assets/img/iconePesquisa.png';
import home from '../../assets/img/iconeHome.png';
import mensagem from '../../assets/img/iconeMensagens.png';
import novoPost from '../../assets/img/iconeNovoPost.png';

export default function SideBar(){
    return(
        <div className="sideBar">
            <div className='containerTopo'>
                <div className='containerInput'>
                    <input type="text" name="" id="" />
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
            </div>
            <div className="perfil">

            </div>
        </div>
    );
}