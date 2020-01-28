import React, {Component} from 'react';
import {uniqueId} from '../../util/todo';

class StepForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
            todo_id: this.props.todoId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property){
        return e => this.setState({[property]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({title: '', body: ''})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input
                        value={this.state.title}
                        onChange={this.update('title')}
                        required
                    />
                </label>
                <label>
                    <input
                        value={this.state.body}
                        onChange={this.update('body')}
                        required
                    />>
                </label>
            </form>
        )
    }
};

export export StepForm;