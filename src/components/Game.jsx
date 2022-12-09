import React, { Component } from "react";
import Prompt from "./Prompt";

const items = [];

for (let i = 65; i < 75; i++) {
  items.push({
    id: i,
    content: String.fromCharCode(i),
    displayed: false,
  });
}

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(event, item, index, answer) {
    // compare item.displayed with answer
    // either increment or reset the current score
    // console.log(event, item, index, answer);
    this.props.handleScore(item.displayed === answer);

    // change the item that is displayed
    // if the shown item hasn't displayed, changed displayed property to true
    // if(!item.displayed) {
    const items = this.state.items.map((i) => {
      if (i === item) {
        i.displayed = true;
        return i;
      } else return i;
    });
    this.setState({ items });
    // }
  }

  randomItemIndex() {
    let rand = Math.floor(Math.random() * items.length);
    return rand;
  }

//   handleScore(increment) {
//     if (increment) {
//       this.setState({
//         currentScore: this.state.currentScore + 1,
//       });
//     } else {
//       this.setState({
//         currentScore: 0,
//         highScore: this.state.currentScore,
//       });
//     }
//   }

  render() {
    const { items } = this.state;
    const index = this.randomItemIndex();
    const item = items[index];

    return (
      <main className="d-flex justify-content-around align-items-centers">
        <p id={index}>{item.content}</p>
        <Prompt item={item} index={index} handleAnswer={this.handleAnswer} />
      </main>
    );
  }
}

export default Game;
