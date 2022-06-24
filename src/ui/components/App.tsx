import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import GameContainer from './game/GameContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Wordle Copy</h1>
        <GameContainer />
      </header>
    </div>
  );
}

export default App;
