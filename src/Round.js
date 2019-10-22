



import React from 'react';

export default class Round extends React.Component {

  render() {
    return (
        <div className={"case white "  + (this.props.selected ? "roundSelected " : "") + this.props.lineColor} >
        </div>
    );
  }
}
