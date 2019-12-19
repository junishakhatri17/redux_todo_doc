import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './constants'

let counter = 1;

function addTodo(_text) {
    let payload = {id: counter, text: _text, completed: false}
    counter++;
    return {
        type: ADD_TODO,
        payload
    }
}

function deleteTodo(_id) {
    return {
        type: DELETE_TODO,
        payload: _id
    }
}

const toggleTodo = (_id)=> ({
    type: TOGGLE_TODO,
    id: _id
})

export {addTodo, deleteTodo, toggleTodo};