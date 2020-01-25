import React from 'react';
import PlayersCards from "./components/PlayersCards";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <h2>ranked by search interest form Google Trends</h2>
      <PlayersCards />
    </div>
  );
}

export default App;
