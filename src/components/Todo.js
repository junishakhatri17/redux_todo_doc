import React from 'react';
import { connect } from 'react-redux';
import {toggleTodo, deleteTodo} from '../redux/actions/todoActionCreator'


class Todo extends React.Component {

    toggleTodo() {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        console.log('Todo::render()', this.props.id)
        const {completed, text } = this.props;
        return (
            <li className={completed? 'todo-item selected': 'todo-item'} onClick={()=>this.toggleTodo()}>
                <span>{completed ? "👌" : "👋"}</span><span>{text}</span>
            </li>
        )
    }
}

//export default Todo;

export default connect(null, {toggleTodo, deleteTodo})(Todo)