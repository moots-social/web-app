import "./modalNovoPost.css";
import imagemEnviar from "../../assets/img/iconeImagemPost.png";
import { useState } from "react";
import { createContext } from "react";
import api from "../../config/api";
import { useUsuarioContext } from "../../Context/useUsuarioContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AbrirModal = createContext(() => {
  let modal = document.querySelector(".containerModalNovoPost");
  modal.style.display = "flex";
});

export default function ModalNovoPost() {
  const { usuario } = useUsuarioContext();
  const [textoDoPost, setTextoDoPost] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const token = localStorage.getItem("token");

  function FecharModal() {
    let botaoFechar = document.querySelector(".menu");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerModalNovoPost");
      modal.style.cssText = "display:none";
    });
  }

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    if (selectedFiles.length > 4) {
      toast.error("Você pode selecionar no máximo 4 imagens!");
      return;
    }
  
    setFiles(selectedFiles);
  
    
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    
    setPreviews(newPreviews); 
  };  

  const subirBlob = async () => {
    const uploadedImageUrls = [];  
  
    try {
      const containerName = "artifact-image-container";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };
  
      
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append(`file`, files[i]);  
  
       
        const response = await api.post(
          `/user/images?containerName=${containerName}`,
          formData,
          config
        );
  
        
        if (response && response.data && response.data.data) {
          const imagemUrl = response.data.data; 
          uploadedImageUrls.push(imagemUrl);  
        } else {
          throw new Error("Falha ao obter a URL da imagem.");
        }
      }
  
      toast.success("Imagens enviadas com sucesso!");
      return uploadedImageUrls;  
    } catch (error) {
      toast.error("Erro ao enviar as imagens.");
      console.error(error);
      return [];
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let uploadedImageUrls = [];

    if (files.length > 0) {
      uploadedImageUrls = await subirBlob();
      console.log(uploadedImageUrls)
    }

    try {
      const postCriar = await api.post(
        "/post/criar",
        {
          texto: textoDoPost,
          listImagens: uploadedImageUrls,
        },
        { headers: { authorization: `${token}` } }
      );

      if (postCriar) {
        toast.success("Post criado com sucesso!");
        setTextoDoPost("");
        setPreviews([]);
        setFiles([]);
        window.location.reload()
      }
    } catch (e) {
      toast.error("Erro ao criar o post.");
      console.error(e);
    }
  };

  return (
    <div className="containerModalNovoPost">
      <div className="modalNovoPost bg">
        <div className="menu" onClick={FecharModal}>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="tituloModalNovo">
          <h1>Nova Publicação</h1>
          <hr className="listraTitulo" />
        </div>
        <div className="containerPerfilNovoPost">
          <div className="perfilNovoPost">
            <img src={usuario.fotoPerfil} alt="perfil" />
            <p>{usuario.nomeCompleto}</p>
          </div>
          <div className="textoNovoPost">
            <textarea
              className="noQueVoce"
              placeholder="No que você está pensando..."
              rows={5}
              onChange={(e) => setTextoDoPost(e.target.value)}
            ></textarea>
            <label htmlFor="file-input">
              <img className="imagemEnviarPost" src={imagemEnviar} alt="enviarImagem" />
            </label>
            <input
              id="file-input"
              type="file"
              className="algo"
              accept="image/*"
              onChange={handleChange}
              multiple
            />
            {previews.length > 0 && (
              <div className="previewContainer">
                {previews.map((preview, index) => (
                  <img key={index} src={preview} className="previewImage" />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="botaoPublicar">
          <button onClick={handleClick}>Publicar</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
