import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './../nav-bar/NavigationBar';
import './Create.css';

class Create extends Component {
    constructor(props) {
        super(props);
        this.createUser = this.createUser.bind(this);
    }

    createUser(add) {
    // Find the text field via the React ref
        let id = ReactDOM.findDOMNode(this.refs.id).value.trim();
        let nickname = ReactDOM.findDOMNode(this.refs.nickname).value.trim();
        let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        let lastName = ReactDOM.findDOMNode(this.refs.lastName).value.trim();
        let career = ReactDOM.findDOMNode(this.refs.career).value.trim();
        let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        let type = ReactDOM.findDOMNode(this.refs.type).value.trim();
        let user = {
            _id: id,
            nick_name: nickname,
            password: password,
            name: name,
            last_name: lastName,
            career: career,
            email: email,
            type: type,
        };
        //() => add(user);
        add(user);
        alert('created successfully');
        //Clear Inputs
        ReactDOM.findDOMNode(this.refs.id).value = '';
        ReactDOM.findDOMNode(this.refs.nickname).value = '';
        ReactDOM.findDOMNode(this.refs.password).value = '';
        ReactDOM.findDOMNode(this.refs.name).value = '';
        ReactDOM.findDOMNode(this.refs.lastName).value = '';
        ReactDOM.findDOMNode(this.refs.email).value = '';
    }

    render() {
        const { add } = this.props;
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div className="ui centered grid container">
                    <div className="six wide column">
                        <div className="ui fluid card">
                            <div className="margin-bottom-one"></div>
                            <h3 align="center">Users</h3>
                            <div className="margin-bottom-one"></div>
                            <div className="content" align="center">
                                <form className="ui form">
                                    <div className="field">
                                        <div className="label">
                                            <label>Id</label>
                                        </div>
                                        <input
                                            ref="id"
                                            type="text"
                                            className="form-control"
                                            maxLength="7"
                                        ></input>
                                    </div>
                                    <div className="field">
                                        <div className="label">
                                            <label>Nickname</label>
                                        </div>
                                        <input
                                            ref="nickname"
                                            suggested="my_nickname"
                                            className=""
                                            minLength="3"
                                            maxLength="10"
                                        ></input>
                                    </div>
                                    <div className="field">
                                        <div className="label">
                                            <label>Password</label>
                                        </div>
                                        <input
                                            ref="password"
                                            suggested="mypass123"
                                            type="password"
                                            className="form-control"
                                            minLength="3"
                                            maxLength="10"
                                        ></input>
                                    </div>
                                    <div className="field">
                                        <div className="label">
                                            <label>Names</label>
                                        </div>
                                        <input
                                            ref="name"
                                            type="text"
                                            className="form-control"
                                            minLength="3"
                                            maxLength="24"
                                        ></input>
                                    </div>
                                    <div className="field">
                                        <div className="label">
                                            <label>Last Names</label>
                                        </div>
                                        <input
                                            ref="lastName"
                                            type="text"
                                            className="form-control"
                                            minLength="3"
                                            maxLength="24"
                                        ></input>
                                    </div>
                                    <div className="field">
                                        <div className="label">
                                            <label>Career</label>
                                        </div>
                                        <select ref="career" className="">
                                            <option value="System enginee">System engineer</option>
                                            <option value="Civil engineer">Civil engineer</option>
                                            <option value="Electronic engineer">
                        Electronic engineer
                                            </option>
                                            <option value="Finance engineer">Finance engineer</option>
                                            <option value="Economy">Commercial Engineer</option>
                                            <option value="Business administrato">
                        Business administrator
                                            </option>
                                            <option value="Architecture">Architecture</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Economy">Economy</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <div className="label">
                                            <label>Email</label>
                                        </div>
                                        <input
                                            ref="email"
                                            type="text"
                                            className="form-control"
                                            maxLength="32"
                                        ></input>
                                    </div>
                                    <div className="field">
                                        <div className="label">
                                            <label>Type</label>
                                        </div>
                                        <select ref="type" className="">
                                            <option value="Admin">Admin</option>
                                            <option value="Student">Student</option>
                                            <option value="Proffesor">Professor</option>
                                            <option value="Trainer">Trainer</option>
                                            <option value="Engineer">Engineer</option>
                                        </select>
                                    </div>
                                    <div className="field text-center">
                                        <button
                                            type="button"
                                            className="ui basic button"
                                            onClick={this.createUser.bind(this, add)}
                                        >
                                            <i className="save icon"></i>
                      Add
                                        </button>
                                        <button type="button" className="ui basic button">
                      Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Create;
