import { connect } from 'react-redux';
import ShowPlanCourses from './ShowPlanCourses';

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    };
};

export default connect(mapStateToProps)(ShowPlanCourses);
