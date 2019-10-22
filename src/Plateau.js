import React from 'react';
import Line from './Line.js';

export default class Plateau extends React.Component {

    createLines() {
        let lines = [];
        for (var i = 0; i < 10; i++) {
            lines.push(<Line key={i} resultColor={this.props.resultColor[i]} lineColor={this.props.lineColor[i]} round={this.props.round} selected={this.props.line === i} />);
        }
        return lines.reverse();
    }

  render() {
    return (
        <section className="Plateau">

          {
              this.createLines.bind(this)()
          }

        </section>
    );
  }
}
