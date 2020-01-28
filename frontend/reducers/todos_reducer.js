import {RECEIVE_TODOS, RECEIVE_TODO, DELETE_TODO} from '../actions/todo_actions'

const todoReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TODOS:
            const newTodos = action.todos.reduce((accu, cur) => {
                let id = cur.id;
                accu[id] = cur;
                return accu;
            }, {});
            return newTodos;
            break;
        case RECEIVE_TODO:
            const newTodo = action.todo;
            let id = newTodo.id;
            return Object.assign({}, state, {[id]: newTodo});
            break;
        case DELETE_TODO:
            const deleteId = action.id;
            const result = {};
            let stateDup = Object.assign({}, state);
            delete stateDup[deleteId];
            return stateDup;
            break;
        default:
            return state;
    }
};

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

export default todoReducer;