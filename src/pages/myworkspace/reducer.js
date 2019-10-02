import update from 'react-addons-update';
import { ANALYST_TASK_SEARCH, ANALYST_TASK_FILTER } from './action';

const initialState = {
  ui: {
    isLoading: false,
  },
  data: {
    taskList: [],
    filteredTaskList: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ANALYST_TASK_SEARCH.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case ANALYST_TASK_SEARCH.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: payload },
          filteredTaskList: { $set: payload },
        },
      });
    case ANALYST_TASK_SEARCH.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: [] },
        },
      });
    case ANALYST_TASK_FILTER:
      return update(state, {
        data: {
          filteredTaskList: { $set: payload },
        },
      });
    default:
      return state;
  }
};

export default reducer;
