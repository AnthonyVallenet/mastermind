import React from 'react';
import logo from './logo.png';

function Nav() {
  return (
      <nav className="Nav">
          <div>
              <img src={logo} alt="Logo site"/>
              <div id="nav-icon" className="menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
          </div>
          <ul id="nav-link">
              <li><p id="navAbout">Scores</p></li>
              <li><p id="navWork">Règles du jeu</p></li>
          </ul>
      </nav>
  );
}

export default Nav;
