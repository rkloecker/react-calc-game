import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Gamesize from "./components/Gamesize";
import Header from "./components/Header";
import Gametype from "./components/Gametype";
import { shuffle, algo } from "./helpers";

class App extends Component {
  state = {
    cards: [],
    firstClicked: { id: null, text: null, val: null },
    secondClicked: { id: null, text: null, val: null },
    cnt: 0,
    gameSize: 4,
    algo: algo.bindec
  };

  initCards = () => {
    // set game size
    // create 8 cards with different textor
    let cards = Array((this.state.gameSize * this.state.gameSize) / 2)
      .fill()
      .map(el => {
        return this.state.algo(32);
      });
    // duplicate cards
    let cardsFlipped = [...cards];

    // flip text
    cardsFlipped = cardsFlipped.map(el => ({
      val: el.text,
      text: el.val
    }));
    // combine 2 card sets
    cards = [...cards, ...cardsFlipped];
    // shuffle Cards
    shuffle(cards);
    // set unique index for react
    cards = cards.map((el, index) => ({
      val: el.val,
      text: el.text,
      id: index
    }));
    // console.log(cards);

    this.setState({ cards });
  };

  isEqual = () => {
    return (
      this.state.firstClicked.id !== this.state.secondClicked.id &&
      (this.state.firstClicked.text === this.state.secondClicked.val ||
        this.state.firstClicked.val === this.state.secondClicked.text)
    );
  };

  // if cards have same text set card bgtext to wrapper bgtext => card 'invisible'
  removeCard = () => {
    let newCards = [...this.state.cards];
    if (this.isEqual()) {
      // console.log("same textors!");
      newCards[this.state.firstClicked.id].text = "";
      newCards[this.state.secondClicked.id].text = "";
      this.setState({
        cards: newCards,
        secondClicked: { id: null, text: null, val: null }
      });
    }
  };

  //picks a card and evaluates: 'removes' if eq text
  evalCards = card => {
    if (this.state.cnt % 2 === 0) {
      this.setState(
        { firstClicked: card, cnt: this.state.cnt + 1 },
        this.removeCard
      );
    } else {
      this.setState(
        { secondClicked: card, cnt: this.state.cnt + 1 },
        this.removeCard
      );
    }
  };

  setSize = size => {
    // console.log(size);
    // reset state
    this.setState(
      {
        cards: [],
        firstClicked: { id: null, text: null },
        secondClicked: { id: null, text: null },
        cnt: 0,
        gameSize: size
      },
      this.initCards
    );
  };

  setAlgo = algoStr => {
    // console.log(algoStr);
    // reset state
    this.setState(
      {
        cards: [],
        firstClicked: { id: null, text: null },
        secondClicked: { id: null, text: null },
        cnt: 0,
        algo: algo[algoStr]
      },
      this.initCards
    );
  };

  componentDidMount() {
    this.initCards();
  }
  render() {
    return (
      <div className="">
        <Header />
        <Main
          cards={this.state.cards}
          evalCards={this.evalCards}
          size={this.state.gameSize}
        />
        <Gamesize setSize={this.setSize} />
        <Gametype setAlgo={this.setAlgo} />
      </div>
    );
  }
}

export default App;
