import React, { Component } from 'react';
import logo from './logo.png';
import './Logo.css';

class LogoSemantic extends Component {
    render() {
        return (
            <img src={logo} className="App-logo-semantic" alt="logo" />
        )
    }
}
export default LogoSemantic;