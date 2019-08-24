import { all } from 'redux-saga/effects';

import lists from './lists/sagas';

export default function* rootSaga() {
  return yield all([lists]);
}
