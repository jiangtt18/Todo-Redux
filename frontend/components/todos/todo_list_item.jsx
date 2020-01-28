import React, {Component} from 'react';
import TodoDetailView from './todo_detail_view'

class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            detail: false,
        }
    }

    updateState(e){
        e.preventDefault();
        return (e) => {this.setState((prevstate) => {return {detail: !prevstate}})}
    };

    render(){
        // Warning: do not put onChange method here. it will only render return below. it will not rerender the
        // the global state, and hence todo on line 8 points to the unupdated todo.
        // move onChange to parent component will force parent and its children to rerender
        // this is advantage of using redux.
        const {todo, deleteTodo, onChange} = this.props;
        const {detail} = this.state;
        return (
            <div>
                <span><input type='checkbox' name={todo.title} checked={todo.done} onChange={(e) => onChange(e, todo)}/></span>
                <span onClick={this.updateState}>{todo.title}</span>
                {/*{detail && <TodoDetailView />}*/}
                <span onClick={() => deleteTodo(todo.id)}> <button>Delete</button></span>
            </div>
        );
    }
};

export default TodoListItem;