import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './../modules/Show.css';

class ShowPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayModules: [],
        };
        this.register = this.register.bind(this);
    }

    register(coursesModules, module_id, course_id, add) {
        let last = coursesModules[coursesModules.length - 1];
        let id = (parseInt(last._id, 10) + 1).toString();
        let newPlan = {
            _id: id,
            course_id: course_id,
            module_id: module_id,
        };
        add(newPlan);
        this.setState(() => {
            return { arrayModules: [] };
        });
        alert('successfully');
    }

    render() {
        const { modules, coursesModules, add } = this.props;
        const course = this.props.location.course;
        let course_id = course._id;
        for (var i = 0; i < modules.length; i += 1) {
            let band = true;
            let module = modules[i];
            for (var j = 0; j < coursesModules.length; j += 1) {
                let courseModule = coursesModules[j];
                let courseExist = course_id === courseModule.course_id;
                let moduleExist = module._id === courseModule.module_id;
                if (courseExist && moduleExist) {
                    band = false;
                    break;
                }
            }
            if (band) {
                this.state.arrayModules.push(module);
            }
        }
        const rows = this.state.arrayModules.map((module, i) => {
            let module_id = module._id;
            return (
                <tr key={module._id}>
                    <td scope="col">
                        <input type="checkbox"></input>
                    </td>
                    <td scope="col">{module._id}</td>
                    <td scope="col">{module.name}</td>
                    <td scope="col">
                        <button
                            onClick={this.register.bind(
                                this,
                                coursesModules,
                                module_id,
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
                    <div className="card-modules">
                        <div className="margin-bottom">
                            <h3 align="center">{course.name}</h3>
                            <h4 align="center">Plans</h4>
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
