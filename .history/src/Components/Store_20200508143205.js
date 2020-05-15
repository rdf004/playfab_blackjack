import React from 'react';
import '../Style/style.css';

var PlayFab = require("playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "13C25";

class Store extends React.Component {

    addDollars(event) {
        event.preventDefault();

        var change_vc_request = {
            SessionTicket: localStorage.getItem('SessionTicket'),
            Amount: event.target.value.value,
            VirtualCurrency: 'US'
        }

        PlayFabClient.AddUserVirtualCurrency(change_vc_request, (error, result) => {
            if( result !== null) {
                console.log(result);
            } else if( error !== null ) {
                console.log(error);
            }
        });
    }

    buyTokens(event) {
        event.preventDefault();

        alert(localStorage.getItem('SessionTicket'));

        var character_request = {
            SessionTicket: localStorage.getItem('SessionTicket')
        }

        PlayFabClient.GetCharacterInventory(character_request, (error, result) => {
            if( result !== null) {
                console.log(result);
            } else if( error !== null ) {
                console.log(error);
            }          
        });

        var change_tokens_request = {
            SessionTicket: localStorage.getItem('SessionTicket'),
            Amount: event.target.value.value,
            VirtualCurrency: 'TK'
        }

        PlayFabClient.AddUserVirtualCurrency(change_tokens_request, (error, result) => {
            if( result !== null) {
                console.log(result);
            } else if( error !== null ) {
                console.log(error);
            }
        });

    }

    render() {
        return(
            <div className="store-page">
                <div className="store-div">
                    <div>
                        <h1 className="login-title">Add USD</h1>
                    </div>
                    <form className="login-form" onSubmit={this.addDollars}>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="store-field">How many dollars would you like to add?</p>
                                <input className="login-input" type="text" name="value" />
                            </label>
                        </div>
                        <input className="buy-button" type="submit" value="Buy" />
                    </form>
                </div>
                <div className="store-div">
                    <div>
                        <h1 className="login-title">Buy Tokens</h1>
                    </div>
                    <form className="login-form" onSubmit={this.buyTokens}>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="store-field">How many tokens would you like to purchase?</p>
                                <input className="login-input" type="text" name="value" />
                            </label>
                        </div>
                        <input className="buy-button" type="submit" value="Buy" />
                    </form>
                </div>
            </div>
        );
    }

}

export default Store;