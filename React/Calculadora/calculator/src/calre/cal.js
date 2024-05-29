import React, { useState } from 'react';

const Calculadora = () => {
  const [display, setDisplay] = useState(''); // Estado para armazenar a expressão a ser exibida

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value); // Atualiza a expressão no estado
  };

  const handleClear = () => {
    setDisplay(''); // Limpa a expressão
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString()); // Avalia a expressão e exibe o resultado
    } catch (error) {
      setDisplay('Erro'); // Exibe 'Erro' se houver um erro na avaliação
    }
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}; 

export default Calculadora;