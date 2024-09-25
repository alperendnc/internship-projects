import './App.css';
import React, {useState} from 'react';

const Counter = ()=>{
  const [count,setCount]=useState(0);
  const increment = ()=> setCount(prevCount=> prevCount+1);
  const decrement = ()=>setCount(prevCount=> prevCount-1);
  const reset = ()=>setCount(0);  
  return (
    <div>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
  );
};function App() {
return(
  <div>
    <h1>Counter App</h1>
    <Counter />
  </div>
)
}
export default App;
