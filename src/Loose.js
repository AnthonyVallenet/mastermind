import React from 'react';

export default class Loose extends React.Component {

  render() {
    return (
        <section className={"Loose" + (this.props.afficheLoose ? " toogle" : "")}>
          <div>
              <i className="fas fa-times" onClick={this.props.looseClick}></i>
              <h1>Vous avez perdu</h1>
              <div>
                <p>Votre score est de : </p>
                <p>{this.props.scores}</p>
              </div>
          </div>
        </section>
    );
  }
}
