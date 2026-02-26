import { memo } from 'react';
import { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Hero = () => {
    console.log("hero is called");
    const[count,setCount] = useState(0);

    const handleIncrement= () =>{
     setCount(count+1);
    };
    const handleDecrement = () =>{
        setCount(count-1);
    }

  return (
    <div>
      <h2>Hero</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <CounterDisplay counter={count}/>
    </div>
  );
};

export default memo(Hero);