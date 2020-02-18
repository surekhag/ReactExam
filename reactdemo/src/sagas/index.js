import { all, fork } from 'redux-saga/effects';

import  watchLoginSaga  from './watchers/login';
import watchSearchSaga  from './watchers/search';
import watchProductDetailsSaga from './watchers/productDetails'

export default function* rootSaga() {    
  yield all([
    fork(watchLoginSaga),
    fork(watchSearchSaga),
    fork(watchProductDetailsSaga) 
  ])
}

 