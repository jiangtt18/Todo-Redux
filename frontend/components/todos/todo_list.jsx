import React from 'react';
import TodoListItem  from "./todo_list_item";
const TodoList = ({todos}) => {
    const list =  todos.map((todo, idx) => {
        return(
            <ul key={`todo-${idx}`}>
                <TodoListItem
                    todo={todo}
                />
            </ul>
        )
    });

    return list;
};

export default TodoList;