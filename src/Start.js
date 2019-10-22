import React from 'react';

export default class Start extends React.Component {

  render() {
    return (
      <section className={"Start" + (this.props.afficheGame ? " close" : "")}>
          <form onSubmit={this.props.submitValue}>
            <label>
              <input type="text" value={this.props.value} onChange={this.props.recupValue} placeholder="Pseudo"/>
            </label>
            <input type="submit" value="Envoyer" />
          </form>
      </section>
    );
  }
}
