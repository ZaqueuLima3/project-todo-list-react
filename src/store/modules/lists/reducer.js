import produce from 'immer';
import { loadLists } from '~/services/api';

const data = loadLists();

const INITIAL_STATE = {
  lists: data,
};

export default function lists(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
        return state;
    }
  });
}
