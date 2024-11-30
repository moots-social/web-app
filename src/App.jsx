import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");

    if (id) {
      const currentPath = window.location.pathname;
  
      if (currentPath === "/" || currentPath === "/telaLogin" || currentPath === "/telaCadastro") {
        navigate("/feed");
      }
    } else {
      const currentPath = window.location.pathname;
      if (currentPath !== "/" && currentPath !== "/telaLogin" && currentPath !== "/telaCadastro") {
        navigate("/");
      }
    }
  }, [navigate]);

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;

