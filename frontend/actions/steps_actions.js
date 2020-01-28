export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receive_steps = (steps) => {
    return({
        type: RECEIVE_STEPS,
        steps: steps,
    })
};

export const receive_step = (step) => {
    return ({
        type: RECEIVE_STEP,
        step: step,
    })
};

export const remove_step = (id) => {
    return ({
        type: REMOVE_STEP,
        id: id,
    })
};