import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps)(Login);
