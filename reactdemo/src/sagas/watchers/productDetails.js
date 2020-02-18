import { put, takeLatest, call } from 'redux-saga/effects';
import {  GET_PRODUCT_DETAILS, SET_ERROR_STATE } from '../../constants';
import {setProductDetails, clearProductDetails} from '../../actions/productDetailsActions';
import {productDetailsApi} from '../../apis/productDetailsApi';

function* workerProductDetailsSaga(productId) {   
    try {
    yield put(clearProductDetails());
      const response = yield call(productDetailsApi, productId);      
      yield put(setProductDetails(response.data.productList[0]));      
    } catch (err) {        
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        yield put({ type: SET_ERROR_STATE, errorData });
        
      }
    }
  }
  
  export default function* watchProductDetailsSaga() {      
     yield takeLatest(
      GET_PRODUCT_DETAILS,
        workerProductDetailsSaga
    );
  }