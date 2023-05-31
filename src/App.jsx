import { useState,useEffect } from 'react'
import './App.css'
import Jogador from './components/Jogador';

function App() {
  const [jogadores, setJogadores] = useState();
  const [pagina, setPagina]= useState(1);

  useEffect(()=> {
    fetch('https://api.cartola.globo.com/atletas/pontuados/'+pagina).then(async(jogadores) => {
      let data = await jogadores.json()

      var atletas = Object.values(data.atletas);
      var clubes = Object.values(data.clubes);
      var posicoes = Object.values(data.posicoes);
      
      var cards = atletas.map(atleta =>{
        return {
          apelido: atleta.apelido,
          pontuacao: atleta.pontuacao,
          foto: atleta.foto,
          escudo: clubes.filter(clube => clube.id == atleta.clube_id)[0].escudos['60x60'],
          abreviacao:  clubes.filter(clube => clube.id == atleta.clube_id)[0].abreviacao,
          posicao: posicoes[atleta.posicao_id-1].nome,
        }
      })
      setJogadores(cards)
    }).catch(error => console.log(error))
    console.log(pagina)
  }, [pagina])


  return (
    <div>
    
      <button className='button-left' onClick={()=>setPagina((pagina > 2) ? pagina-1 : 1)}>‹</button>
      <button className='button-right' onClick={()=>setPagina((pagina < 8) ? pagina+1 : 8)}>›</button>

      <div className='jogadores'>
        <div className='cards'>
          {
            jogadores?.map((atleta, i) =>{
              return (
                <Jogador className="card"
                  key={i} 
                  apelido={atleta.apelido}
                  pontuacao={atleta.pontuacao}
                  foto={atleta.foto}
                  escudo={atleta.escudo}
                  abreviacao={atleta.abreviacao}
                  posicao={atleta.posicao}/> 
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
