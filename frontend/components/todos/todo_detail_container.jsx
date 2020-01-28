import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';

import {deleteTodo} from '../../actions/todo_actions';
import {receiveSteps} from "../../actions/steps_actions";

// mapDispatchToProps takes two argument
// first: dispatch; second: ownProps
const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        removeTodo: () => dispatch(deleteTodo(ownProps.id)),
        receiveSteps: (steps) => dispatch(receiveSteps(steps)),

    })
};

export default connect(
    null,
    mapDispatchToProps
)(TodoDetailView)