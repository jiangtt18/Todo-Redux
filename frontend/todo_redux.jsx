import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from "./store/store";
import {receiveTodo, receiveTodos} from "./actions/todo_actions";
import {allTodos} from "./reducers/selectors";
import Root from '../frontend/components/root'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    ReactDOM.render(<Root store={store} />, root);
});