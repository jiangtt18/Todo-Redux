export const allTodos = (state) => {
    let keys = Object.keys(state);
    return Object.values(state.todos);
};

export const stepsByTodoId = (steps, todoId) => {
    let fitlered =  Object.values(steps)
                 .filter(step => step.todoId === todoId);
    return Object.values(fitlered);
};