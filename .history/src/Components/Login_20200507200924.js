import React from 'react';

class Login extends React.Component {

    render() {
        return(
            <div className="login-div">
                <form>
                    <label>
                        <p className="login-field">Username</p>
                        <input type="text" name="username" />
                    </label>
                    <label>
                        <p className="login-field">Password</p>
                        <input type="text" name="password" />
                    </label>
                </form>
            </div>
        );
    }

}

export default Login;