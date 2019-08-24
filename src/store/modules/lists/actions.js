export function doneTaskSuccess(index) {
  return {
    type: '@lists/DONE_TASK_SUCCESS',
    payload: { index },
  };
}

export function undoneTaskSuccess(index) {
  return {
    type: '@lists/UNDONE_TASK_SUCCESS',
    payload: { index },
  };
}

export function removeTaskSuccess(index) {
  return {
    type: '@lists/REMOVE_TASK_SUCCESS',
    payload: { index },
  };
}

export function addTaskRequest(data) {
  return {
    type: '@lists/ADD_TASK_REQUEST',
    payload: { data },
  };
}

export function addTaskSuccess(task) {
  return {
    type: '@lists/ADD_TASK_SUCCESS',
    payload: { task },
  };
}
