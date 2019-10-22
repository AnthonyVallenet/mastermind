import React from 'react';
import Round from './Round.js';
import Good from './Good.js';

export default class Line extends React.Component {

    createRounds() {
        let rounds = [];
        for (let i = 0; i < 4; i++) {
            rounds.push(<Round key={i} lineColor={this.props.lineColor[i]} selected={this.props.selected && this.props.round === i}/>);
        }
        return rounds;
    }

    createResult() {
        let result = [];
        for (let i = 0; i < 4; i++) {
            result.push(<Good key={i} resultColor={this.props.resultColor[i]}/>);
        }
        return result;
    }

  render() {
    return (
        <div className="line">
            <div className={"col "  + (this.props.selected ? "lineSelected" : "")}>
                {
                    this.createRounds.bind(this)()
                }
            </div>
            <div className="colGood">
                {
                    this.createResult.bind(this)()
                }
            </div>
        </div>
    );
  }
}
