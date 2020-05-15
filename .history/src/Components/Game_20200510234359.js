import React from 'react';
import '../Style/style.css';
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
            // var num_and_suit_array = this.getRandomCard();

            if(i < 2) {
                this.setState((state) => {
                    const dealer_hand = state.dealer_hand.concat([this.getRandomCard()]);
                    return {
                        dealer_hand
                    }
                });
            } else {
                this.setState((state) => {
                    const my_hand = state.my_hand.concat([this.getRandomCard()]);
                    return {
                        my_hand
                    }
                });
            }

        }
        // console.log(this.state);
    }

    hit = () => {
        this.setState((state) => {
            const my_hand = state.my_hand.concat([this.getRandomCard()]);
            return {
                my_hand
            }
        });
    }

    dealer_turn = () => {
        if(this.getDealerTotal < 16) {
            this.setState((state) => {
                const dealer_hand = state.dealer_hand.concat([this.getRandomCard()]);
                return {
                    dealer_hand
                }
            });
        }
    }

    calculate_winner = () => {
        var my_total = 0;
        var dealer_total = 0;
    }

    getDealerTotal = () => {
        var dealer_total = 0;
        var i;
        for(i = 0; i < this.state.dealer_hand.length; i++) {
            if(this.state.dealer_hand[i][0] == "Jack" || this.state.dealer_hand[i][0] == "Queen" || this.state.dealer_hand[i][0] == "King" || this.state.dealer_hand[i][0] == "Ace") {
                dealer_total += 10;
            } else {
                dealer_total += parseInt(this.state.dealer_hand[i][0], 10);
            }
        }

        return dealer_total;
    }

    getMyTotal = () => {
        var my_total = 0;
        var i;
        for(i = 0; i < this.state.my_hand.length; i++) {
            if(this.state.my_hand[i][0] == "Jack" || this.state.my_hand[i][0] == "Queen" || this.state.my_hand[i][0] == "King" || this.state.my_hand[i][0] == "Ace") {
                my_total += 10;
            } else {
                my_total += parseInt(this.state.my_hand[i][0], 10);
            }
        }

        return my_total;
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