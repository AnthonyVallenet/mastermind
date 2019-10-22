import React from 'react';
import './App.min.css';
import Nav from './Nav.js';
import Plateau from './Plateau.js';
import Tableau from './Tableau.js';
import Scores from './Scores.js';
import Rules from './Rules.js';
import Start from './Start.js';
import Win from './Win.js';
import Loose from './Loose.js';
import Alert from './Alert.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        afficheScores: false,
        afficheRules: false,
        afficheTableau: false,
        afficheWin: false,
        afficheLoose: false,
        afficheAlert: false,
        scores: 0,
        line: 0,
        round: 0,
        value: '',
        afficheGame: false,
        compositions: this.random(),
        game: [
            ["","","",""],
            ["","","",""],
            ["","","",""],
            ["","","",""],
            ["","","",""],
            ["","","",""],
            ["","","",""],
            ["","","",""],
            ["","","",""],
            ["","","",""]
        ],
        result: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]
    };

    console.log(this.state.compositions);

    this.showTableau = this.showTableau.bind(this);
    this.scoresClick = this.scoresClick.bind(this);
    this.winClick = this.winClick.bind(this);
    this.alertClick = this.alertClick.bind(this);
    this.looseClick = this.looseClick.bind(this);
    this.rulesClick = this.rulesClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.recupValue = this.recupValue.bind(this);
    this.submitValue = this.submitValue.bind(this);
    this.undoClick = this.undoClick.bind(this);
    this.goClick = this.goClick.bind(this);
    this.compare = this.compare.bind(this);
    this.random = this.random.bind(this);
    this.scores = this.scores.bind(this);
  }

  recupValue(event) {
    this.setState({
        value: event.target.value
    });
  }

  submitValue(event) {
    if (this.state.value.length >= 2) {
      this.setState(state => ({
          afficheGame: !state.afficheGame
      }))
    }
    event.preventDefault();
  }

  showTableau() {
      this.setState(state => ({
          afficheTableau: !state.afficheTableau
      }))
  }

  scoresClick() {
      this.setState(state => ({
          afficheScores: !state.afficheScores
      }))
  }

  alertClick() {
      this.setState(state => ({
          afficheAlert: !state.afficheAlert
      }))
  }

  rulesClick() {
      this.setState(state => ({
          afficheRules: !state.afficheRules
      }))
  }

  winClick() {
      this.setState(state => ({
          afficheWin: !state.afficheWin
      }))
  }

  looseClick() {
      this.setState(state => ({
          afficheLoose: !state.afficheLoose
      }))
  }

  handleClick(color) {
      this.state.game[this.state.line][this.state.round] = color;
      this.setState({
          round: this.state.round < 3 ? this.state.round + 1 : this.state.round,
      })
  }

  undoClick() {

      let round = ((this.state.round === 0) || ((this.state.round === 3) && (this.state.game[this.state.line][this.state.round] !== "")) ) ? this.state.round : this.state.round - 1;

      if (this.state.game[this.state.line][this.state.round] === "") {
          this.state.game[this.state.line][this.state.round - 1] = "";
      } else {
          this.state.game[this.state.line][this.state.round] = "";
      }

      this.setState({
          round: round,
      })

  }

  scores(signe) {

      if (signe === "-") {
          this.setState({
              scores: this.state.scores - 2
          })
      } else {
          this.setState({
              scores: this.state.scores + (9 - this.state.line)
          })
      }

  }

  goClick() {
      if (this.state.game[this.state.line][this.state.round] === "") {
          this.alertClick();
          setTimeout(() => {
              this.alertClick()
          }, 1250)
      } else if (this.state.game[this.state.line][this.state.round + 1] === "") {
          this.alertClick();
          setTimeout(() => {
              this.alertClick()
          }, 1250)
      } else {
          if (this.state.line !== 9) {
              this.setState({
                  line: this.state.line + 1,
                  round: 0
              })
          }
          this.goodBadResult();
      }
      console.log(this.state.compositions);
  }

  goodBadResult() {
      let result = this.compare();

      for (let i = 0; i < result[0]; i++) {
          this.state.result[this.state.line].push("good");
      }

      for (let i = 0; i < result[1]; i++) {
          this.state.result[this.state.line].push("bad");
      }


      if (this.state.line === 9 && result[0] !== 4) {
          this.looseClick();

          this.setState(state => ({
            line: 0,
            round: 0,
            compositions: this.random(),
            result: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ],
            game: [
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""]
            ]
          }))
          this.scores("-");
      }

      if (result[0] === 4) {
          this.winClick();

          this.state.game =
          this.state.result =
          this.setState(state => ({
            line: 0,
            round: 0,
            compositions: this.random(),
            result: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ],
            game: [
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""]
            ]
          }))
          this.scores("+");
      }
  }

  compare() {

      let tabCompo = [...this.state.compositions];

      let good = 0;
      let bad = 0;

      for (let i = 0; i < this.state.game[this.state.line].length; i++) {
          let choice = this.state.game[this.state.line][i];
          if (tabCompo.includes(choice)) {
              tabCompo[tabCompo.indexOf(choice)] = "";
              bad++;
          }
      }

      for (let i = 0; i < this.state.game[this.state.line].length; i++) {
          let choice = this.state.game[this.state.line][i];
          if (this.state.compositions[i] === choice) {
              good++;
              bad--;
          }
      }

      return [good, bad];
  }

  random() {
     let allColors = ["red","green","blue","purple","yellow","orange"];
     let randomColor=[];
     for (let i = 0; i < 4; i++) {
       randomColor.push(allColors[Math.floor(Math.random() * allColors.length)]);
     }
     return randomColor;
  }


  render() {
    return (
        <div className="App">
          <Nav scoresClick={this.scoresClick} rulesClick={this.rulesClick}/>
          <Loose scores={this.state.scores} looseClick={this.looseClick} afficheLoose={this.state.afficheLoose}/>
          <Scores scores={this.state.scores} scoresClick={this.scoresClick} afficheScores={this.state.afficheScores}/>
          <Win scores={this.state.scores} winClick={this.winClick} afficheWin={this.state.afficheWin}/>
          <Alert alertClick={this.alertClick} afficheAlert={this.state.afficheAlert}/>
          <Rules rulesClick={this.rulesClick} afficheRules={this.state.afficheRules}/>
          <Start afficheGame={this.state.afficheGame} value={this.state.value} submitValue={this.submitValue} recupValue={this.recupValue}/>
          <main>
            <Tableau compare={this.compare} go={this.goClick} undo={this.undoClick} pseudo={this.state.value} clicked={this.handleClick} montrerTableau={this.showTableau} afficheTableau={this.state.afficheTableau}/>
            <Plateau round={this.state.round} line={this.state.line} resultColor={this.state.result} lineColor={this.state.game}/>
          </main>
        </div>
    );
  }
}
