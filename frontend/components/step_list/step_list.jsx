import React from 'react';
import StepListItemContainer from './step_list_container'
import StepFrom from './StepFrom'

const StepList = () => {

    return(
        <div>
            <ul><StepListItemContainer />></ul>
            <StepFrom />
        </div>
    )
};
export default  StepList