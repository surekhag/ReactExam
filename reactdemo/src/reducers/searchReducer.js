import {SET_SEARCH_PRODUCT_RESULT, CLEAR_SEARCH_RESULT} from '../constants';

const initialState = {
searchResult : null,
// error : null
}

 const searchReducer = (state ={initialState}, action)=>{
    switch(action.type){
       case SET_SEARCH_PRODUCT_RESULT :        
        return {
            ...state,
            searchResult : action.searchResult
        }
        case CLEAR_SEARCH_RESULT:            
           return {
                ...state,
                searchResult : null
            }

        default :
        return state;
    }
}

export default searchReducer;