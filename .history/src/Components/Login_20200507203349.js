import React from 'react';
import '../Style/style.css';

class Login extends React.Component {

    login() {
        alert("ok");
    }

    render() {
        return(
            <div className="login-page">
                <div className="login-div">
                    <div>
                        <h1 className="login-title">Login</h1>
                    </div>
                    <form className="login-form" onsubmit={this.login}>
                        <div className="form-div">
                            <label className="login-item">
                                <p className="login-field">Username</p>
                                <input className="login-input" type="text" name="username" value="Username" />
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