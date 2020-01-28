import React, {Component} from 'react';

const StepListItem = ({step:{title, body, done}}) => {

    const toggleStep = (e) => {
        const toggledStep = Object.assign(
            {},
            this.props.step,
            {done: !this.props.step.done}
        );
        this.props.receiveStep(toggledStep)
    };

    return(
        <li>
            <input
                type='checkbox'
                name={title}
                checked={this.props.step.done}
                onChange={(e) => {toggleStep(e)}}/>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={this.props.removeStep}>Delete</button>
        </li>
    )
};

export default StepListItem;