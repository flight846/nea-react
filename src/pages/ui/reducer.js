import update from 'react-addons-update';
import { GLOBAL_ACTIONS } from './action';

const initialState = {
  listTasksClaim: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.GET_LIST_TASKS_CLAIM: {
      return update(state, {
        listTasksClaim: { $set: action.payload },
      });
    }
    default:
      return state;
  }
};
