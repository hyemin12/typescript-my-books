import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { booksSaga } from './book';

export default function* rootSaga() {
  yield all([authSaga(), booksSaga()]);
}
