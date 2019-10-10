import React from 'react';
import './App.min.css';
import Nav from './Nav.js';
import Plateau from './Plateau.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Plateau />
      </main>
    </div>
  );
}

export default App;
