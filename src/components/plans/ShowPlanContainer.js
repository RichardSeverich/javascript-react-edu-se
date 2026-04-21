import { connect } from 'react-redux';
import ShowPlan from './ShowPlan';
import { remove } from '../../redux/actions/ActionsCourseModule';

const mapStateToProps = (state) => {
    return {
        modules: state.modules,
        coursesModules: state.coursesModules,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(remove(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPlan);
