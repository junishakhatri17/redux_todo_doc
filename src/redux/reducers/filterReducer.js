import { TOGGLE_FILTER } from "../actions/constants";


function filter(state={}, action) {
    if(action.type === TOGGLE_FILTER) {
        return {
            selected: action.payload
        }
    } else {
        return state;
    }
}

export default filter;