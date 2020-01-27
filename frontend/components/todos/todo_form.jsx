import React, {Component} from 'react';
import {uniqueId} from "../../util/todo";

let initialState = {title:'' , done:false };
class TodoFrom extends Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            done: false,
        };

        this.updateTodo = this.updateTodo.bind(this)
    }

   updateTodo(e){
        e.preventDefault();
        this.setState({title: e.target.value, done: false});
    };

    onSubmit(){
        let todo = Object.assign({}, this.state, {id: uniqueId()});
        this.props.receiveTodo(todo);
        this.setState(initialState);
    }

    render(){
        return(
            <div>
                <input
                    type='text'
                    onChange={e => this.updateTodo(e)} />
                 <button onClick={() => this.onSubmit()}>Submit</button>
            </div>
        )
    }
}

export default TodoFrom;