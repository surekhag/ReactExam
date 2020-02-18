import axios from 'axios';

const productDetailsApi = (payload)=>{
const id= payload.productId;
    const url ='http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/products/' + id +'?includeErelatedProducts=true';
    
    const headers = {
        'Bepsy-SiteId': 'siteUS',
        'Bepsy-CatalogId': 'cloudCatalog',
        'Bepsy-PricelistId': 'defaultPriceGroup',        
        // 'Content-Type': 'application/json'
    };

    return axios(
        {url : url, 
        headers : headers,
        // data : data,    
        method : 'get'
    });  
}

export {productDetailsApi};

