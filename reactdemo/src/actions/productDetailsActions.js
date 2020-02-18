import {GET_PRODUCT_DETAILS, SET_PRODUCT_DETAILS, CLEAR_PRODUCT_DETAILS} from '../constants';

export const getProductDetails =(productId)=>{      
    return {
            type : GET_PRODUCT_DETAILS,
            productId            
        }
}

export const setProductDetails =(data)=>{    
    return {
            type : SET_PRODUCT_DETAILS,
            data            
        }
}

export const clearProductDetails =()=>{  
    return {
            type : CLEAR_PRODUCT_DETAILS,                        
        }
}