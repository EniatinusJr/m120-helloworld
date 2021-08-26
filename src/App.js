import './App.css';
import {useState} from "react";

export default function App() {
  const [counter, setCounter] = useState(0)
  function buttonHandlerplus() {
      setCounter(counter+1)
  }
  function buttonHandlerminus() {
      setCounter(counter-1)
  }
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <button onClick={ buttonHandlerplus }>Plus</button>
        <button onClick={ buttonHandlerminus }>Minus</button>
          <p>{counter}</p>
      </header>

    </div>
  );
}



