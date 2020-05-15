import React from 'react';
import '../Style/style.css';

var PlayFab = require("../../node_modules/playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("../../node_modules/playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "13C25";

class Header extends React.Component {


    render() {
        return(
            <div className="header-div">
                <div></div>
                <p className="header-tab-bj"><a href="/">Blackjack</a></p>
                <p className="header-tab"><a href="/signup">Signup</a></p>
                <p className="header-tab"><a href="/login">Login</a></p>
                <p className="header-tab"><a href="/store">Store</a></p>
                <p className="header-tab"><a href="/game">Game</a></p>
            </div>
        );
    }

}

export default Header;