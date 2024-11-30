import './botoesSeguindo.css'

function handleBotaoSeguindo() {
  let a = document.querySelector('.botaoSeguindo')
  a.classList.add('ativoSeguindo')
  let seguidores = document.querySelector('.botaoSeguidores')
  seguidores.classList.remove('ativoSeguidores')
}
function handleBotaoSeguidores() {
  let e = document.querySelector('.botaoSeguidores')
  e.classList.add('ativoSeguidores')
  let seguindo = document.querySelector('.botaoSeguindo')
  seguindo.classList.remove('ativoSeguindo')
}

export default function BotoesSeguindo({ onTrocarLista }) {
  return (
    <div className='containerBotoesSeguindo'>
      <div className='divBotoesSeguindo'>
        <button
          className='botaoSeguindo'
          onClick={() => {
            handleBotaoSeguindo()
            onTrocarLista('seguindo')
          }}
        >
          Seguindo
        </button>
        <button
          className='botaoSeguidores'
          onClick={() => {
            handleBotaoSeguidores()
            onTrocarLista('seguidores')
          }}
        >
          Seguidores
        </button>
      </div>
    </div>
  );
}
