import {SET_PRODUCT_DETAILS, CLEAR_PRODUCT_DETAILS} from '../constants';

const initialState = {
    productDeatils : null
}

 const productDeatilsReducer = (state ={initialState}, action)=>{
    switch(action.type){
        case SET_PRODUCT_DETAILS :        
        return {
            ...state,
            productDeatils : action.data
        }

       case CLEAR_PRODUCT_DETAILS :        
        return {
            ...state,
            productDeatils : null
        }

        default :
        return state;
    }
}

export default productDeatilsReducer;