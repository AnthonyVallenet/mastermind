import React from 'react';

export default class Tableau extends React.Component {


  render() {
    return (
        <div className={"rgb " + this.props.color} onClick={ () => {
            this.props.clicked(this.props.color);
        }}>
        </div>
    );
  }
}
