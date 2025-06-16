import { put, takeLatest, delay } from 'redux-saga/effects';
import { loadDataRequest, loadDataSuccess } from './uiSlice';

function* handleLoadData() {
  yield delay(500);
  yield put(loadDataSuccess());
}

export function* watchLoadData() {
  yield takeLatest(loadDataRequest.type, handleLoadData);
}
