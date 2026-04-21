import { connect } from 'react-redux';
import ScoresUsers from './ScoresUsers';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        coursesUsers: state.coursesUsers,
        scores: state.scores,
    };
};

export default connect(mapStateToProps)(ScoresUsers);
