import { all, takeLatest, put } from 'redux-saga/effects';

import { addTaskSuccess } from './actions';
import { getNewId } from '~/services/api';

export function* newTask({ payload }) {
  const { data } = payload;
  const task = {
    id: getNewId(),
    ...data,
  };

  console.log(task);

  yield put(addTaskSuccess(task));
}

export default all([takeLatest('@lists/ADD_TASK_REQUEST', newTask)]);
