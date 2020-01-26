import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from "./store/store";
import {receiveTodo, receiveTodos} from "./actions/todo_actions";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    ReactDOM.render( <h1>todo</h1>, root);
})