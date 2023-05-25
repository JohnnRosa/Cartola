import { useState,useEffect } from 'react'
import './App.css'

function App() {
  useEffect(()=> {

    fetch('https://api.cartola.globo.com/atletas/pontuados/1').then(async(jogadores) => {
    let data = await jogadores.json()
    
    console.log(data)
    })

  }, [])


  return (
    <>
      
    </>
  )
}

export default App
