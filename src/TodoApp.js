import React from 'react';
import TodoList from './components/TodoList'
import AddTodo from "./components/AddTodo";
import Filters from './components/Filters';
import UserList from './components/UserList';
import { connect } from 'react-redux';



class TodoApp extends React.Component {

    render() {
        return(
            <div className="todo-app">
                <div>I am Todo app with Redux</div>
                <AddTodo></AddTodo>
                <TodoList></TodoList>
                <Filters></Filters>
                <UserList></UserList>
            </div>
        )
    }
}

export default connect()(TodoApp)

//export default TodoApp;