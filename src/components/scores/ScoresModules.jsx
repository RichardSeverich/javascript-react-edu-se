import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './../modules/Show.css';

class ScoresModules extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(course, module) {
        this.props.history.push({
            pathname: '/scores-users',
            course: course,
            module: module,
        });
    }

    render() {
        const { modules, coursesModules } = this.props;
        const course = this.props.location.course;
        let coursesModulesSpecific = coursesModules.filter((element, index) => {
            return course._id === element.course_id;
        });
        let modulesSpecific = [];
        coursesModulesSpecific.forEach(function (elementCourseModule, index) {
            let module = modules.find(
                (elementModule) => elementModule._id === elementCourseModule.module_id
            );
            module.CourseModuleId = elementCourseModule._id;
            modulesSpecific.push(module);
        });
        const rows = modulesSpecific.map((module, i) => {
            let _id = module.CourseModuleId;
            return (
                <tr key={module._id}>
                    <td scope="col">
                        <input type="checkbox"></input>
                    </td>
                    <td scope="col">{module._id}</td>
                    <td scope="col">{module.name}</td>
                    <td scope="col">
                        <button
                            onClick={this.navigate.bind(this, course, module)}
                            className="ui basic button"
                        >
                            <i className="search plus icon"></i>
              details
                        </button>
                    </td>
                </tr>
            );
        });
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div align="center">
                    <div className="card-modules">
                        <div className="margin-bottom">
                            <h3 align="center">{course.name}</h3>
                            <h4 align="center">Registered Modules</h4>
                        </div>
                        <div className="card-body">
                            <table className="ui striped selectable celled table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">_id</th>
                                        <th scope="col">name</th>
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
export default ScoresModules;
