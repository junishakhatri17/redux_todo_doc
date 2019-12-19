import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'; 
import { FILTER } from '../redux/actions/constants';



class TodoList extends React.Component {

        
    render() {
        console.log('TodoList:: render()')
        return (
            <div className="todo-list">
              { this.props.todos ? this.props.todos.map((item, i)=>{
                   return <Todo key={i} {...item}></Todo>
               }) : null
              } 
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('TodoList:: mapStateToProps')
    if(state.filter.selected===FILTER.COMPELETED) {
       return{
           todos: state.todos.filter((item)=> item.completed)
       } 
    } 
    return {todos: state.todos};
}

//export default TodoList;
export default connect(mapStateToProps) (TodoList)
