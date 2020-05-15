import React from 'react';
import '../Style/style.css';
import Header from './Header';

var PlayFab = require("playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "13C25";

class Store extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tokens: 0,
            dollars: 0
        }

    }

    componentDidMount() {

        PlayFab._internalSettings.sessionTicket = localStorage.getItem('_internalSettings')
        PlayFab._internalSettings.entityToken = localStorage.getItem('_internalSettings_entityToken')

        PlayFabClient._internalSettings.sessionTicket = localStorage.getItem('client_internalSettings');
        PlayFabClient._internalSettings.entityToken = localStorage.getItem('client_internalSettings_entityToken');

        var character_request = {
            // SessionTicket: localStorage.getItem('SessionTicket')
        }

        var tk = 0;
        var us = 0;

        PlayFabClient.GetUserInventory(null, (error, result) => {
            if( result !== null) {
                console.log(result);
                tk = result['data']['VirtualCurrency']['TK'];
                us = result['data']['VirtualCurrency']['US'];

                this.setState({
                    dollars: us,
                    tokens: tk
                });

            } else if( error !== null ) {
                console.log(error);
            }          
        });

    }

    addDollars = (event) => {
        event.preventDefault();

        var change_vc_request = {
            // SessionTicket: localStorage.getItem('SessionTicket'),
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

        var character_request = {
            // SessionTicket: localStorage.getItem('SessionTicket')
        }

        var tk = 0;
        var us = 0;

        PlayFabClient.GetUserInventory(character_request, (error, result) => {
            if( result !== null) {
                console.log(result);
                tk = result['data']['VirtualCurrency']['TK'];
                us = result['data']['VirtualCurrency']['US'];

                this.setState({
                    dollars: us,
                    tokens: tk
                });

            } else if( error !== null ) {
                console.log(error);
            }          
        });
    }

    buyTokens = (event) => {
        event.preventDefault();

        // alert(localStorage.getItem('SessionTicket'));

        var character_request = {
            // SessionTicket: localStorage.getItem('SessionTicket')
        }

        PlayFabClient.GetUserInventory(character_request, (error, result) => {
            if( result !== null) {
                console.log(result);
            } else if( error !== null ) {
                console.log(error);
            }          
        });

        var change_tokens_request = {
            // SessionTicket: localStorage.getItem('SessionTicket'),
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

        var reduce_dollars_request = {
            // SessionTicket: localStorage.getItem('SessionTicket'),
            Amount: event.target.value.value,
            VirtualCurrency: 'US'
        }

        PlayFabClient.SubtractUserVirtualCurrency(reduce_dollars_request, (error, result) => {
            if( result !== null) {
                console.log(result);
            } else if( error !== null ) {
                console.log(error);
            }
        });

        var character_request = {
            // SessionTicket: localStorage.getItem('SessionTicket')
        }

        var tk = 0;
        var us = 0;

        PlayFabClient.GetUserInventory(character_request, (error, result) => {
            if( result !== null) {
                console.log(result);
                tk = result['data']['VirtualCurrency']['TK'];
                us = result['data']['VirtualCurrency']['US'];

                this.setState({
                    dollars: us,
                    tokens: tk
                });

            } else if( error !== null ) {
                console.log(error);
            }          
        });

    }

    render() {
        return(
            <React.Fragment>
                <Header/>
                <div className="store-page">
                    <div className="store-amount-div">
                        <h1 className="vc-amount-title">Store</h1>
                        <h1 className="vc-amount">You have {this.state.dollars} Dollars (US)</h1>
                        <h1 className="vc-amount">You have {this.state.tokens} Tokens (TK)</h1>
                    </div>
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
            </React.Fragment>
        );
    }

}

export default Store;