import { connect } from 'react-redux';
import Counter from './CounterRedux';
import {
    increment,
    decrement,
    reset,
} from '../../redux/actions/ActionsCounter';

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
