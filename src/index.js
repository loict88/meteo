import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './index.scss';
import Meteo from './components/Meteo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Meteo city={"Troyes"} code={"13000"} />
    <Meteo city={"Paris"} code={"75001"} />
    <Meteo city={"Le plessis-trevise"} code={"94420"} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
