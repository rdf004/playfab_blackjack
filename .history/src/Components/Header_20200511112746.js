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
                <p className="header-tab-bj">Blackjack</p>
                <p className="header-tab">Signup</p>
                <p className="header-tab">Login</p>
                <p className="header-tab">Store</p>
                <p className="header-tab">Game</p>
            </div>
        );
    }

}

export default Header;