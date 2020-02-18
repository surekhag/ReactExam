import {SET_USERS_DATA, SET_ERROR_STATE} from '../constants';

const initialState = {
error : null
}

 const loginReducer = (state ={initialState}, action)=>{

    switch(action.type){
       case SET_ERROR_STATE :        
        return {
            ...state,
            error : action.errorData
        }

        default :
        return state;
    }
}

export default loginReducer;