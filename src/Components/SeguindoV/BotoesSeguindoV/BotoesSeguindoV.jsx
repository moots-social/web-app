import './botoesSeguindoV.css'

function handleBotaoSeguindoV() {
  let a = document.querySelector('.botaoSeguindoV')
  a.classList.add('ativoSeguindoV')
  let seguidores = document.querySelector('.botaoSeguidoresV')
  seguidores.classList.remove('ativoSeguidoresV')
}
function handleBotaoSeguidoresV() {
  let e = document.querySelector('.botaoSeguidoresV')
  e.classList.add('ativoSeguidoresV')
  let seguindo = document.querySelector('.botaoSeguindoV')
  seguindo.classList.remove('ativoSeguindoV')
}

export default function BotoesSeguindoV({ onTrocarListaV }) {
  return (
    <div className='containerBotoesSeguindoV'>
      <div className='divBotoesSeguindoV'>
        <button
          className='botaoSeguindoV'
          onClick={() => {
            handleBotaoSeguindoV()
            onTrocarListaV('seguindoV')
          }}
        >
          Seguindo
        </button>
        <button
          className='botaoSeguidoresV'
          onClick={() => {
            handleBotaoSeguidoresV()
            onTrocarListaV('seguidoresV')
          }}
        >
          Seguidores
        </button>
      </div>
    </div>
  );
}
