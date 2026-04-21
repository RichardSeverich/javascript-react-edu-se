import { connect } from 'react-redux';
import ScoresCourses from './ScoresCourses';

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    };
};

export default connect(mapStateToProps)(ScoresCourses);
