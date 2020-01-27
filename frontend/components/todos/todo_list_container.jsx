import {connect} from 'react-redux';
import TodoList from "./todo_list";

import {receiveTodos, receiveTodo, deleteTodo} from "../../actions/todo_actions";
import {allTodos} from '../../reducers/selectors'

const mapStateToProps = (state) => {
    return (
        {
            todos: allTodos(state)
        }
    )
};

const mapDispatchToProps = (dispatch) => {
    return(
        {
            receiveTodo: todo => dispatch(receiveTodo(todo)),
            deleteTodo: id => dispatch(deleteTodo(id))
        }
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);