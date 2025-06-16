import { all, fork } from 'redux-saga/effects';
import { watchLoadData } from './uiSaga';

export default function* rootSaga() {
  yield all([fork(watchLoadData)]);
}
