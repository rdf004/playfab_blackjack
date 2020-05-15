import React from 'react';

class Login extends React.Component {

    render() {
        return(
            <div className="login-page">
                <div className="login-div">
                    <form>
                        <div>
                            <label className="login-item">
                                <p className="login-field">Username</p>
                                <input type="text" name="username" />
                            </label>
                        </div>
                        <div>
                            <label className="login-item">
                                <p className="login-field">Password</p>
                                <input type="text" name="password" />
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