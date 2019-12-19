import { TOGGLE_FILTER } from "./constants";


function toggleFilter(filter) {
    return {
        type: TOGGLE_FILTER,
        payload: filter
    }
}

export {toggleFilter};