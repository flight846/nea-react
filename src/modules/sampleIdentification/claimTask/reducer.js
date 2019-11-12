import update from 'react-addons-update';
import {
  SAMPLE_TASK_SEARCH,
  SAMPLE_TASK_FILTER,
  CLAIM_SAMPLE,
  RESET_CLAIM_TASK_REDUCER,
} from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    taskList: [],
    filteredTaskList: [],
    claimFailedTasks: [],
    scannedSample: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAMPLE_TASK_SEARCH.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case SAMPLE_TASK_SEARCH.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: payload },
          filteredTaskList: { $set: payload },
        },
      });
    case SAMPLE_TASK_SEARCH.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: [] },
        },
      });
    case SAMPLE_TASK_FILTER:
      return update(state, {
        data: {
          filteredTaskList: { $set: payload },
        },
      });
    case CLAIM_SAMPLE.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case CLAIM_SAMPLE.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
        },
        data: {
          scannedSample: { $set: payload },
        },
      });
    case CLAIM_SAMPLE.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: payload },
        },
        data: {
          scannedSample: { $set: null },
        },
      });
    case RESET_CLAIM_TASK_REDUCER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
