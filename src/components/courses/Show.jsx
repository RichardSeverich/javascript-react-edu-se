import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './Show.css';

class Show extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
        this.delete = this.delete.bind(this);
    }

    navigate(course) {
        this.props.history.push({
            pathname: '/inscriptions-show',
            course: course,
        });
    }

    delete(_id, inscriptions, plans, remove) {
        let coursesUsers = inscriptions.filter((element, index) => {
            return element.course_id === _id;
        });
        let coursesModules = plans.filter((element, index) => {
            return element.course_id === _id;
        });
        if (coursesUsers.length === 0 && coursesModules.length === 0) {
            remove(_id);
            alert('deleted successfully');
        } else {
            alert('course has relations');
        }
    }

    render() {
        const { courses, inscriptions, plans, remove } = this.props;
        const rows = courses.map((course, i) => {
            let _id = course._id;
            return (
                <tr key={course._id}>
                    <td scope="col">
                        <input type="checkbox"></input>
                    </td>
                    <td scope="col">{course._id}</td>
                    <td scope="col">{course.name}</td>
                    <td scope="col">
                        <button
                            onClick={this.navigate.bind(this, course)}
                            className="ui basic button"
                        >
                            <i className="search plus icon"></i>
              Details
                        </button>
                    </td>
                    <td scope="col">
                        <button className="ui basic button">
                            <i className="edit icon"></i>
              Edit
                        </button>
                    </td>
                    <td scope="col">
                        <button
                            onClick={this.delete.bind(this, _id, inscriptions, plans, remove)}
                            className="ui basic button"
                        >
                            <i className="remove sign icon"></i>
              Delete
                        </button>
                    </td>
                </tr>
            );
        });
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div align="center">
                    <div className="card-courses">
                        <div className="margin-bottom">
                            <h3 align="center">Courses</h3>
                        </div>
                        <div className="card-body">
                            <table className="ui striped selectable celled table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">_id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>{rows}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Show;
