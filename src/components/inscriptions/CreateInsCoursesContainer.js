import { connect } from 'react-redux';
import CreateInsCourses from './CreateInsCourses';

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    };
};

export default connect(mapStateToProps)(CreateInsCourses);
