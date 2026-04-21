import { connect } from 'react-redux';
import CreatePlan from './CreatePlan';
import { add } from '../../redux/actions/ActionsCourseModule';

const mapStateToProps = (state) => {
    return {
        modules: state.modules,
        coursesModules: state.coursesModules,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (courseModule) => dispatch(add(courseModule)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlan);
