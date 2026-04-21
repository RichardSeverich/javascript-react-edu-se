import { connect } from 'react-redux';
import CreatePlanCourses from './CreatePlanCourses';

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    };
};

export default connect(mapStateToProps)(CreatePlanCourses);
