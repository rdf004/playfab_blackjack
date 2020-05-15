import React from 'react';
import '../Style/style.css';

var PlayFab = require("playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "13C25";

class Store extends React.Component {

    addVirtualCurrency(event) {
        event.preventDefault();

        var change_vc_request = {
            SessionTicket: localStorage.getItem('SessionTicket'),
            Amount: event.target.value.value,
            VirtualCurrency: 'US'
        }

        PlayFabClient.AddUserVirtualCurrency(change_vc_request, (error, result) => {
            if( result != null) {
                console.log(result);
            } else if( error !== null ) {
                console.log(error);
            }
        });
    }

    render() {
        return(
            <React.Fragment>
            <div className="store-page">
                <div className="store-div">
                    <div>
                        <h1 className="login-title">Store</h1>
                    </div>
                    <form className="login-form" onSubmit={this.addVirtualCurrency}>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="store-field">How many dollars would you like to add?</p>
                                <input className="login-input" type="text" name="value" />
                            </label>
                        </div>
                        <input className="buy-button" type="submit" value="Buy" />
                    </form>
                </div>
            </div>
            <div className="store-page">
            <div className="store-div">
                <div>
                    <h1 className="login-title">Store</h1>
                </div>
                <form className="login-form" onSubmit={this.addVirtualCurrency}>
                    <div className="form-div">
                        <label className="login-item">
                            <p className="store-field">How many dollars would you like to add?</p>
                            <input className="login-input" type="text" name="value" />
                        </label>
                    </div>
                    <input className="buy-button" type="submit" value="Buy" />
                </form>
            </div>
            </React.Fragment>
        );
    }

}

export default Store;