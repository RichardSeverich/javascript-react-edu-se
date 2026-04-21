import { connect } from 'react-redux';
import Create from './Create';
import { add } from '../../redux/actions/ActionsUser';

const mapDispatchToProps = (dispatch) => {
    return {
        add: (newUser) => dispatch(add(newUser)),
    };
};

export default connect(null, mapDispatchToProps)(Create);
