import React from 'react';
import TodoListItem  from "./todo_list_item";
import TodoFrom from './todo_form';

const TodoList = ({todos, receiveTodo, deleteTodo}) => {
    const list =  todos.map((todo, idx) => {
        return(
            <li key={`todo-${idx}`}>
                <TodoListItem
                    deleteTodo={deleteTodo}
                    receiveTodo={receiveTodo}
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