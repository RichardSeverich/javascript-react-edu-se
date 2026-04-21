import { connect } from 'react-redux';
import Create from './Create';
import { add } from '../../redux/actions/ActionsModule';

const mapDispatchToProps = (dispatch) => {
    return {
        add: (newModule) => dispatch(add(newModule)),
    };
};

export default connect(null, mapDispatchToProps)(Create);
