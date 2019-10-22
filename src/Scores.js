import React from 'react';

export default class Scores extends React.Component {


  render() {
    return (
        <section className={"Scores" + (this.props.afficheScores ? " open" : "")}>
          <div>
              <i className="fas fa-times" onClick={this.props.scoresClick}></i>
              <p>Scores :</p>
              <p>{this.props.scores}</p>
          </div>
        </section>
    );
  }
}
