import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_LOADING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants.js';

export const setSearchField = (text) => ({
    //console.log(text);
    //return{
    type: CHANGE_SEARCH_FIELD,
    payload: text
    //}
})

//requestRobots is 'higher order function'
//the 1st layer function that takes no param would run the code below, then  
//return everything in this function to the second layer function
//the second layer function takes param 'dispatch' will run the same code below
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_LOADING });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}