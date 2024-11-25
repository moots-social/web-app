import './ModalConfirmar.css'


export const AbrirModal = createContext(() => {
    let modal = document.querySelector(".containerModalNovoPost");
    modal.style.display = "flex";
  });

  function FecharModal() {
    let botaoFechar = document.querySelector(".menu");
    botaoFechar.addEventListener("click", () => {
      let modal = document.querySelector(".containerModalNovoPost");
      modal.style.cssText = "display:none";
    });
  }

export default function ConfirmarExcluirConta(){
    return(
        <>
            <button style={{backgroundColor: '#468B51', borderRadius: '10px', width: '50px', height: '20px', color: '#ffffff'}}>Cancelar</button>
            <button style={{backgroundColor: '#FF2626', borderRadius: '10px', width: '50px', height: '20px', color: '#ffffff'}}>Confirmar</button>
        </>
    )
}