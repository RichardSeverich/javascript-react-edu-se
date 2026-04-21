import { connect } from 'react-redux';
import Create from './Create';
import { add } from '../../redux/actions/ActionsScore';

const mapDispatchToProps = (dispatch) => {
    return {
        add: (newScore) => dispatch(add(newScore)),
    };
};

const mapStateToProps = (state) => {
    return {
        scores: state.scores,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
