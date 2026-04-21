import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './../modules/Show.css';

class ShowPlan extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(id, remove) {
        remove(id);
        alert('deleted successfully');
    }

    render() {
        const { modules, coursesModules, remove } = this.props;
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
export default ShowPlan;
