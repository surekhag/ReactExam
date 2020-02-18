import axios from 'axios';

const searchApi = (payload)=>{
const searchTerm =payload.searchTerm;
    const url ='http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search';
    
    const headers = {
        'Bepsy-SiteId': 'siteUS',
        'Bepsy-CatalogId': 'cloudCatalog',
        'Bepsy-PricelistId': 'defaultPriceGroup',        
        'Content-Type': 'application/json'
    };
    const data =  {
    "term": searchTerm,
	"sortBy": "new asc",
	"page": 0,
	"recordsPerPage": 20,
	"heirarchical": [],
	"multiselect": [],
	"singleselect": [],
	"range": []
    };

    return axios(
        {url : url, 
        headers : headers,
        data : data,    
        method : 'post'
    });
  
}
export {searchApi};

