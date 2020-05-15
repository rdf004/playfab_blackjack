import React from 'react';
import '../Style/style.css';

var PlayFab = require("../../node_modules/playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("../../node_modules/playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "13C25";

class Signup extends React.Component {

    signup = (event) => {
        event.preventDefault();

        var login_request = {
            Password: event.target.password.value,
            TitleId: '13C25',
            Username: event.target.username.value,
        }

        PlayFabClient.LoginWithPlayFab(login_request, (error, result) => {
            if( result != null ) {
                console.log(result);
                localStorage.setItem('SessionToken', result['data']['SessionTicket']);
                this.props.changeLoginStatus();
            } else if( error !== null ) {
                console.log(error);
            }
        });

    
    }

    render() {
        return(
            <div className="login-page">
                <div className="signup-div">
                    <div>
                        <h1 className="login-title">Sign Up</h1>
                    </div>
                    <form className="login-form" onSubmit={this.signup}>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="login-field">Display Name</p>
                                <input className="login-input" type="text" name="username" />
                            </label>
                        </div>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="login-field">Email</p>
                                <input className="login-input" type="text" name="username" />
                            </label>
                        </div>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="login-field">Username</p>
                                <input className="login-input" type="text" name="username" />
                            </label>
                        </div>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="login-field">Password</p>
                                <input className="login-input" type="text" name="password" />
                            </label>
                        </div>
                        <input className="login-button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

}

export default Signup;