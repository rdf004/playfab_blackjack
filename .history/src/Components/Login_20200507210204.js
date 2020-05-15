import React from 'react';
import '../Style/style.css';
import PlayFab from 'playfab-sdk';

class Login extends React.Component {

    login(event) {

        var login_request = {
            Password: event.target.password.value,
            TitleId: '13C25',
            Username: event.target.username.value,
        }


    
    }

    login_callback(error, result) {

        if( result != null ) {
            console.log(result);
        } else if( error !== null ) {
            console.log(error);
        }

    }

    render() {
        return(
            <div className="login-page">
                <div className="login-div">
                    <div>
                        <h1 className="login-title">Login</h1>
                    </div>
                    <form className="login-form" onSubmit={this.login}>
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

export default Login;