import React from 'react';
import TodoListItem  from "./todo_list_item";
import TodoFrom from './todo_form';

const TodoList = ({todos, receiveTodo, deleteTodo}) => {
    let onChange = (e, todo) => {
        // Note: do not use prevnetDefault. make checkbox unchecked
        // e.preventDefault();
        e.stopPropagation();
        let status = {done: e.target.checked};
        debugger
        receiveTodo({...todo, ...status})
    };

    const list =  todos.map((todo, idx) => {
        return(
            <li key={`todo-${idx}`}>
                <TodoListItem
                    deleteTodo={deleteTodo}
                    onChange={onChange}
                    todo={todo}
                />
            </li>
        )
    });

    return (
        <div>
            <TodoFrom receiveTodo={receiveTodo}/>
            <ul>{list}</ul>
        </div>

    )
};

export default TodoList;