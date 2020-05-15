import React from 'react';
import '../Style/style.css';
import { render } from '@testing-library/react';
import Header from './Header';

var PlayFab = require("playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("playfab-sdk/Scripts/PlayFab/PlayFabClient");

class Game extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          dealer_hand: [],
          my_hand: [],
          reload: false
      }
      this.bet_amount = 0;


    }

    componentDidMount() {
        PlayFab._internalSettings = localStorage.getItem('_internalSettings');
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

    }

    hit = () => {
        this.setState((state) => {
            const my_hand = state.my_hand.concat([this.getRandomCard()]);
            return {
                my_hand
            }
        }, () => {
            if(this.getMyTotal() == 21) {
                alert("You won!");
            } else if(this.getMyTotal() > 21) {
                alert("Dealer won!");
            }
        });
    }

    stay = () => {

        this.finish_game();

        
    }

    finish_game = () => {
        while(this.getDealerTotal < 16) {
            this.dealer_turn();
        }

        var winner = this.calculate_winner()

        if( winner === "Me" ) {

            var add_win_money = {
                // SessionTicket: localStorage.getItem('SessionTicket'),
                Amount: this.bet_amount,
                VirtualCurrency: 'TK'
            }

            PlayFabClient.AddUserVirtualCurrency(add_win_money, (error, result) => {
                if( result !== null) {
                    console.log(result);
                } else if( error !== null ) {
                    console.log(error);
                }
            });

            alert("You won!");

        } else {

            var subtract_loss_money = {
                // SessionTicket: localStorage.getItem('SessionTicket'),
                Amount: this.bet_amount,
                VirtualCurrency: 'TK'
            }

            PlayFabClient.SubtractUserVirtualCurrency(subtract_loss_money, (error, result) => {
                if( result !== null) {
                    console.log(result);
                } else if( error !== null ) {
                    console.log(error);
                }
            });
            
            alert("Dealer won");

        }

        this.refreshPage();

    }

    giveGift = () => {
        var rand = Math.random();
        var gift;
        if( rand < 0.1 ) {
            gift = "Car";
        } else if( rand < 0.5 ) {
            gift = "Free Hotel Stay";
        } else {
            gift = "Stuffed Animal";
        }

        /*
        PlayFabClient.PurchaseItem(request, (error, result) => {

        });
        */        
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
        var my_total = this.getMyTotal();
        var dealer_total = this.getDealerTotal();

        console.log(my_total);
        console.log(dealer_total);

        if( my_total > dealer_total ) {
            return "Me"
        } else {
            return "Dealer"
        }
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

    getDealerHand = () => {
        return (
            <div>
                {this.state.dealer_hand.map((item, index) => (
                    <p className="dealer-hand" key={index}>{item.join(' ')}</p>
                ))}
            </div>
        )
    }



    getMyHand = () => {
        return (
            <div>
                {this.state.my_hand.map((item, index) => (
                    <p className="my-hand" key={index}>{item.join(' ')}</p>
                ))}
            </div>
        )
    }

    refreshPage = () => {
        this.setState(
          {reload: true},
          () => this.setState({reload: false})
        )
    }

    makebet = (event) => {
        event.preventDefault();
        console.log(event.target.value.value);
        this.bet_amount = parseInt(event.target.value.value);
    }

    render() {

        return (
            <React.Fragment>
                <Header />
                <div className="game-page">
                    <div className="game-div">
                    <div></div>
                        <h2 className="dealer-hand-title">Dealer hand: {this.getDealerHand()}</h2>
                        <div></div>
                        <h2 className="my-hand-title">My hand: {this.getMyHand()}</h2>
                        <div></div>        

                        <div></div>
                        <button className="blackjack-button" onClick={this.stay}>Stay</button>
                        <div></div>
                        <button className="blackjack-button" onClick={this.hit}>Hit</button>
                        <div></div>


                        <form className="bet-form" onSubmit={this.makebet}>
                            <div className="form-div">
                                <label className="login-item">
                                    <p className="store-field">Bet Amount (TK)</p>
                                    <input className="login-input" type="text" name="value" />
                                </label>
                            </div>
                            <div className="button-div">
                                <input className="bet-button" type="submit" value="Buy" />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Game;