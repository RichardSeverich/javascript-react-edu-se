import React, { Component } from 'react';
import LogoSemantic from './../logo-semantic/LogoSemantic';
import ReactDOM from 'react-dom';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.navigateNavbar = this.navigateNavbar.bind(this);
    }

    navigateNavbar(users) {
    // Find the text field via the React ref
        let nickname = ReactDOM.findDOMNode(this.refs.nickname).value.trim();
        let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        let band = false;
        users.forEach(function (user, indice, array) {
            let bandOne = user._id === nickname && user.password === password;
            let bandTwo = user.nick_name === nickname && user.password === password;
            if (bandOne || bandTwo) {
                band = true;
            }
        });
        if (band) {
            this.props.history.push('/nav-bar');
        } else {
            alert('user or password incorrect');
        }
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <div className="Login-header"></div>
                <LogoSemantic></LogoSemantic>
                <div className="ui centered grid container">
                    <div className="six wide column">
                        <div className="ui fluid card">
                            <div className="content">
                                <form className="ui form" action="">
                                    <div className="field">
                                        <label>User</label>
                                        <div className="ui left icon">
                                            <i className="user icon"></i>
                                            <input
                                                type="text"
                                                name="user"
                                                ref="nickname"
                                                placeholder="User"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <div className="ui left icon">
                                            <i className="lock icon"></i>
                                            <input
                                                type="password"
                                                name="password"
                                                ref="password"
                                                placeholder="Password"
                                            ></input>
                                        </div>
                                    </div>
                                    <button
                                        onClick={this.navigateNavbar.bind(this, users)}
                                        className="ui basic button labeled icon button"
                                        type="button"
                                    >
                                        <i className="unlock alternate icon"></i>
                    Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
