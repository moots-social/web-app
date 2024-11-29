import "./modalNovoPost.css";
import imagemEnviar from "../../assets/img/iconeImagemPost.png";
import { useState } from "react";
import { createContext } from "react";
import api from "../../config/api";
import { useUsuarioContext } from "../../Context/useUsuarioContext";
import { ToastContainer, toast } from 'react-toastify'; // Importando o Toastify
import 'react-toastify/dist/ReactToastify.css'; // Estilo do Toastify

export const AbrirModal = createContext(() => {
  let modal = document.querySelector(".containerModalNovoPost");
  modal.style.display = "flex";
});

export default function ModalNovoPost() {
  const {usuario} = useUsuarioContext();
  const [imageUrl, setImageUrl] = useState();
  const [ textoDoPost,setTextoDoPost ] = useState("");
  const [ file, setFile ] = useState();
  const [preview, setPreview] = useState(null);
  const token = localStorage.getItem("token");

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

  const subirBlob = async() => {
    try {
      const containerName = "artifact-image-container";

      const formData = new FormData(); // Cria um novo objeto FormData
      formData.append("file", file); // Adiciona o arquivo ao FormData

      const config = {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data", // Define o tipo de conteúdo como multipart
        },
      };

      const dado = await api.post(
        `/user/images?containerName=${containerName}`,
        formData,
        config
      ); // Envia o FormData
      const req = await dado.data;

      if (req) {
        var imagemSalva = req.data;
        setImageUrl(imagemSalva)
        window.alert("Imagem upada com sucesso");
      } else {
        setImageUrl("");
      }

      let textoDoPostt = document.querySelector(".noQueVoce").value;
      setTextoDoPost(textoDoPostt);
    } catch (error) {
      toast.error("Tente novamente.");
      console.log(imageUrl + " esse é o erro");
      setImageUrl("");
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("botao clicado");
    console.log(imageUrl)

    if(imageUrl !== undefined || imageUrl !== null || imageUrl !== "") {
      subirBlob();
    }

    try {

        const postCriar = await api.post(
          "/post/criar",
          {
            texto: textoDoPost,
            listImagens: [imageUrl],
          },
          { headers: { authorization: `${token}` } }
        );
        
        if (postCriar){
          console.log(imageUrl + "essa é a img");
          setImageUrl("")
        }
      } catch (e) {
        console.log(e);
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
          <hr className="listraTitulo"></hr>
        </div>
        <div className="containerPerfilNovoPost">
          <div className="perfilNovoPost">
            <img src={usuario.fotoPerfil} alt="perfil"></img>
            <p>{usuario.nomeCompleto}</p>
          </div>
          <div className="textoNovoPost">
            <textarea
              className="noQueVoce"
              type="text"
              placeholder="No que você esta pensando..."
              wrap="hard"
              rows={5}
            ></textarea>
            {/* <img
              className="imagemEnviarPost"
              src={imagemEnviar}
              alt="enviarImagem"
            ></img> */}
            <label for="file-input">
              <img className="imagemEnviarPost" src={imagemEnviar} />
            </label>
            <input
              id="file-input"
              type="file"
              className="algo"
              accept="image/*"
              onChange={handleChange}
            />
            {preview && (
              <img src={preview} alt="Prévia" className="previewImage" />
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
