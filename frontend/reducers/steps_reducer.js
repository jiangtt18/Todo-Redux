import {RECEIVE_STEPS, REMOVE_STEP, RECEIVE_STEP} from "../actions/steps_actions";

const stepsReducer = (state = sample.steps, action) => {
    Object.freeze(state);
    let nextState = {};
    switch(action.type){
        case RECEIVE_STEPS:
           nextState =  Object.assign({}, state );
           action.steps.forEach(step => nextState[step.id] = step);
           return nextState;
        case RECEIVE_STEP:
            nextState = Object.assign({}, state, {[action.step.id]: action.step});
            return nextState;
        case REMOVE_STEP:
            nextState = Object.assign({}, state);
            delete nextState[action.id];
            return nextState;
        default:
            return state;
    }
};

const sample = {
    todos: {
        1: {
            id: 1,
            title: 'take a shower',
            body: 'and be clean',
            done: false
        }
    },
    steps: {
        1: { // this is the step with id = 1
            id: 1,
            title: 'walk to store',
            done: false,
            todoId: 1
        },
        2: { // this is the step with id = 2
            id: 2,
            title: 'buy soap',
            done: false,
            todoId: 1
        }
    }
};

export default stepsReducer;

