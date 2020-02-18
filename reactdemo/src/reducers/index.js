import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import productDeatilsReducer from './productDeatilsReducer';

export default combineReducers({    
    loginReducer,
    searchReducer,
    productDeatilsReducer
})
