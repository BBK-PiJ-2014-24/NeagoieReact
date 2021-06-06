import React, { useState } from 'react';
import '../Counter/Counter.css';

function Counter(props){

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    
    function handleChange(e){
       setInputValue(parseInt(e.target.value));
    }

    function handleAddClick(){
        setCounterValue(counterValue + inputValue);
    }

    function handleSubtractClick(){
        setCounterValue(counterValue - inputValue);
    }

    return (
        <div className='counter'>
           <h1 data-testid='header'>COUNTER</h1>
           <h1 data-testid='count' className={counterValue >= 100 ? 'green' : (counterValue<=-100 ? 'red' : undefined) }>{counterValue}</h1>
           <button data-testid='subtract-btn'
                   onClick={handleSubtractClick}>-</button>
           <input type='number' 
                  data-testid='input' 
                  value={inputValue}
                  className='.text-center'    
                  onChange={handleChange}
                  />
           <button data-testid='add-btn'
                   onClick={handleAddClick}>+</button>

        </div>
    )
}

export default Counter;