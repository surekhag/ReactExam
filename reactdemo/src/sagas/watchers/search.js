import { put, takeLatest, call } from 'redux-saga/effects';
import { SEARCH_PRODUCT, SET_ERROR_STATE } from '../../constants';
import {setSearchProductResult, clearSearchResult} from '../../actions/searchActions';
import {searchApi} from '../../apis/searchApi';

function* workerSearchSaga(searchTerm) { 
   
    try {
    yield put(clearSearchResult());
      const response = yield call(searchApi, searchTerm);    
      yield put(setSearchProductResult(response.data.response.records));
      
    } catch (err) {        
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        yield put({ type: SET_ERROR_STATE, errorData });
        
      }
    }
  }
  
  export default function* watchSearchSaga() { 
     yield takeLatest(
        SEARCH_PRODUCT,
        workerSearchSaga
    );
  }