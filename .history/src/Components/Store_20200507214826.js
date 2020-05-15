import React from 'react';
import '../Style/style.css';

var PlayFab = require("playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "13C25";

class Store extends React.Component {

    render() {
        return(
            <div className="store-page">
                <div className="login-div">
                    <div>
                        <h1 className="login-title">Store</h1>
                    </div>
                    <form className="login-form" onSubmit={this.login}>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="login-field">How much would you like to purchase?</p>
                                <input className="login-input" type="text" name="username" />
                            </label>
                        </div>
                        <input className="login-button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

}

export default Store;