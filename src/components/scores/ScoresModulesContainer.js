import { connect } from 'react-redux';
import ScoresModules from './ScoresModules';

const mapStateToProps = (state) => {
    return {
        modules: state.modules,
        coursesModules: state.coursesModules,
    };
};

export default connect(mapStateToProps)(ScoresModules);
