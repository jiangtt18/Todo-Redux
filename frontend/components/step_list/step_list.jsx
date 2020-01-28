import React from 'react';
import StepListItemContainer from './step_list_container'
import StepForm from './step_form'

const StepList = () => {

    return(
        <div>
            <ul><StepListItemContainer /></ul>
            <StepForm />
        </div>
    )
};
export default  StepList