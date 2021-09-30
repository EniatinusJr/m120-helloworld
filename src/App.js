import './App.css';
import {useState} from "react";

function App() {
  const [counter, setcounter] = useState(0);
  const [inputvalue, setInputValue] = useState(1);

  function plus(){
    setcounter(counter + 1);
  }  
  function minus(){
    setcounter(counter-1);
  }
  function set(){
    setcounter(3306);
  }
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <button onClick={plus}>+</button>
        <button onClick={set}>set</button>
        <p>{counter}</p>

        <button onClick={minus}>-</button>
        <br></br>
        <p>Value:
        <input type="number" onChange={(e)=> setInputValue(e.target.value)} style={{borderColor:'green'}}/>
        <button onClick={() => {if (inputvalue > 0 && inputvalue < 1000){
           console.log(inputvalue)
           setcounter(parseInt(inputvalue))} }
        }
       >Set</button>
        </p>
      </header>
    </div>
  );
}

export default App;
