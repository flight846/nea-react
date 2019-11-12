import update from 'react-addons-update';
import {
  SAMPLE_QUERY_STATUS_SEARCH,
  SAMPLE_QUERY_STATUS_FILTER,
} from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    taskList: [],
    filteredTaskList: [],
    scannedSample: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAMPLE_QUERY_STATUS_SEARCH.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case SAMPLE_QUERY_STATUS_SEARCH.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: payload },
          filteredTaskList: { $set: payload },
        },
      });
    case SAMPLE_QUERY_STATUS_SEARCH.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: [] },
        },
      });
    case SAMPLE_QUERY_STATUS_FILTER:
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
