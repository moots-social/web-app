import './botoesSeguindo.css'

export default function BotoesSeguindo(){
    
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

    return(
        <div className='containerBotoesSeguindo'>
            <div className='divBotoesSeguindo'>
                <button className='botaoSeguindo' onClick={handleBotaoSeguindo}>Seguindo</button>
                <button className='botaoSeguidores' onClick={handleBotaoSeguidores}>Seguidores</button>
            </div>
        </div>
    )
}