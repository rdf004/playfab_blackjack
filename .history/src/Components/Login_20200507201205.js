import React from 'react';

class Login extends React.Component {

    render() {
        return(
            <div className="login-page">
                <div className="login-div">
                    <form>
                        <label className="login-item">
                            <p className="login-field">Username</p>
                            <input type="text" name="username" />
                        </label>
                        <label className="login-item">
                            <p className="login-field">Password</p>
                            <input type="text" name="password" />
                        </label>
                    </form>
                </div>
            </div>
        );
    }

}

export default Login;