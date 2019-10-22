import React from 'react';
import ColorChoose from './ColorChoose.js';

export default class Tableau extends React.Component {
    constructor(props) {
        super(props);
        let color = ["red", "orange", "blue", "purple", "yellow", "green"];
        this.ColorChoose = [];
        for (let i of color) {
            this.ColorChoose.push(<ColorChoose clicked={this.props.clicked} key={this.ColorChoose.length} color={i}/>);
        }
    }

  render() {
    return (
        <section className={"Tableau" + (this.props.afficheTableau ? " open" : "")}>
          <div className="top" onClick={this.props.montrerTableau}>
              <i className="fas fa-chevron-right"></i>
          </div>
          <div className="middle">
              <div>
                  <p>{this.props.pseudo}</p>
              </div>

              <div>
                {
                    this.ColorChoose
                }
              </div>

              <div>
                  <button type="button" onClick={this.props.go}>GO</button>
                  <button type="button" onClick={this.props.undo}><i className="fas fa-undo"></i></button>
              </div>
          </div>
        </section>
    );
  }
}
