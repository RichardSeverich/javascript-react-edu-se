import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './../users/Show.css';

class ShowIns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayUsers: [],
        };
        this.register = this.register.bind(this);
    }

    register(coursesUsers, user_id, course_id, add) {
        let last = coursesUsers[coursesUsers.length - 1];
        let id = (parseInt(last._id, 10) + 1).toString();
        let newInscription = {
            _id: id,
            course_id: course_id,
            user_id: user_id,
        };
        add(newInscription);
        this.setState(() => {
            return { arrayUsers: [] };
        });
        alert('inscription successfully');
    }

    render() {
        const { users, coursesUsers, add } = this.props;
        const course = this.props.location.course;
        let course_id = course._id;
        for (var i = 0; i < users.length; i += 1) {
            let band = true;
            let user = users[i];
            for (var j = 0; j < coursesUsers.length; j += 1) {
                let inscription = coursesUsers[j];
                let courseExist = course_id === inscription.course_id;
                let userExist = user._id === inscription.user_id;
                if (courseExist && userExist) {
                    band = false;
                    break;
                }
            }
            if (band) {
                this.state.arrayUsers.push(user);
            }
        }
        const rows = this.state.arrayUsers.map((user, i) => {
            let user_id = user._id;
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
                            onClick={this.register.bind(
                                this,
                                coursesUsers,
                                user_id,
                                course_id,
                                add
                            )}
                            className="ui basic button"
                        >
                            <i className="save icon"></i>
              Register
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
                            <h4 align="center">Inscriptions</h4>
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
