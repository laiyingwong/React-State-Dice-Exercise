// Die component renders an individual die that takes props and displays the correct face of the die based on props.

import React, { Component } from "react";
import "./Die.css";

// import the icons of the die from react-icons
import {
  BsDice1,
  BsDice2,
  BsDice3,
  BsDice4,
  BsDice5,
  BsDice6,
} from "react-icons/bs";

class Die extends Component {
  render() {
    const { face } = this.props;
    let die;
    const rolling = `${this.props.rolling}` ? "shaking" : "";

    // render the die with the face generated in RollDice
    switch (face) {
      case 1:
        die = <BsDice1 className={`Die ${rolling}`} />;
        break;

      case 2:
        die = <BsDice2 className={`Die ${rolling}`} />;
        break;

      case 3:
        die = <BsDice3 className={`Die ${rolling}`} />;
        break;

      case 4:
        die = <BsDice4 className={`Die ${rolling}`} />;
        break;

      case 5:
        die = <BsDice5 className={`Die ${rolling}`} />;
        break;

      case 6:
        die = <BsDice6 className={`Die ${rolling}`} />;
        break;

      default:
        break;
    }

    return <div>{die}</div>;
  }
}

export default Die;
