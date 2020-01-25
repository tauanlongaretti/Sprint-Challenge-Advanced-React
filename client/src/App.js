import React from 'react';
import PlayersCards from "./components/PlayersCards";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PlayersCards />
    </div>
  );
}

export default App;
