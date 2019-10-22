import React from 'react';

export default class Good extends React.Component {

  render() {
    return (
        <div className={"caseNeutre " + (this.props.resultColor ? this.props.resultColor : "")}>

        </div>
    );
  }
}
