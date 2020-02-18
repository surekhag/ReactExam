import { put, takeLatest, call } from 'redux-saga/effects';
import {SIGN_IN_TO_SITE, SET_ERROR_STATE } from '../../constants';

// import {setUserData} from '../actions/loginActions';
import {loginToSiteApi} from '../../apis/loginApi';

function* workerLoginSaga(data) {   
    localStorage.clear();              
    try {        
      const response = yield call(loginToSiteApi, data);      
      localStorage.setItem('token', response.data.access_token);    
      window.location.href = '/search';
    } catch (err) {        
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        yield put({ type: SET_ERROR_STATE, errorData });
        
      }
    }
  }
  
  export default function* watchLoginSaga() {     
    yield takeLatest(
        SIGN_IN_TO_SITE,
        workerLoginSaga
    );
  }