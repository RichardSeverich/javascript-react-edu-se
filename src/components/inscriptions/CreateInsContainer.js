import { connect } from 'react-redux';
import CreateIns from './CreateIns';
import { add } from '../../redux/actions/ActionsCourseUser';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        coursesUsers: state.coursesUsers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (courseUser) => dispatch(add(courseUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateIns);
