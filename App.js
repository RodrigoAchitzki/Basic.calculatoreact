import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operaçao, setOperaçao] = useState('somar');
  const calcular = () => {
    if (operaçao == "Somar")
      return parseFloat(numero1) + parseFloat(numero2);
    else if (operaçao == "Subtrair")
      return parseFloat(numero1) - parseFloat(numero2);
    else if (operaçao=="Multiplicar")
    return parseFloat(numero1) * parseFloat(numero2);
    else
    return parseFloat(numero1) / parseFloat(numero2);

  }

  useEffect(() => {
    setResultado(calcular()); }, [numero1,numero2,operaçao]);

  return (
    <div className="App">
      <h1>Calculadora  com React</h1>
      <label>Primeiro Numero</label>
      <input type='number' value={numero1} onChange={(e) => setNumero1(e.target.value)} />

      <label>Segundo Numero</label>
      <input type='number' value={numero2} onChange={(e) => setNumero2(e.target.value)} />

      <select onChange={(e) => setOperaçao(e.target.value)} >
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>

      <label>Resultado {resultado}</label>
    </div>
  );
}

export default App;
