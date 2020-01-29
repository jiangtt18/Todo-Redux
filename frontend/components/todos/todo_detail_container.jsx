import {connect} from 'react-redux';
import TodoDetail from './todo_detail';

import {deleteTodo} from '../../actions/todo_actions';
import {receiveSteps} from "../../actions/steps_actions";

// mapDispatchToProps takes two argument
// first: dispatch; second: ownProps
const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        removeTodo: () => dispatch(deleteTodo(ownProps.todo.id)),
        receiveSteps: (steps) => dispatch(receiveSteps(steps)),

    })
};

export default connect(
    null,
    mapDispatchToProps
)(TodoDetail)