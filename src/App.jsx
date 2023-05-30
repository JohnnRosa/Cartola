import { useState,useEffect } from 'react'
import './App.css'
import Jogador from './components/Jogadores';

function App() {
  const [jogadores, setJogadores] = useState();

  useEffect(()=> {

    fetch('https://api.cartola.globo.com/atletas/pontuados/1').then(async(jogadores) => {
      let data = await jogadores.json()

      var atletas = Object.values(data.atletas);
      var clubes = Object.values(data.clubes);
      var posicoes = Object.values(data.posicoes);
      
      var cards = atletas.map(atleta =>{
        return {
          apelido: atleta.apelido,
          pontuacao: atleta.pontuacao,
          foto: atleta.foto,
          escudo: clubes.filter(clube => clube.id == atleta.clube_id)[0].escudos['30x30'],
          abreviacao:  clubes.filter(clube => clube.id == atleta.clube_id)[0].abreviacao,
          posicao: posicoes[atleta.posicao_id-1].nome,
        }
      })
      setJogadores(cards)
    })
  }, [])


  return (
    <>
      {
        jogadores?.map((atleta, i) =>{
          return (
            <Jogador 
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
    </>
  )
}

export default App
