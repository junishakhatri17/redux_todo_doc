import {combineReducers} from 'redux'
import todos from './todosReducer'
import filter from './filterReducer'
import users from './users'





export default combineReducers({todos, filter, users})
