import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './../courses/Show.css';

class ShowInsCourses extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(course) {
        this.props.history.push({
            pathname: '/inscriptions-show',
            course: course,
        });
    }

    render() {
        const { courses } = this.props;
        const rows = courses.map((course, i) => {
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
                </tr>
            );
        });
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div align="center">
                    <div className="card-courses">
                        <div className="margin-bottom">
                            <h3 align="center">Inscriptions</h3>
                            <h4 align="center">Select Course</h4>
                        </div>
                        <div className="card-body">
                            <table className="ui striped selectable celled table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">_id</th>
                                        <th scope="col">Name</th>
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
export default ShowInsCourses;
