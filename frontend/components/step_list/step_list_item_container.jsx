import {connect} from 'react-redux';
import StepListItem from './step_list_item';

import {removeStep, receiveStep} from "../../actions/steps_actions";

const mapDispatchToProps = (dispatch, ownProps) => {
    return(
        {
            removeStep: () => dispatch(removeStep(ownProps.todoId)),
            receiveStep: (step) => dispatch(receiveStep(step))
        }
    )
};

export default connect(
    null,
    mapDispatchToProps
)(StepListItem)