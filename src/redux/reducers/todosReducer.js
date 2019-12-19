import { ADD_TODO, TOGGLE_TODO } from '../actions/constants';



function todos(state = [], action) {
    
    switch(action.type) {
        case ADD_TODO:
        return [...state, action.payload]
        case TOGGLE_TODO:
        let _todos = state.map((item)=> {
            if(item.id === action.id) {
                item.completed = !item.completed
            }
            return item;
        })
        return _todos
        default:
        return state;
    }
}

export default todos;