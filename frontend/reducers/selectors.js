export const allTodos = (state) => {
    let keys = Object.keys(state);
    return Object.values(state.todos);
};

export const stepsByTodoId = ( state, todoId) => {
    return Object.values(state.steps)
                 .filter(step => step.todoId === todoId);
};