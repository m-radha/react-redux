import React,{useState} from 'react';
import Props from './Props';

const State = () => {
    const [title, setTitle] = useState('title1');
    const handleClick = () => setTitle('Radha');
    const arr = {
      "name":"roobi",
      "age":23
    }
    
  return (
    <div>
      <p>{title}</p>
      <button onClick={handleClick}>update</button>
      <Props t={title} arr={arr}/>
    </div>
  )
}

export default State
