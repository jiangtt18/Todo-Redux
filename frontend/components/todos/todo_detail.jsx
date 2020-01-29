import React from 'react';
import StepListContainer from '../step_list/step_list_container';

const TodoDetail = ({todo, removeTodo}) => {
    return(
        <div>
            <p>{todo.body}</p>
            <StepListContainer todo={todo}/>
            <button onClick={removeTodo}>Delete Todo</button>
        </div>
    )
};

export default TodoDetail;