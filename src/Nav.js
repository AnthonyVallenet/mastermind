import React from 'react';
import logo from './logo.png';

function Nav() {
  return (
      <nav className="Nav">
          <div>
              <a href="#"><img src={logo} alt="Logo site"/></a>
              <div id="nav-icon" className="menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
          </div>
          <ul id="nav-link">
              <li><a id="navAbout" href="#score">Scores</a></li>
              <li><a id="navWork" href="#rules">Règles du jeu</a></li>
          </ul>
      </nav>
  );
}

export default Nav;
