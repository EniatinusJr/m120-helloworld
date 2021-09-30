import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {  } from './App';
import reportWebVitals from './reportWebVitals';
import Bmi from './Bmi';
import List from "./List";
import Apicalls from "./Apicalls";
import Deckofcard from "./Deckofcard";

ReactDOM.render(
  <React.StrictMode>
      <Deckofcard></Deckofcard>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
