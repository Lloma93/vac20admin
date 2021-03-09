import React from 'react';
import './styles/global.css';
import './styles/pages/login.css';

import login01 from './assets/images/login01.svg'

function App() {
  return (
    <div id="login-page">
      <div className="content-wrapper">
      <h1> eVac20 - Admin </h1>
      <img src={login01}  alt="img" />
      <label>Login:</label>
      <input type="text"></input>
      <label>Senha:</label>
      <input type="password"></input>
      <button className="button-password">Logar</button>
      <p>Esqueceu seu login? 
        <a href="" className="recovery-password">
           Recuperar a senha
        </a>
      </p>
      </div>
    </div>
  );
}

export default App;
