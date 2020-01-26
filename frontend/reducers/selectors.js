export const allTodos = (state) => {
    let keys = Object.keys(state);
    return Object.values(state);
};