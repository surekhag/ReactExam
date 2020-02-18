import axios from 'axios';

const loginToSiteApi = (payload)=>{
    const url ='http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login';
    
    const headers = {'authorization': 'Bearer YWRtaW46YWRtaW4=',
    'Content-Type': 'application/json'
    };
    const data =  {
    "username":"manoj.navale@objectedge.com",
	"password":"Objectedge$10"
    };

    return axios(
        {url : url, 
        headers : headers,
        data : data,    
        method : 'post'
    });
  
}
export {loginToSiteApi};

