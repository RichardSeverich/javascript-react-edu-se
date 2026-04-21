import { connect } from 'react-redux';
import ShowInsCourses from './ShowInsCourses';

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    };
};

export default connect(mapStateToProps)(ShowInsCourses);
