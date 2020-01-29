import {connect} from 'react-redux';
import StepList from './step_list';

import {stepsByTodoId} from "../../reducers/selectors";
import {receiveStep} from "../../actions/steps_actions";

const mapStateToProps = (state, ownProps) => {
    return (
        {
            steps: stepsByTodoId(state.steps, ownProps.todo.id),
            todoId: ownProps.todo.id,
        }
    )
};

const mapDispatchToProps = dispatch => {
    return(
        {
            receiveStep:(step) => dispatch(receiveStep(step))
        }
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(StepList)