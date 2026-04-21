import { connect } from 'react-redux';
import Show from './Show';
import { remove } from '../../redux/actions/ActionsUser';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        inscriptions: state.coursesUsers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(remove(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
