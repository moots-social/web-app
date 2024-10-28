import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

// importar as paginas
import Principal from "./Pages/Principal/Principal";
import TelaSalvos from "./Pages/Salvos/Salvos";
import TelaLogin from "./Pages/telaLogin/TelaLogin";
import TelaCadastro from "./Pages/telaCadastro/TelaCadastro";
import TelaChat from "./Pages/telaChat/TelaChat";
import TelaPerfil from "./Pages/TelaPerfil/TelaPerfil"
import TelaFeed from "./Pages/Feed/Feed";
import ModalEsqueci from "./Components/ModalEsqueciSenha/ModalEsqueciSenha";
import ConfigPerfil from "./Pages/ConfigPerfil/ConfigPerfil"
import BottomBar from "./Components/BottomBar/BottomBar";
import ModalNovo from "./Components/ModalNovoPost/ModalNovoPost";
import TelaPerfilVisitante from "./Pages/TelaPerfilVisitante/TelaPerfilVisitante";
import { ProviderUsuarioContext } from "./Context/UsuarioContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderUsuarioContext>
        <Routes>
            <Route path="/" element={<App />}>
              <Route path="telaLogin" element={<TelaLogin />} />
              <Route path="/" element={<Principal />} />
              <Route path="telaCadastro" element={<TelaCadastro />} />
              <Route path="salvos" element={<TelaSalvos />} />
              <Route path="telaChat" element={<TelaChat />} />
              <Route path="perfil/:id" element={<TelaPerfil />} />
              <Route path="feed" element={<TelaFeed />} />
              <Route path="modalEsqueci" element={<ModalEsqueci />} />
              <Route path="configPerfil" element={<ConfigPerfil />} />
              <Route path="bottomBar" element={<BottomBar />} />
              <Route path="modalNovo" element={<ModalNovo />} />
              <Route path="perfilVisitante" element={<TelaPerfilVisitante />} />
            </Route>
        </Routes>
      </ProviderUsuarioContext>
    </BrowserRouter>
  </StrictMode>
);