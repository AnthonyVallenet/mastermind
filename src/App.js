import React from 'react';
import './App.min.css';
import Nav from './Nav.js';
import Plateau from './Plateau.js';
import Tableau from './Tableau.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Tableau />
        <Plateau />
      </main>
    </div>
  );
}

export default App;
