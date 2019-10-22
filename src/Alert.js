import React from 'react';

export default class Alert extends React.Component {


  render() {
    return (
        <section className={"Alert" + (this.props.afficheAlert ? " toogle" : "")}>
          <div>
              <h1>veuillez remplir la ligne</h1>
          </div>
        </section>
    );
  }
}
