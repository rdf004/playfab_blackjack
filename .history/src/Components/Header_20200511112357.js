import React from 'react';
import '../Style/style.css';

var PlayFab = require("../../node_modules/playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("../../node_modules/playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "13C25";

class Header extends React.Component {


    render() {
        return(
            <div>
                <p>Signup</p>
                <p>Login</p>
                <p>Store</p>
                <p>Game</p>
            </div>
        );
    }

}

export default Header;