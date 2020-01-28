import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from "./store/store";
// import {receiveTodo, receiveTodos} from "./actions/todo_actions";
import {receiveStep, receiveSteps, removeStep} from "./actions/steps_actions";
import {allTodos, stepsByTodoId} from "./reducers/selectors";
import Root from '../frontend/components/root'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');
    const store = configureStore();
    window.store = store;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    window.stepsByTodoId = stepsByTodoId;
    ReactDOM.render(<Root store={store} />, root);
});