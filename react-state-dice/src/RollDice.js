// RollDice is a parent component (rendered by App) that renders the dice and a button to roll.

import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    // initiate the state
    this.state = { die1: 1, die2: 1, rolling: false };
    // bind `this` of `roll` to the "RollDice" component in the constructor
    this.roll = this.roll.bind(this);
  }

  roll() {
    // pick 2 new rolls
    const newDie1 = Math.floor(Math.random() * 6 + 1);
    const newDie2 = Math.floor(Math.random() * 6 + 1);
    // set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    // wait 1 sec, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        {/* The `RollDice` component is going to call `roll` function using `onClick` rather than calling it itself. However, `onClick` per se doesn't have the `roll` method so `this` will be undefined. In order for JS to know `this` actually refers to the `RollDice` component, we need to BIND the `this` keyword to `RollDice.roll()`  */}
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
