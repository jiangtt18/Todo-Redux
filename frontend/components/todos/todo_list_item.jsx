import React from 'react';

const TodoListItem = ({todo, deleteTodo, onChange}) => {
    // Warning: do not put onChange method here. it will only render return below. it will not rerender the
    // the global state, and hence todo on line 8 points to the unupdated todo.
    // move onChange to parent component will force parent and its children to rerender
    // this is advantage of using redux.
    return(
        <div>
            <span><input type='checkbox' name={todo.title} checked={todo.done} onChange={(e) => onChange(e, todo)}/></span>
            <span>{todo.title}</span>
            <span onClick={() => deleteTodo(todo.id)}> <button>Delete</button></span>
        </div>
    )
};

export default TodoListItem;