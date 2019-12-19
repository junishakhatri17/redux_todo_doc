import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "./constants";



function getUsers() {




    return (dispatch) => {

        
        dispatch({type: GET_USERS});

        let userPromise = fetch('https://api.github.com/users');

        userPromise.then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            dispatch({type:GET_USERS_SUCCESS, payload: response})
        }).catch((failure)=>{
            dispatch({type:GET_USERS_FAILURE, payload: failure})
        })


    }
        

        

       


















   // console.log('I am going to be an async actions creator');


    // const promise = fetch('https://api.github.com/users')
    // promise.
    // then((response)=> response.json()).
    // then((response)=> {
    //     console.log('github users', response)
    //     store.dispatch({
    //         type: GET_USERS_SUCCESS,
    //         payload: response
    //     })
        
    // })
    
    // return {
    //     type: GET_USERS,
    // }

    // return dispatch => {
    //     dispatch({type: GET_USERS})

    //     const userPromise = fetch('https://api.github.com/users')
    //     userPromise.then((success)=>{
    //         return success.json();
    //     }).then((response)=>{
    //         //console.log('promise response:', response)
    //         dispatch({type: GET_USERS_SUCCESS, payload: response})
    //     })
    //     return userPromise;
    // }
}


export default getUsers