import iconeImagemPost1 from '../../../assets/img/lapis.svg';
import '../configPerfil.css';
import { useState, useEffect } from 'react';
import api from '../../../config/api';
import { useUsuarioContext } from "../../../Context/useUsuarioContext";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function FotosPerfilECapaConfig() {

    const navigate = useNavigate();

    const [bio, setBio] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [curso, setCurso] = useState("");
    const [filePerfil, setFilePerfil] = useState();
    const [fileCapa, setFileCapa] = useState();
    const [perfilURL, setPerfilURL] = useState("");
    const [capaURL, setCapaURL] = useState("");
    const [previewPerfil, setPreviewPerfil] = useState(null);
    const [previewCapa, setPreviewCapa] = useState(null);
    const { usuario, setUsuario } = useUsuarioContext();

    const selectCurso = (event) => {
        const novoValor = event.target.value;
        setCurso(novoValor);
    };

    const selectBio = (event) => {
        const novoValor = event.target.value;
        setBio(novoValor);
    };

    const selectNomeCompleto = (event) => {
        const novoValor = event.target.value;
        setNomeCompleto(novoValor);
    };

    const handleChange = (e) => {
        const arquivoSelecionado = e.target.files[0];
        if (arquivoSelecionado) {
            setFilePerfil(arquivoSelecionado);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewPerfil(reader.result);
            };
            reader.readAsDataURL(arquivoSelecionado);
        }
    };

    const handleChangeCapa = (e) => {
        const arquivo = e.target.files[0];
        if (arquivo) {
            setFileCapa(arquivo);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewCapa(reader.result);
            };
            reader.readAsDataURL(arquivo);
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const containerName = "artifact-image-container";
            const id = localStorage.getItem("id");

            let novaPerfilURL = perfilURL || usuario.fotoPerfil;
            let novaCapaURL = capaURL || usuario.fotoCapa

            if (filePerfil || fileCapa) {
                const formData = new FormData();
                formData.append("file", filePerfil);
                
                const formData2 = new FormData();
                formData2.append("file2", fileCapa);

                const config = {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                };

                const dado = await api.post(`/user/images?containerName=${containerName}`, formData, config);
                const req = await dado.data;

                const dado2 = await api.post(`/user/images?containerName=${containerName}`, formData2, config);
                const req2 = await dado2.data;

                if (req || req2) {
                    window.alert("Imagem upada com sucesso");
                    novaPerfilURL = req.data;
                    novaCapaURL = req2.data;
                }
            }

            const atualizarUser = await api.put(`/user/atualizar/${id}`, {
                fotoPerfil: novaPerfilURL,
                fotoCapa: novaCapaURL,
                curso: curso || usuario.curso,
                descricao: bio || usuario.descricao,
                nomeCompleto: nomeCompleto,
            }, { headers: { Authorization: `${token}` } });

            const request = await atualizarUser.data;
            setUsuario(request);
            alert("Usuário alterado com sucesso");
            navigate(`/perfil/${id}`);
        } catch (error) {
            console.log(error);
            alert('Tente novamente.');
        }
    };

    return (
        <>
            <div className="fotosPerfilECapaConfig">
                <div className='divEditarCapa'>
                    {previewCapa ? (
                        <img src={previewCapa} alt="Prévia" className="imgCapaConfig" />
                    ) : (
                        <img src={usuario.fotoCapa} alt="" className='imgCapaConfig' />
                    )}
                    <label htmlFor='file-upload-capa' className='labelEditarCapa' style={{ cursor: 'pointer' }}>
                        <img src={iconeImagemPost1} alt="Ícone de imagem" className='iconeEditarImagemCapa' />
                        <input id='file-upload-capa' type='file' className='inputEnviarImagemCapa' accept='image/*' onChange={handleChangeCapa} />
                    </label>
                </div>
                <div className='divEditarPfp'>
                    {previewPerfil ? (
                        <img src={previewPerfil} alt="Prévia" className="imgPerfilConfig" />
                    ) : (
                        <img src={usuario.fotoPerfil} alt="" className='imgPerfilConfig' />
                    )}
                    <label htmlFor="file-upload-perfil" className="custom-file-upload" style={{ cursor: 'pointer' }}>
                        <img src={iconeImagemPost1} alt="Ícone de imagem" className='iconeEditarImagem' />
                        <input id='file-upload-perfil' type='file' className='inputEnviarImagemPerfil' accept="image/*" onChange={handleChange} />
                    </label>
                </div>
            </div>
            <div className="containerCursoEBio">
                <div className='editarInformacoesPerfil'>
                    <input type='text' className='editarNomePerfil' placeholder={usuario.nomeCompleto} onChange={selectNomeCompleto}></input>
                    <select id="cursos" onChange={selectCurso} className='selectCursos'>
                        <option value="REDES" data-imag>REDES</option>
                        <option value="DESENVOLVIMENTO">DESENVOLVIMENTO</option>
                        <option value="FIC">FIC</option>
                        <option value="MECANICA">MECANICA</option>
                        <option value="QUALIDADE">QUALIDADE</option>
                    </select>
                    <Link to='/modalEsqueci'>
                        <p style={{color: '#468B51', fontSize: '22px'}}>Redefinir Senha</p>
                    </Link>
                    <p onClick='' style={{color:'#FF2626', cursor:'pointer', fontSize: '22px'}}>Sair da Conta</p>
                    <p onClick='' style={{color:'#FF2626', cursor:'pointer', fontSize: '22px'}}>Excluir Conta</p>
                </div>
                <div className="escrevaBio">
                    <textarea className='inputBio' onChange={selectBio} placeholder={usuario.descricao}></textarea>
                </div>
            </div>
            <div className="btnEnviar" onClick={handleClick}>
                <button className='botaoConfirmarEditarPerfil'>Enviar</button>
            </div>
        </>
    );
}