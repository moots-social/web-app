import SideBar from "../../Components/SideBar/SideBar";
import "./salvos.css";

function Salvos() {
  return (
    <div className="bg pai">
      <SideBar />
      <div className="divMain">
        <div className="titulo">
          <div className="title">
            <h2 className="colecoes">Coleções</h2>
          </div>
        </div>
        <div className="divNadaSalvo">
          {" "}
          <h2 className="nadaSalvo">Você ainda não possui nada salvo.</h2>{" "}
        </div>
      </div>
    </div>
  );
}

export default Salvos;
