import { memo } from 'react';
import { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Hero = () => {
    console.log("hero is called");
    const[count,setCount] = useState(0);
    const[colour,setColour] = useState('white');
    const[user,setUser] = useState({name:'Unknown',age:0,gender:'Unknown'});

    const handleIncrement= () =>{
     setCount(count+1);
    };
    const handleDecrement = () =>{
        setCount(count-1);
    }
    const showUser = () =>{
      setUser({name:'Praveen',age:25,gender:'Male'})
    }
    const typing = (elem) => {
      /*console.log('User is typing');*/
      /*console.log(elem.target);*/
      console.log(elem.target.value);
    }
    const updateColour = (ele) => {
      setColour(ele.target.value);
    }
/* user.name = "Sai";
setUser(user); this is in memory update, React Needs a New Reference You create a completely new object in memory.
This is called:
  Immutability
    It means:
    Do not modify existing state
    Always create a new copy
    Update the copy
    Return the copy*/
    const updateName = (e) => {
      setUser( prevUser => ({...prevUser, name:e.target.value}));/* ({}) this is same as return {} */
    }

  return (
    <div>
      <h2>Hero</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <CounterDisplay counter={count}/>
      <button onClick={showUser}>click me</button>

      <h3>Name : {user.name} Age: {user.age} Gender: {user.gender}</h3>
      <input onChange={typing}  type="text" placeholder='Enter name'/>
      <br />

      <input onChange={updateColour} type="text" placeholder="Enter colour to update"/>
      <h3>Colour : {colour} </h3>

      <input onChange={updateName}  type="text" placeholder="Enter Name to update user"/>
      <h3>Name : {user.name} Age: {user.age} Gender: {user.gender}</h3>

    </div>
  );
};

export default memo(Hero);