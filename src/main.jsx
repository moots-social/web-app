import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

// importar as paginas
import Principal from "./Pages/Principal/Principal";
import TelaLogin from "./Pages/telaLogin/TelaLogin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="telaLogin" element={<TelaLogin />} />
          <Route path="/" element={<Principal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
