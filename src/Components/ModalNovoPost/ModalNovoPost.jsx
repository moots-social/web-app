import "./modalNovoPost.css";
import perfil from "../../assets/img/imagemPerfil.png";
import imagemEnviar from "../../assets/img/iconeImagemPost.png";
import { useState } from "react";
import { createContext } from "react";
import api from "../../config/api";



export const AbrirModal = createContext(() => {
  let modal = document.querySelector(".containerModalNovoPost");
  modal.style.display = "flex";
});

export default function ModalNovoPost() {

  const [post, setPost] = useState({ texto: '', listImagens: [] });
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null); 

  function FecharModal() {
    let botaoFechar = document.querySelector(".menu");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerModalNovoPost");
      modal.style.cssText = "display:none";
    });
  }

  const handleChange = (e) => {
    const selectedFile = e.target.files[0]; // Captura o primeiro arquivo selecionado
    if (selectedFile) {
      setFile(selectedFile); // Armazena o arquivo na variável 'file'

      // Cria uma URL para a imagem selecionada
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // Armazena a URL da imagem para exibição
      };
      reader.readAsDataURL(selectedFile); // Lê o arquivo como URL de dados
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!file) {
        alert("Por favor, selecione uma imagem para enviar.");
        return;
    }

    try {
        const token = localStorage.getItem('token');
        const containerName = "artifact-image-container";

        const formData = new FormData(); // Cria um novo objeto FormData
        formData.append("file", file); // Adiciona o arquivo ao FormData

        const config = {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como multipart
            },
        };

        const dado = await api.post(`/user/images?containerName=${containerName}`, formData, config); // Envia o FormData
        const req = await dado.data;

        if (req) {
            console.log(req);
            window.alert("Imagem upada com sucesso");
        }

    } catch (error) {
        console.log(error);
        alert('Tente novamente.');
    }
  }

  return (
    <div className="containerModalNovoPost">
      <div className="modalNovoPost bg">
        <div className="menu" onClick={FecharModal}>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="tituloModalNovo">
          <h1>Nova Publicação</h1>
          <hr className="listraTitulo"></hr>
        </div>
        <div className="containerPerfilNovoPost">
          <div className="perfilNovoPost">
            <img src={perfil} alt="perfil"></img>
            <p>Leonardo</p>
          </div>
          <div className="textoNovoPost">
            <input
              type="text"
              placeholder="No que você esta pensando..."
            ></input>
            {/* <img
              className="imagemEnviarPost"
              src={imagemEnviar}
              alt="enviarImagem"
            ></img> */}
            <label for="file-input">
              <img className="imagemEnviarPost" src={imagemEnviar} />
            </label>
            <input id="file-input" type="file" className="algo" accept="image/*" onChange={handleChange} />
            {preview && <img src={preview} alt="Prévia" className="previewImage" />}
          </div>
        </div>
        <div className="botaoPublicar">
          <button onClick={handleClick}>Publicar</button>
        </div>
      </div>
    </div>
  );
}
