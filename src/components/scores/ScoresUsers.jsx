import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './../users/Show.css';

class ScoresUsers extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(data) {
        this.props.history.push({
            pathname: '/scores-create',
            data: data,
        });
    }

    render() {
        const { users, coursesUsers, scores } = this.props;
        // declare course and module
        let course = this.props.location.course;
        let module = this.props.location.module;
        // search specific scores (Module User relation )
        let scoreSpecific = scores.filter((element, index) => {
            return module._id === element.module_id;
        });
        // search specific courseUsers relation
        let coursesUsersSpecific = coursesUsers.filter((element, index) => {
            return course._id === element.course_id;
        });
        // search specific users ins and verify if they have already score.
        let usersSpecific = [];
        coursesUsersSpecific.forEach(function (elementCourseUser, index) {
            let userIns = users.find(
                (elementUser) => elementUser._id === elementCourseUser.user_id
            );
            userIns.score = '0';
            let score = scoreSpecific.find((score) => score.user_id === userIns._id);
            if (score !== undefined) {
                userIns.score = score.value;
            }
            usersSpecific.push(userIns);
        });

        const rows = usersSpecific.map((user, i) => {
            let data = {};
            data.user = user;
            data.course = course;
            data.module = module;
            return (
                <tr key={user._id}>
                    <td scope="col">
                        <input type="checkbox"></input>
                    </td>
                    <td scope="col">{user.score}</td>
                    <td scope="col">{user._id}</td>
                    <td scope="col">{user.nick_name}</td>
                    <td scope="col">{user.password}</td>
                    <td scope="col">{user.name}</td>
                    <td scope="col">{user.last_name}</td>
                    <td scope="col">{user.career}</td>
                    <td scope="col">{user.email}</td>
                    <td scope="col">{user.type}</td>
                    <td scope="col">
                        <button
                            onClick={this.navigate.bind(this, data)}
                            className="ui basic button"
                        >
                            <i className="edit icon"></i>
              edit
                        </button>
                    </td>
                </tr>
            );
        });
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div align="center">
                    <div className="card-users">
                        <div className="margin-bottom">
                            <h3 align="center">{course.name}</h3>
                            <h3 align="center">{module.name}</h3>
                            <h4 align="center">Scores</h4>
                        </div>
                        <div className="card-body">
                            <table className="ui striped selectable celled table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">score</th>
                                        <th scope="col">_id</th>
                                        <th scope="col">nick name</th>
                                        <th scope="col">password</th>
                                        <th scope="col">name</th>
                                        <th scope="col">last name</th>
                                        <th scope="col">career</th>
                                        <th scope="col">email</th>
                                        <th scope="col">type</th>
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
export default ScoresUsers;
