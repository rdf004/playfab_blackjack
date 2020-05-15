import React from 'react';
import '../Style/style.css';
import Login from './Login';
import Signup from './Signup';
import Store from './Store';
import { render } from '@testing-library/react';

class Game extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          dealer_hand: [],
          my_hand: []
      }
    }

    getRandomCard = () => {
        var numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];

        var rand_number = numbers[Math.floor(Math.random() * numbers.length)];
        var rand_suit = suits[Math.floor(Math.random() * suits.length)];

        return [rand_number, rand_suit]

    }

    componentDidMount() {
        var i;
        for(i = 0; i < 4; i++) {
            var num_and_suit_array = this.getRandomCard()

            if(i < 2) {
                this.setState((state) => {
                    dealer_hand: state.dealer_hand.concat(num_and_suit_array);
                });
            } else {
                this.setState((state) => {
                    my_hand: state.dealer_hand.concat(num_and_suit_array);
                });
            }

        }
        console.log(this.state);
    }

    render() {
        return (
            <div className="game-page">
                <div className="game-div">
                    <div></div>
                    <button className="blackjack-button">Stay</button>
                    <div></div>
                    <button className="blackjack-button">Hit</button>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Game;