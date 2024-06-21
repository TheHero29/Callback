import logo from './logo.svg';
import { useState,useCallback } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState("");
  const [count,setCount] = useState(0);
  const incrementCount = useCallback(() => {setCount(count+1)},[count]);

  return (
    <div className="App">
      <input type="text"
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text:{input}</h3>
      <h3>Count:{count}</h3>
      <hr />
      <ChildComponent count={count} incrementCount={incrementCount}/>
    </div>
  );
}

const ChildComponent = React.memo(function({count,incrementCount})
{
  console.log("child is rerendering");
  return(
    <div>
      <h2>This is a child component</h2>
      <h3>Count:{count}</h3>
    </div>
  );
})

export default App;
