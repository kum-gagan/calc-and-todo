import React from "react";
import { useState } from "react";
import './cal.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
    // setDisplay(...display,value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };
  return (<>
    <div className="main-div">
      <h1>Calculator</h1>
      <div className="inner" >
        <input
          type="text"
          className="input " 
          value={display}
          onChange={(e) => setDisplay(e.target.value)} />
        <div className="btn">
          <button onClick={() => handleClear()}> C </button>
          <button onClick={() => handleButtonClick('-')}> +/- </button>
          <button onClick={() => handleButtonClick('%')}> % </button>
          <button onClick={() => handleButtonClick('/')} className="btn2"> / </button>
        </div>
        <div className="btn">
          <button onClick={() => handleButtonClick('7')}> 7 </button>
          <button onClick={() => handleButtonClick('8')}> 8 </button>
          <button onClick={() => handleButtonClick('9')}> 9 </button>
          <button className="btn2" onClick={() => handleButtonClick('*')}> * </button>
        </div>
        <div className="btn">
          <button onClick={() => handleButtonClick('4')}> 4 </button>
          <button onClick={() => handleButtonClick('5')}> 5 </button>
          <button onClick={() => handleButtonClick('6')}> 6 </button>
          <button onClick={() => handleButtonClick('-')} className="btn2"> - </button>
        </div>
        <div className="btn">
          <button onClick={() => handleButtonClick('1')}> 1 </button>
          <button onClick={() => handleButtonClick('2')}> 2 </button>
          <button onClick={() => handleButtonClick('3')}> 3 </button>
          <button onClick={() => handleButtonClick('+')} className="btn2"> + </button>
        </div>
        <div className="btn">
          <button>0</button>
          <button>.</button>
          <button onClick={() => handleCalculate()} className="btn2 btn1">=</button>
        </div>
      </div>
    </div>

  </>)
}


export default Calculator;