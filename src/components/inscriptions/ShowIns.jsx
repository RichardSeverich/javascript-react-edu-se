import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './../users/Show.css';

class ShowIns extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(id, remove, coursesUsers) {
        remove(id);
        alert('deleted successfully');
    }

    render() {
        const { users, coursesUsers, remove } = this.props;
        const course = this.props.location.course;
        let coursesUsersSpecific = coursesUsers.filter((element, index) => {
            return course._id === element.course_id;
        });
        let usersSpecific = [];
        coursesUsersSpecific.forEach(function (elementCourseUser, index) {
            let user = users.find(
                (elementUser) => elementUser._id === elementCourseUser.user_id
            );
            if (user) {
                user.CourseUserId = elementCourseUser._id;
                usersSpecific.push(user);
            }
        });
        const rows = usersSpecific.map((user, i) => {
            let _id = user.CourseUserId;
            return (
                <tr key={user._id}>
                    <td scope="col">
                        <input type="checkbox"></input>
                    </td>
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
                            onClick={this.delete.bind(this, _id, remove)}
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
                    <div className="card-users">
                        <div className="margin-bottom">
                            <h3 align="center">{course.name}</h3>
                            <h4 align="center">Registered Users</h4>
                        </div>
                        <div className="card-body">
                            <table className="ui striped selectable celled table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
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
export default ShowIns;
