import produce from 'immer';
import { loadLists, getNewId } from '~/services/api';

console.log(getNewId());
const data = loadLists();

const INITIAL_STATE = {
  lists: data,
};

export default function lists(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@lists/DONE_TASK_SUCCESS':
        console.log(data);
        draft.lists[action.payload.index].completed = true;
        break;
      case '@lists/UNDONE_TASK_SUCCESS':
        draft.lists[action.payload.index].completed = false;
        break;
      case '@lists/ADD_TASK_SUCCESS':
        draft.lists.push(action.payload.task);
        break;
      default:
        return state;
    }
  });
}
