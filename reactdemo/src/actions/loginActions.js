import {SIGN_IN_TO_SITE} from '../constants';

export const signinToSite =(username,password)=>{    
    return {
            type :  SIGN_IN_TO_SITE,
            payload :{
                username : username,
                password : password
            }
        }
}

