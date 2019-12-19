import { GET_USERS, GET_USERS_SUCCESS } from "../actions/constants";



function users(state={}, action) {
    if(action.type === GET_USERS) {
        console.log('User reducer:: action: ', action)
        return {
            ...state,
            loading: true
        };
    }

    if(action.type === GET_USERS_SUCCESS) {
        console.log('User reducer:: action: ', action)
        return {
            ...state,
            list: [...state.list, ...action.payload],
            loading: false
        }
    }
    return state;
}

export default users;