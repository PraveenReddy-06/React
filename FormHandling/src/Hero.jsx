import { memo } from 'react';
import {useState} from 'react';

const Hero = () => {
  const [name, setName]=useState('');

  const updateName = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    setName('');
  }
/* Onclick X OnSubmit */
  return (
    <div>
        <h1>This is a Form</h1>
        <h3>{name}</h3>
    
        <form onSubmit={handleSubmit}>
            <input onChange={updateName} type="text" placeholder="Enter your Name" value={name}/>
            <button style={{margin:"10px"}} type="submit">Submit</button>
        </form>
    </div>
  );
};

export default memo(Hero);