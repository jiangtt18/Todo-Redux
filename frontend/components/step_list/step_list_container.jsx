import {connect} from 'react-redux';
import StepList from './step_list';

import {stepsByTodoId} from "../../reducers/selectors";
import {receiveStep} from "../../actions/steps_actions";

const mapStateToProps = (state, ownProps) => {
    return (
        {
            steps: stepsByTodoId(state.steps, ownProps.todoId),
            todoId: ownProps.todoId,
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