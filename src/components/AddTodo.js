import React from 'react';
import {addTodo} from '../redux/actions/todoActionCreator'
import {connect} from 'react-redux'

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.textTodo = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addTodo(this.textTodo.current.value);
        this.textTodo.current.value = '';
    }

    render() {
        return (
            <form className="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="todo..." required ref={this.textTodo}/>
                <input type="submit" value="Add Todo"/>
            </form>
        )
    }
}


//export default AddTodo;
export default connect(null, {addTodo})(AddTodo)





//export default connect(null,{addTodo})(AddTodo)



