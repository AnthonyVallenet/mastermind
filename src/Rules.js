import React from 'react';

export default class Rules extends React.Component {


  render() {
    return (
        <section className={"Rules" + (this.props.afficheRules ? " open" : "")}>
          <div>
              <i className="fas fa-times" onClick={this.props.rulesClick}></i>
              <p>Rules</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi urna, faucibus vitae tempus at, viverra nec quam. Phasellus finibus neque porta, finibus mauris et, dignissim metus.</p>
          </div>
        </section>
    );
  }
}
