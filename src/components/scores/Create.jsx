import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './../nav-bar/NavigationBar';
import './Create.css';

class Create extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add(scores, data, add) {
        let last = scores[scores.length - 1];
        let id = (parseInt(last._id, 10) + 1).toString();
        let value = ReactDOM.findDOMNode(this.refs.score).value.trim();
        let newScore = {
            _id: id,
            user_id: data.user._id,
            module_id: data.module._id,
            value: value,
        };
        let scoreExist = false;
        scores.forEach(function (score, index) {
            let band1 = score.module_id === data.module._id;
            let band2 = score.user_id === data.user._id;
            if (band1 && band2) {
                scoreExist = true;
                score.value = value;
            }
        });
        if (!scoreExist) {
            add(newScore);
        }
        alert('successfully');
        this.props.history.push({
            pathname: '/scores-users',
            course: data.course,
            module: data.module,
        });
    }

    render() {
        const { scores, add } = this.props;
        let data = this.props.location.data;
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div className="ui centered grid container">
                    <div className="six wide column">
                        <div className="ui fluid card">
                            <div className="margin-bottom-one"></div>
                            <h3 align="center">Scores</h3>
                            <div className="margin-bottom-one"></div>
                            <div className="content" align="center">
                                <form action="" className="ui form">
                                    <div className="field">
                                        <label>Value</label>
                                        <input
                                            ref="score"
                                            type="text"
                                            className="form-control"
                                            minLength="3"
                                            maxLength="24"
                                        ></input>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            onClick={this.add.bind(this, scores, data, add)}
                                            type="button"
                                            className="ui basic button"
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
