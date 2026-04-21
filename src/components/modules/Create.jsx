import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './../nav-bar/NavigationBar';
import './Create.css';

class Create extends Component {
    constructor(props) {
        super(props);
        this.create = this.create.bind(this);
    }

    create(add) {
    // Find the text field via the React ref
        let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        let id = '_' + Math.random().toString(36).substr(2, 9);
        let module = {
            _id: id,
            name: name,
        };
        add(module);
        alert('created successfully');
        //Clear Inputs
        ReactDOM.findDOMNode(this.refs.name).value = '';
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
                            <h3 align="center">Modules</h3>
                            <div className="margin-bottom-one"></div>
                            <div className="content" align="center">
                                <form action="" className="ui form">
                                    <div className="field">
                                        <label>Name</label>
                                        <input
                                            ref="name"
                                            type="text"
                                            className="form-control"
                                            minLength="3"
                                            maxLength="24"
                                        ></input>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            onClick={this.create.bind(this, add)}
                                            type="button"
                                            className="ui basic button"
                                        >
                                            <i className="save icon"></i>Add
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
