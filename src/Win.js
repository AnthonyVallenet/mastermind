import React from 'react';

export default class Win extends React.Component {

  render() {
    return (
        <section className={"Win" + (this.props.afficheWin ? " toogle" : "")}>
          <div>
              <i className="fas fa-times" onClick={this.props.winClick}></i>
              <h1>Vous avez gagné</h1>
              <div>
                <p>Votre score est de : </p>
                <p>{this.props.scores}</p>
              </div>
          </div>
        </section>
    );
  }
}
