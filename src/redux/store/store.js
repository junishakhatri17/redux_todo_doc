import {createStore, applyMiddleware} from 'redux';
import root from '../reducers/'
import {FILTER} from '../actions/constants'
//import thunk from 'redux-thunk'
import getUsers from '../actions/users';
//
//import logger from 'redux-logger'


const initialState = {
    todos: [],
    filter: {
        selected: FILTER.ALL
    },
    users: {
        list: [],
        loading: false
    }
}

let store = createStore(root,initialState)
//store.dispatch(getUsers())
export default store;





