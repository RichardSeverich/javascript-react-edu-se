import { connect } from 'react-redux';
import Show from './Show';
import { remove } from '../../redux/actions/ActionsModule';

const mapStateToProps = (state) => {
    return {
        modules: state.modules,
        plans: state.coursesModules,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(remove(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
