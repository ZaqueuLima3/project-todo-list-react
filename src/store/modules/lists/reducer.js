import produce from 'immer';
import { loadLists } from '~/services/api';

const data = loadLists();

const INITIAL_STATE = {
  lists: data,
};

export default function lists(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@lists/DONE_TASK_SUCCESS':
        draft.lists[action.payload.index].completed = true;
        break;
      case '@lists/UNDONE_TASK_SUCCESS':
        draft.lists[action.payload.index].completed = false;
        break;
      case '@lists/ADD_TASK_SUCCESS':
        draft.lists.unshift(action.payload.task);
        break;
      case '@lists/REMOVE_TASK_SUCCESS':
        draft.lists.splice(action.payload.index, 1);
        break;
      default:
        return state;
    }
  });
}
