import { useState, useEffect } from "react";

const App = () => {

  const [ texto, setTexto ] = useState('')
  const [ numero, setNumero ] = useState(0)

  useEffect(() => {
      console.log('Dentro useEffect: ' + texto)
      console.log('Dentro useEffect: ' + numero)
    },
    [texto, numero]
  )
  const Receba = (valor) => {
    setTexto( texto + valor)
    setNumero(numero + valor)
    console.log('Sem useEffect: ' + texto)
    console.log('Sem useEffect: ' + numero)
  }

  return (
    <div>
      <h1>Teste</h1>
      <input type="text" onChange={ (e) => {Receba(e.target.value)}}/>
    </div>
  );
}

export default App