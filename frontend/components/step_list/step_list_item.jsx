import React from 'react';

const StepListItem = (props) => {
    const {step:{title, body, done}, removeStep, receiveStep} = props;

    const toggleStep = (e) => {
        const toggledStep = Object.assign(
            {},
            props.step,
            {done: !done}
        );
        receiveStep(toggledStep)
    };

    return(
        <li>
            <input
                type='checkbox'
                name={title}
                checked={done}
                onChange={(e) => {toggleStep(e)}}/>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={removeStep}>Delete</button>
        </li>
    )
};

export default StepListItem;