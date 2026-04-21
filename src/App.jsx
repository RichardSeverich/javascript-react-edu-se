import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

// Components
import Content from './components/content/Content';

// Redux
import { createStore, combineReducers } from 'redux';
import reducerCounter from './redux/reducers/ReducerCounter';
import reducerUser from './redux/reducers/ReducerUser';
import reducerCourse from './redux/reducers/ReducerCourse';
import reducerModule from './redux/reducers/ReducerModule';
import reducerCourseUser from './redux/reducers/ReducerCourseUser';
import reducerCourseModule from './redux/reducers/ReducerCourseModule';
import reducerScore from './redux/reducers/ReducerScore';

// Mock data
import { users } from './mock-data/users.json';
import { courses } from './mock-data/courses.json';
import { modules } from './mock-data/modules.json';
import { coursesUsers } from './mock-data/courses-users.json';
import { coursesModules } from './mock-data/courses-modules.json';
import { scores } from './mock-data/scores.json';

let rootReducer = combineReducers({
  users: reducerUser,
  courses: reducerCourse,
  modules: reducerModule,
  coursesUsers: reducerCourseUser,
  coursesModules: reducerCourseModule,
  scores: reducerScore,
  counter: reducerCounter,
});

const initialState = {
  users: users,
  courses: courses,
  modules: modules,
  coursesUsers: coursesUsers,
  coursesModules: coursesModules,
  scores: scores,
  counter: 0,
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };
  render() {
    const { children } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
          <Content body={children}></Content>
        </div>
      </Provider>
    );
  }
}

export default App;
