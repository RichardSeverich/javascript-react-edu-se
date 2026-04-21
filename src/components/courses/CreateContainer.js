import { connect } from 'react-redux';
import Create from './Create';
import { add } from '../../redux/actions/ActionsCourse';

const mapDispatchToProps = (dispatch) => {
    return {
        add: (newCourse) => dispatch(add(newCourse)),
    };
};

export default connect(null, mapDispatchToProps)(Create);
