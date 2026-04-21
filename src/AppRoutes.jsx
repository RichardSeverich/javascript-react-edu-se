// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './components/login/LoginContainer';
import NavigationBar from './components/nav-bar/NavigationBar';
import UsersShow from './components/users/ShowContainer';
import UsersCreate from './components/users/CretateContainer';
import CoursesShow from './components/courses/ShowContainer';
import CoursesCreate from './components/courses/CreateContainer';
import ModulesShow from './components/modules/ShowContainer';
import ModulesCreate from './components/modules/CreateContainer';
import ScoresCreate from './components/scores/CreateContainer';
import Counter from './components/counter/Counter';
import CounterRedux from './components/counter-redux/CounterContainer';
import ShowInsCourses from './components/inscriptions/ShowInsCoursesContainer';
import ShowInsContainer from './components/inscriptions/ShowInsContainer';
import CreateInsCourses from './components/inscriptions/CreateInsCoursesContainer';
import CreateInsContainer from './components/inscriptions/CreateInsContainer';
import ShowPlanCourses from './components/plans/ShowPlanCoursesContainer';
import ShowPlanContainer from './components/plans/ShowPlanContainer';
import CreatePlanCourses from './components/plans/CreatePlanCoursesContainer';
import CreatePlanContainer from './components/plans/CreatePlanContainer';
import ScoresCourses from './components/scores/ScoresCoursesContainer';
import ScoresModules from './components/scores/ScoresModulesContainer';
import ScoresUsers from './components/scores/ScoresUsersContainer';

const AppRoutes = () => (
    <App>
        <Switch>
            <Route exact path="/scores-users" component={ScoresUsers} />
            <Route exact path="/scores-modules" component={ScoresModules} />
            <Route exact path="/scores-courses" component={ScoresCourses} />
            <Route exact path="/plans-createn" component={CreatePlanCourses} />
            <Route exact path="/plans-create" component={CreatePlanContainer} />
            <Route exact path="/plans-shown" component={ShowPlanCourses} />
            <Route exact path="/plans-show" component={ShowPlanContainer} />
            <Route exact path="/inscriptions-createn" component={CreateInsCourses} />
            <Route exact path="/inscriptions-create" component={CreateInsContainer} />
            <Route exact path="/inscriptions-shown" component={ShowInsCourses} />
            <Route exact path="/inscriptions-show" component={ShowInsContainer} />
            <Route exact path="/scores-create" component={ScoresCreate} />
            <Route exact path="/modules-create" component={ModulesCreate} />
            <Route exact path="/modules-show" component={ModulesShow} />
            <Route exact path="/courses-create" component={CoursesCreate} />
            <Route exact path="/courses-show" component={CoursesShow} />
            <Route exact path="/users-create" component={UsersCreate} />
            <Route exact path="/users-show" component={UsersShow} />
            <Route exact path="/nav-bar" component={NavigationBar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/counter-redux" component={CounterRedux} />
            <Route exact path="/" component={Login} />
            <Route component={Login} />
        </Switch>
    </App>
);

export default AppRoutes;
