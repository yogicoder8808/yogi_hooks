
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [factor,setFactor] = useState(1);

  useEffect(() => {
   console.log ('Effect: count has changed') 
  }, [count]);

  const squardCount = useMemo (() => {
    console.log ('Memo: Squaring count');
    return count*count;
  }, [count])

  const increment = useCallback (()=>{
    setCount(prevCount => prevCount + factor)
  }, [factor])


  return (
    <div className="App">
      <h1> React Hooks Demo</h1>
      <p> Count: {count} </p>
      <p> Factor: {factor} </p>
      <p> Squared Count: {squardCount} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={() =>{console.log ('Callback: Doubled Factor'); 
      setFactor(prevFactor => prevFactor * 2)}}> Doubled Factor</button>
    </div>
  );
}

export default App;
