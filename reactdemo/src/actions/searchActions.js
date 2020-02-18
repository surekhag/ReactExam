import {SEARCH_PRODUCT, SET_SEARCH_PRODUCT_RESULT, CLEAR_SEARCH_RESULT} from '../constants';

export const searchProduct =(searchTerm)=>{  
    return {
            type : SEARCH_PRODUCT,
            searchTerm            
        }
}

export const setSearchProductResult =(searchResult)=>{  
    return {
            type : SET_SEARCH_PRODUCT_RESULT,
            searchResult            
        }
}


export const clearSearchResult =()=>{  
    return {
            type : CLEAR_SEARCH_RESULT,                  
        }
}
