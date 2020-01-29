import React, {Component} from 'react';
import TodoDetailContainer from './todo_detail_container'

class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            detail: false,
        };
        this.updateState = this.updateState.bind(this)
    }

    updateState(e){
        e.preventDefault();
        this.setState(prevstate => ({detail: !prevstate.detail}))
    };

    onChange(e){
        // Note: do not use preventDefault. make checkbox unchecked
        // e.preventDefault();
        const {todo, receiveTodo} = this.props;
        e.stopPropagation();
        // do not use e.target.checked
        let status = {done: !todo.done};
        receiveTodo({...todo, ...status})
    };

    render(){
        const {todo} = this.props;
        const {detail} = this.state;
        return (
            <div>
                <span><input type='checkbox' name={todo.title} checked={todo.done} onChange={(e) =>this.onChange(e)}/></span>
                <span onClick={(e) => this.updateState(e)}>{todo.title}</span>
                {detail && <TodoDetailContainer todo={todo}/>}
            </div>
        );
    }
};

export default TodoListItem;