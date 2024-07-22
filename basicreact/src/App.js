import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
   // setCount(count + 1);
    setCount((precount) => precount + 1)
    setCount((precount)=> precount+1)
  }  
  const decrement = () => {
    setCount(count - 1);
     setCount(count - 1);
    }
  return (
    <div className="App">
      <h1>app start</h1>
      <div>        
        <button onClick={increment}>inc</button> {count} <button onClick={decrement}>dec</button>
      </div>
    </div>
  );
}

export default App;
