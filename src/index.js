import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #363636;
    color: #FFFFFF;
    padding-top: 40px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Montserrat:wght@600;700;800&display=swap');

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
