import React from 'react';
import logo from './logo.png';

export default class Nav extends React.Component {

  render() {
    return (
        <nav className="Nav">
            <div>
                <img src={logo} alt="Logo site"/>
                <div id="nav-icon" className={"menu" + (this.props.nav ? " open" : "")} onClick={this.navClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
            <ul id="nav-link">
                <li><p id="navAbout" onClick={this.props.scoresClick}>Scores</p></li>
                <li><p id="navWork"  onClick={this.props.rulesClick}>Règles du jeu</p></li>
            </ul>
        </nav>
    );
  }
}
