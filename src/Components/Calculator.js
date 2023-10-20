import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 
 
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

   const handleEqualClick = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input}/>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleEqualClick()}>=</button>
        <button onClick={() => handleClearClick()}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;



